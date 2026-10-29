/* Gravações CC0 locais. Web Audio é usado somente para os efeitos de acerto e dica. */
(()=>{
  'use strict';
  const profiles={
    mapa:{name:'Cidade · pássaros e movimento da rua',file:'mapa',volume:.28},
    mineracao:{name:'Mineração · caminhão e escavadeira',file:'mineracao',volume:.22},
    oficina:{name:'Oficina · chave de catraca',file:'oficina',volume:.3},
    corporativo:{name:'Escritório · digitação no teclado',file:'corporativo',volume:.32},
    escola:{name:'Escola · escrita no quadro',file:'escola',volume:.2},
    praca:{name:'Praça · canto de pássaros',file:'praca',volume:.3},
    casa:{name:'Casa · pratos e talheres',file:'casa',volume:.26},
    armazem:{name:'Armazém · aviso de veículo em marcha a ré',file:'armazem',volume:.2}
  };
  let ctx=null,master=null,enabled=false,entered=false,scene='mapa',media=null,playEpoch=0,cueNodes=[];
  function context(){if(ctx)return ctx;const AC=window.AudioContext||window.webkitAudioContext;if(!AC)return null;ctx=new AC();master=ctx.createGain();master.gain.value=.2;master.connect(ctx.destination);return ctx}
  function stopCues(){for(const pair of cueNodes){try{pair[0].stop()}catch{}for(const n of pair){try{n.disconnect()}catch{}}}cueNodes=[]}
  function stopAmbient(){playEpoch++;if(media){const old=media;media=null;old.onerror=null;old.pause();old.removeAttribute('src');old.load();old.remove()}}
  function failedPlayback(audio,epoch){if(epoch!==playEpoch||audio!==media||!enabled)return;enabled=false;stopAmbient();refresh();if(typeof toast==='function')toast('Não foi possível carregar o som deste ambiente. Você pode continuar jogando e tentar ativá-lo novamente.')}
  function startAmbient(){stopAmbient();if(!enabled||!entered||document.hidden)return Promise.resolve();const p=profiles[scene];const audio=new Audio('assets/audio/'+p.file+'.mp3');const epoch=playEpoch;media=audio;audio.id='environmentAudio';audio.hidden=true;document.body.append(audio);audio.preload='none';audio.loop=true;audio.volume=p.volume;audio.onerror=()=>failedPlayback(audio,epoch);return Promise.resolve(audio.play()).catch(()=>failedPlayback(audio,epoch))}
  function tone(freq,duration,volume,delay=0){if(!ctx||ctx.state!=='running'||!master)return;const t=ctx.currentTime+delay,o=ctx.createOscillator(),g=ctx.createGain(),pair=[o,g];cueNodes.push(pair);o.type='sine';o.frequency.setValueAtTime(freq,t);g.gain.setValueAtTime(.0001,t);g.gain.exponentialRampToValueAtTime(volume,t+.012);g.gain.exponentialRampToValueAtTime(.0001,t+duration);o.connect(g);g.connect(master);o.onended=()=>{o.disconnect();g.disconnect();cueNodes=cueNodes.filter(n=>n!==pair)};o.start(t);o.stop(t+duration+.03)}
  function speaker(){return enabled?'<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"><path d="M11 4 6 8H2v8h4l5 4V4Zm4 4a6 6 0 0 1 0 8m3-11a10 10 0 0 1 0 14"/></svg>':'<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"><path d="M11 4 6 8H2v8h4l5 4V4Zm4 5 6 6m0-6-6 6"/></svg>'}
  function refresh(){const b=document.getElementById('soundBtn');if(!b)return;b.innerHTML=speaker();b.setAttribute('aria-pressed',String(enabled));b.setAttribute('aria-label',enabled?'Desativar som ambiente':'Ativar som ambiente');b.title=enabled?profiles[scene].name+' · desligar som':'Ativar som ambiente'}
  async function enable(value){enabled=Boolean(value);if(enabled){const playing=startAmbient();try{context();await ctx?.resume()}catch{}await playing}else{stopAmbient();stopCues();await ctx?.suspend().catch(()=>{})}refresh();return enabled}
  function mountControl(){const tools=document.querySelector('.hud-tools');if(!tools)return;if(!document.getElementById('soundBtn')){const b=document.createElement('button');b.id='soundBtn';b.className='hud-icon';b.onclick=()=>enable(!enabled);tools.prepend(b)}refresh()}
  function setScene(id){const next=profiles[id]?id:'mapa';if(next!==scene){scene=next;if(enabled&&entered)startAmbient()}refresh()}
  function cue(kind){if(!enabled||document.hidden)return;if(kind==='success'){tone(523,.13,.09);tone(659,.16,.08,.1);tone(784,.19,.07,.22)}if(kind==='hint'){tone(520,.11,.055);tone(690,.14,.045,.13)}}
  window.SegLabAudio={setScene,mountControl,cue,enable};

  function intro(){const main=document.getElementById('app');main.inert=true;const layer=document.createElement('section');layer.id='introOverlay';layer.className='intro-overlay';layer.setAttribute('role','dialog');layer.setAttribute('aria-modal','true');layer.setAttribute('aria-labelledby','introTitle');layer.innerHTML=`<div class="intro-scenery"></div><div class="intro-content"><span class="intro-badge">SEG LAB · CIDADE DA PREVENÇÃO</span><div class="intro-sigil">S<span>+</span></div><p class="intro-kicker">UM JOGO SOBRE OLHAR E CUIDAR</p><h1 id="introTitle">Toda descoberta<br>começa com <em>atenção.</em></h1><p class="intro-summary">Explore a cidade, identifique os riscos<br>e descubra como prevenir.</p><div class="intro-start"><button id="startSound" class="intro-primary">Entrar com som <span>↗</span></button><button id="startSilent" class="intro-silent">Entrar sem som</button></div><p class="intro-audio-note">Sons de cada ambiente · você pode desligá-los no HUD.</p><p class="intro-credit">vibe coded by <strong>rômulo gonzaga</strong></p></div><span class="intro-edition">${SECTORS.length} SETORES <i>·</i> ${SECTORS.reduce((n,s)=>n+s.risks.length,0)} DESCOBERTAS</span>`;document.body.append(layer);const enter=async sound=>{entered=true;document.getElementById('startSound').disabled=true;document.getElementById('startSilent').disabled=true;if(sound)await enable(true);main.inert=false;layer.remove();mountControl();document.getElementById('worldViewport')?.focus();document.querySelector('.hud-brand, #backMap')?.focus()};document.getElementById('startSound').onclick=()=>enter(true);document.getElementById('startSilent').onclick=()=>enter(false);layer.addEventListener('keydown',e=>{if(e.key==='Escape'){e.preventDefault();enter(false)}if(e.key==='Tab'){const a=document.getElementById('startSound'),b=document.getElementById('startSilent');if(e.shiftKey&&document.activeElement===a){e.preventDefault();b.focus()}else if(!e.shiftKey&&document.activeElement===b){e.preventDefault();a.focus()}}});document.getElementById('startSound').focus()}

  document.addEventListener('visibilitychange',()=>{if(document.hidden){media?.pause();stopCues();ctx?.suspend().catch(()=>{})}else if(enabled&&entered){ctx?.resume().catch(()=>{});if(media){const a=media,e=playEpoch;Promise.resolve(a.play()).catch(()=>failedPlayback(a,e))}else startAmbient()}});
  window.addEventListener('pagehide',()=>{stopAmbient();stopCues();ctx?.suspend().catch(()=>{})});
  window.addEventListener('pageshow',()=>{if(enabled&&entered){ctx?.resume().catch(()=>{});startAmbient()}});
  document.addEventListener('DOMContentLoaded',intro);
})();
