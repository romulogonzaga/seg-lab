const fs=require('fs'),vm=require('vm'),assert=require('assert/strict');
const nodes=new Map(),events={},tracks=[],playing=new Set();let createdContexts=0,oscillators=0,rejectNext=false,deferNext=false,finishPlay;
function element(id=''){return {id,innerHTML:'',disabled:false,inert:false,attributes:{},setAttribute(k,v){this.attributes[k]=v},append(){},prepend(){},remove(){},focus(){},addEventListener(k,f){this[k]=f}}}
const get=id=>{if(!nodes.has(id))nodes.set(id,element(id));return nodes.get(id)};
const param=()=>({value:0,setValueAtTime(){},exponentialRampToValueAtTime(){}});
class AudioNode{constructor(){this.frequency=param();this.gain=param()}connect(){}disconnect(){}start(){}stop(){}}
class Context{constructor(){createdContexts++;this.state='suspended';this.currentTime=0;this.destination={}}createGain(){return new AudioNode()}createOscillator(){oscillators++;return new AudioNode()}createBufferSource(){throw Error('Não gerar ruído de ambiente')}async resume(){this.state='running'}async suspend(){this.state='suspended'}}
class Recording{constructor(src){this.src=src;this.paused=true;tracks.push(this)}play(){if(rejectNext){rejectNext=false;return Promise.reject(Error('media error'))}this.paused=false;playing.add(this);if(deferNext){deferNext=false;return new Promise(resolve=>finishPlay=resolve)}return Promise.resolve()}pause(){this.paused=true;playing.delete(this)}removeAttribute(key){if(key==='src')this.src=''}load(){}remove(){}}
const document={hidden:false,body:element(),getElementById:get,querySelector:s=>s==='.hud-tools'?get('tools'):null,createElement:()=>element(),addEventListener:(k,f)=>events[k]=f};
const window={AudioContext:Context,addEventListener:(k,f)=>events[k]=f};
const c=vm.createContext({document,window,Audio:Recording,console,toast(){}});
vm.runInContext(fs.readFileSync('dist/data.js','utf8')+'\n'+fs.readFileSync('dist/audio.js','utf8'),c);
(async()=>{
 assert.equal(tracks.length,0,'Nenhuma mídia deve carregar antes da escolha');assert.equal(createdContexts,0);
 events.DOMContentLoaded();assert(get('app').inert);await get('startSilent').onclick();assert.equal(tracks.length,0,'Entrada silenciosa não baixa gravações');assert(!get('app').inert);
 await window.SegLabAudio.enable(true);assert.equal(createdContexts,1);assert.equal(playing.size,1);assert.equal(oscillators,0,'Ambiente não usa osciladores nem ruído sintetizado');
 const paths=new Set();
 for(const id of ['mineracao','oficina','corporativo','escola','praca','casa','armazem','mapa']){const old=tracks.at(-1);window.SegLabAudio.setScene(id);assert(old.paused);assert.equal(playing.size,1,'Apenas uma gravação por vez');const a=tracks.at(-1);assert.equal(a.src,'assets/audio/'+id+'.mp3');assert(a.volume>0&&a.volume<=.35);assert(a.loop);assert.equal(a.preload,'none');paths.add(a.src);assert(fs.statSync('dist/'+a.src).size>10000)}
 assert.equal(paths.size,8);const n=tracks.length;window.SegLabAudio.setScene('mapa');assert.equal(tracks.length,n,'Mesmo setor não duplica o áudio');
 document.hidden=true;events.visibilitychange();assert.equal(playing.size,0);document.hidden=false;events.visibilitychange();assert.equal(playing.size,1);
 await window.SegLabAudio.enable(false);assert.equal(playing.size,0);assert(tracks.every(a=>a.paused));
 deferNext=true;const starting=window.SegLabAudio.enable(true);await window.SegLabAudio.enable(false);finishPlay();await starting;assert.equal(playing.size,0,'Mute durante carregamento não reativa a faixa');
 rejectNext=true;await window.SegLabAudio.enable(true);assert.equal(playing.size,0);assert.equal(get('soundBtn').attributes['aria-pressed'],'false');
 await window.SegLabAudio.enable(true);events.pagehide();assert.equal(playing.size,0);events.pageshow();assert.equal(playing.size,1);await window.SegLabAudio.enable(false);
 console.log('PASS: oito gravações locais, sem ruído gerado, sem autoplay, troca sem sobreposição, pausa em segundo plano, mute durante carregamento e recuperação de erro.');
})().catch(e=>{console.error(e);process.exitCode=1});
