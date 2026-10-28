/* Sons sintetizados localmente. Nenhum áudio ou dado é enviado pela rede. */
(()=>{
  'use strict';
  const profiles={
    mapa:{name:'Cidade · vento e pássaros',noise:850,noiseGain:.035,hum:0,event:'bird',every:6500},
    mineracao:{name:'Mineração · motores e britagem',noise:260,noiseGain:.12,hum:48,event:'crusher',every:2700},
    oficina:{name:'Oficina · motor e ferramentas',noise:420,noiseGain:.045,hum:62,event:'metal',every:4200},
    corporativo:{name:'Escritório · ventilação e teclado',noise:1100,noiseGain:.012,hum:100,event:'typing',every:4700},
    escola:{name:'Escola · sala e atividade na oficina',noise:750,noiseGain:.025,hum:85,event:'school',every:5400},
    praca:{name:'Praça · água, vento e pássaros',noise:1300,noiseGain:.045,hum:0,event:'bird',every:4100},
    casa:{name:'Casa · relógio e cozinha',noise:700,noiseGain:.009,hum:80,event:'clock',every:1000},
    armazem:{name:'Armazém · motores e movimentação',noise:330,noiseGain:.05,hum:72,event:'warehouse',every:5100}
  };
  let ctx=null,master=null,ambient=null,enabled=false,entered=false,scene='mapa',timer=null,nodes=[],clockTick=false;
  function remember(node){nodes.push(node);return node}
  function context(){if(ctx)return ctx;const AC=window.AudioContext||window.webkitAudioContext;if(!AC)return null;ctx=new AC();master=ctx.createGain();master.gain.value=.22;const limiter=ctx.createDynamicsCompressor();limiter.threshold.value=-16;limiter.knee.value=15;limiter.ratio.value=5;master.connect(limiter);limiter.connect(ctx.destination);return ctx}
  function stopAmbient(){if(timer!==null)clearInterval(timer);timer=null;for(const n of nodes){try{n.stop?.()}catch{}try{n.disconnect()}catch{}}nodes=[];ambient=null}
  function tone(freq,duration=.08,volume=.04,type='sine',endFreq=null,delay=0,route=ambient){if(!ctx||!route)return;const t=ctx.currentTime+delay,o=remember(ctx.createOscillator()),g=remember(ctx.createGain());o.type=type;o.frequency.setValueAtTime(freq,t);if(endFreq)o.frequency.exponentialRampToValueAtTime(Math.max(1,endFreq),t+duration);g.gain.setValueAtTime(.0001,t);g.gain.exponentialRampToValueAtTime(Math.max(.0002,volume),t+.012);g.gain.exponentialRampToValueAtTime(.0001,t+duration);o.connect(g);g.connect(route);o.start(t);o.stop(t+duration+.03);o.onended=()=>{try{o.disconnect();g.disconnect()}catch{}nodes=nodes.filter(n=>n!==o&&n!==g)}}
  function eventSound(kind){if(!enabled||!ctx||ctx.state!=='running'||!ambient)return;
    if(kind==='bird'){tone(2400,.15,.045,'sine',3400);tone(3250,.12,.035,'sine',2100,.2);if(scene==='praca')tone(1850,.18,.025,'sine',2400,.42)}
    if(kind==='crusher'){tone(58,.25,.17,'triangle',30);tone(135,.08,.04,'triangle',65,.13);tone(420,.04,.02,'triangle',180,.3)}
    if(kind==='metal'){tone(1500,.15,.045,'sine',850);tone(2200,.09,.016,'sine',1200,.02)}
    if(kind==='typing'){for(let i=0;i<6;i++)tone(350+(i%3)*150,.025,.018,'triangle',180,i*.11)}
    if(kind==='school'){tone(380,.05,.025,'triangle',190);tone(570,.04,.018,'triangle',260,.22);tone(1050,.08,.014,'sine',700,.6)}
    if(kind==='clock'){clockTick=!clockTick;tone(clockTick?1000:800,.028,.022,'sine',500)}
    if(kind==='warehouse'){tone(170,.4,.07,'triangle',95);tone(950,.14,.023,'sine',550,.25)}
  }
  function startAmbient(){stopAmbient();if(!enabled||!entered||!ctx)return;const p=profiles[scene]||profiles.mapa;ambient=remember(ctx.createGain());ambient.gain.value=.0001;ambient.gain.linearRampToValueAtTime(.85,ctx.currentTime+.6);ambient.connect(master);
    const noise=remember(ctx.createBufferSource()),buf=ctx.createBuffer(1,ctx.sampleRate*6,ctx.sampleRate),data=buf.getChannelData(0);let last=0;for(let i=0;i<data.length;i++){last=(last+Math.random()*.04-.02)/1.02;data[i]=last*3.5}noise.buffer=buf;noise.loop=true;const filter=remember(ctx.createBiquadFilter()),gain=remember(ctx.createGain());filter.type='lowpass';filter.frequency.value=p.noise;filter.Q.value=.3;gain.gain.value=p.noiseGain;noise.connect(filter);filter.connect(gain);gain.connect(ambient);noise.start();
    if(p.hum){const motor=remember(ctx.createOscillator()),low=remember(ctx.createBiquadFilter()),mg=remember(ctx.createGain());motor.type='triangle';motor.frequency.value=p.hum;low.type='lowpass';low.frequency.value=210;mg.gain.value=scene==='mineracao'?.1:.026;motor.connect(low);low.connect(mg);mg.connect(ambient);motor.start()}
    timer=setInterval(()=>eventSound(p.event),p.every);
  }
  function speaker(){return enabled?'<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"><path d="M11 4 6 8H2v8h4l5 4V4Zm4 4a6 6 0 0 1 0 8m3-11a10 10 0 0 1 0 14"/></svg>':'<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"><path d="M11 4 6 8H2v8h4l5 4V4Zm4 5 6 6m0-6-6 6"/></svg>'}
  function refresh(){const b=document.getElementById('soundBtn');if(!b)return;b.innerHTML=speaker();b.setAttribute('aria-pressed',String(enabled));b.setAttribute('aria-label',enabled?'Desativar som ambiente':'Ativar som ambiente');b.title=enabled?profiles[scene].name+' · desligar som':'Ativar som ambiente'}
  async function enable(value){enabled=Boolean(value);if(enabled){try{if(!context())throw Error('unsupported');await ctx.resume();startAmbient()}catch{enabled=false;stopAmbient();if(typeof toast==='function')toast('O áudio não está disponível neste navegador. Você pode jogar normalmente.')}}else{stopAmbient();if(ctx)await ctx.suspend().catch(()=>{})}refresh();return enabled}
  function mountControl(){const tools=document.querySelector('.hud-tools');if(!tools)return;if(!document.getElementById('soundBtn')){const b=document.createElement('button');b.id='soundBtn';b.className='hud-icon';b.onclick=()=>enable(!enabled);tools.prepend(b)}refresh()}
  function setScene(id){const next=profiles[id]?id:'mapa';if(next!==scene){scene=next;if(enabled&&entered)startAmbient()}refresh()}
  function cue(kind){if(!enabled||!ctx||ctx.state!=='running')return;if(kind==='success'){tone(523,.13,.09,'sine',null,0,master);tone(659,.16,.08,'sine',null,.1,master);tone(784,.19,.07,'sine',null,.22,master)}if(kind==='hint'){tone(520,.11,.055,'sine',null,0,master);tone(690,.14,.045,'sine',null,.13,master)}}
  window.SegLabAudio={setScene,mountControl,cue,enable};
  function intro(){const main=document.getElementById('app');main.inert=true;const layer=document.createElement('section');layer.id='introOverlay';layer.className='intro-overlay';layer.setAttribute('role','dialog');layer.setAttribute('aria-modal','true');layer.setAttribute('aria-labelledby','introTitle');layer.innerHTML=`<div class="intro-scenery"></div><div class="intro-content"><span class="intro-badge">SEG LAB · CIDADE DA PREVENÇÃO</span><div class="intro-sigil">S<span>+</span></div><p class="intro-kicker">UM JOGO SOBRE OLHAR E CUIDAR</p><h1 id="introTitle">Toda descoberta<br>começa com <em>atenção.</em></h1><p class="intro-summary">Explore a cidade, identifique os riscos<br>e descubra como prevenir.</p><div class="intro-start"><button id="startSound" class="intro-primary">Entrar com som <span>↗</span></button><button id="startSilent" class="intro-silent">Entrar sem som</button></div><p class="intro-audio-note">Sons ambientes suaves · você pode desligá-los no HUD.</p><p class="intro-credit">vibe coded by <strong>rômulo gonzaga</strong></p></div><span class="intro-edition">7 SETORES <i>·</i> 25 DESCOBERTAS</span>`;document.body.append(layer);const enter=async sound=>{entered=true;document.getElementById('startSound').disabled=true;document.getElementById('startSilent').disabled=true;if(sound)await enable(true);main.inert=false;layer.remove();mountControl();document.getElementById('worldViewport')?.focus();document.querySelector('.hud-brand, #backMap')?.focus()};document.getElementById('startSound').onclick=()=>enter(true);document.getElementById('startSilent').onclick=()=>enter(false);layer.addEventListener('keydown',e=>{if(e.key==='Escape'){e.preventDefault();enter(false)}if(e.key==='Tab'){const a=document.getElementById('startSound'),b=document.getElementById('startSilent');if(e.shiftKey&&document.activeElement===a){e.preventDefault();b.focus()}else if(!e.shiftKey&&document.activeElement===b){e.preventDefault();a.focus()}}});document.getElementById('startSound').focus()}
  document.addEventListener('visibilitychange',()=>{if(!ctx)return;if(document.hidden)ctx.suspend().catch(()=>{});else if(enabled&&entered)ctx.resume().catch(()=>{})});
  window.addEventListener('pagehide',()=>{stopAmbient();ctx?.suspend().catch(()=>{})});
  window.addEventListener('pageshow',()=>{if(enabled&&entered)ctx?.resume().then(startAmbient).catch(()=>{})});
  document.addEventListener('DOMContentLoaded',intro);
})();
