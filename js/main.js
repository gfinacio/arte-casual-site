(function(){
var it=[].slice.call(document.querySelectorAll('.g')),lb=document.getElementById('lb'),im=lb.querySelector('img'),cp=lb.querySelector('p'),i=0,last=null;
function show(n){i=(n+it.length)%it.length;var s=it[i].querySelector('img');im.src=s.src;im.alt=s.alt;cp.textContent=it[i].dataset.t+' · '+(i+1)+'/'+it.length}
function open(n){last=document.activeElement;show(n);lb.hidden=false;document.body.style.overflow='hidden';lb.querySelector('[data-a=x]').focus()}
function close(){lb.hidden=true;document.body.style.overflow='';if(last)last.focus()}
it.forEach(function(b,n){b.addEventListener('click',function(){open(n)})});
lb.addEventListener('click',function(e){var a=e.target.dataset&&e.target.dataset.a;if(a==='x'||e.target===lb)close();else if(a==='p')show(i-1);else if(a==='n')show(i+1)});
document.addEventListener('keydown',function(e){if(lb.hidden)return;if(e.key==='Escape')close();else if(e.key==='ArrowLeft')show(i-1);else if(e.key==='ArrowRight')show(i+1)});
})();
