const fs=require('fs'),vm=require('vm'),assert=require('assert/strict'),path=require('path');
const elements=new Map();let stored={};
function el(s){if(!elements.has(s))elements.set(s,{innerHTML:'',textContent:'',className:'',style:{},dataset:{},addEventListener(){},showModal(){},close(){},focus(){},clientWidth:800,clientHeight:500,scrollWidth:800,scrollHeight:500,scrollLeft:0,scrollTop:0});return elements.get(s)}
const context=vm.createContext({document:{querySelector:el,querySelectorAll:()=>[],title:''},localStorage:{getItem:k=>stored[k]||null,setItem:(k,v)=>stored[k]=v},location:{hash:'#mapa'},window:{addEventListener(){},scrollTo(){}},setTimeout:()=>1,clearTimeout(){},requestAnimationFrame:f=>f(),console});
vm.runInContext(fs.readFileSync('dist/data.js','utf8')+'\n'+fs.readFileSync('dist/app.js','utf8'),context);
const run=code=>vm.runInContext(code,context);
assert.equal(run('total'),42);assert.equal(run('SECTORS.length'),7);
for(const s of run('SECTORS')){assert(fs.existsSync(path.join('dist/assets',s.id+'.png')));assert.equal(new Set(s.risks.map(r=>r.id)).size,s.risks.length);for(const r of s.risks){assert.equal(r.area.length,4);assert(r.area.every(Number.isFinite));assert(r.area[0]>0&&r.area[0]<1&&r.area[1]>0&&r.area[1]<1);assert(r.area[2]>0&&r.area[3]>0);assert(r.refs.length);for(const ref of r.refs)assert(new URL(ref[1]).protocol==='https:')}}
run(`for(const s of SECTORS){current=s;for(const r of s.risks){inspect(r.area[0],r.area[1]);inspect(r.area[0],r.area[1]);}if(found(s).length!==s.risks.length)throw Error('Hotspot inacessível: '+s.id)}`);
assert.equal(run('totalFound()'),42);assert.equal(run('completed()'),7);assert(run(`document.querySelector('#sceneSide').innerHTML.includes('sete setores')`));
run('renderMap()');assert(run(`document.querySelector('#app').innerHTML.includes('Você identificou os 42 riscos.')`));assert(!run(`document.querySelector('#app').innerHTML.includes('$'+'{total}')`));
assert.equal(run(`Object.values(loadProgress()).reduce((n,a)=>n+a.length,0)`),42);
run(`current=SECTORS[0];inspect(0,0)`);assert.equal(run('totalFound()'),42);
run(`resetGame();document.querySelector('#confirmReset').onclick()`);assert.equal(run('totalFound()'),0);
run(`current=SECTORS.find(s=>s.id==='casa');inspect(.837,.284);inspect(.8,.323)`);assert.equal(run(`found(current).length`),2);
run(`setZoom(9)`);assert.equal(run('zoom'),3);run(`setZoom(-2)`);assert.equal(run('zoom'),1);
run(`current=SECTORS.find(s=>s.id==='oficina');progress.oficina=[];hintTarget=null;hintLevel=0;hintText='';revealId=null;requestHint()`);
assert.equal(run('hintLevel'),1);assert.equal(run('revealId'),null);assert.equal(run('found(current).length'),0);
run(`requestHint()`);assert.equal(run('hintLevel'),2);assert.equal(run('revealId'),'ferramentas');assert.equal(run('found(current).length'),0);
run(`inspect(hintTarget.area[0],hintTarget.area[1])`);assert.equal(run('found(current).length'),1);assert.equal(run('revealId'),null);assert.equal(run('hintLevel'),0);
run(`requestHint()`);assert.equal(run('hintTarget.id'),'oleo');assert.equal(run('hintLevel'),1);
stored['seglab-cidade-v1']='not json';assert.equal(run(`Object.values(loadProgress()).flat().length`),0);
stored['seglab-cidade-v1']=JSON.stringify({oficina:['oleo','oleo','invalid']});assert.equal(run(`loadProgress().oficina.length`),1);
console.log('PASS: 7 cenários, 42 hotspots, acertos duplicados, conclusão, persistência, reset, riscos próximos, zoom, recuperação de dados e dicas em dois níveis sem acerto automático.');
