(function(){
var b=document.querySelector('.burger'),n=document.getElementById('nav');
if(b&&n)b.addEventListener('click',function(){var o=n.classList.toggle('open');b.setAttribute('aria-expanded',o?'true':'false');b.setAttribute('aria-label',o?'Close menu':'Open menu');});
function $(i){return document.getElementById(i);}
var f=$('cform');
if(f)f.addEventListener('submit',function(e){e.preventDefault();var fm=$('fm');
 if($('website').value)return;
 if(!f.checkValidity()){fm.hidden=false;fm.textContent='Please add your name, a valid email address and a message, and tick the agreement box.';return;}
 var body='Name: '+$('name').value+'\nEmail: '+$('email').value+'\nTopic: '+$('topic').value+'\n\n'+$('message').value;
 location.href='mailto:'+f.getAttribute('data-to')+'?subject='+encodeURIComponent(f.getAttribute('data-brand')+': '+$('topic').value)+'&body='+encodeURIComponent(body);
 fm.hidden=false;fm.textContent='Your email app should open with the message ready to send. If nothing happens, write to us directly at '+f.getAttribute('data-to')+'.';});
var c=$('cookie'),k=null;try{k=localStorage.getItem('ck_'+location.hostname);}catch(e){}
if(c&&!k)c.classList.add('show');
if(c)c.querySelectorAll('button').forEach(function(bt){bt.addEventListener('click',function(){try{localStorage.setItem('ck_'+location.hostname,bt.getAttribute('data-cookie'));}catch(e){}c.classList.remove('show');});});
var y=$('year');if(y)y.textContent=new Date().getFullYear();
})();
(function(){var d=document.documentElement,rm=window.matchMedia&&matchMedia('(prefers-reduced-motion: reduce)').matches;
[].forEach.call(document.querySelectorAll('.stg'),function(g){[].forEach.call(g.children,function(c,i){c.style.transitionDelay=(i*110)+'ms';});});
function cnt(el){var to=parseFloat(el.getAttribute('data-count')),dec=(el.getAttribute('data-count').split('.')[1]||'').length,t0=null,dur=1600;if(rm){el.textContent=to.toFixed(dec);return;}function f(t){if(!t0)t0=t;var p=Math.min(1,(t-t0)/dur),e=1-Math.pow(1-p,3);el.textContent=(to*e).toFixed(dec);if(p<1)requestAnimationFrame(f);}requestAnimationFrame(f);}
var els=[].slice.call(document.querySelectorAll('.rv,[data-count]'));
if(rm||!('IntersectionObserver' in window)){els.forEach(function(e){e.classList.add('in');if(e.hasAttribute('data-count'))e.textContent=e.getAttribute('data-count');});}
else{var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){var ts=(e.target.__rv||[]).concat(els.indexOf(e.target)>-1?[e.target]:[]);ts.forEach(function(t){t.classList.add('in');if(t.hasAttribute('data-count'))cnt(t);});io.unobserve(e.target);}});},{rootMargin:'0px 0px -6% 0px',threshold:.01});
 els.forEach(function(e){var o=e;if(e.classList.contains('rv-c')||e.classList.contains('rv-w')){o=e.parentElement;}if(o!==e){(o.__rv=o.__rv||[]).push(e);}io.observe(o);});
 setTimeout(function(){els.forEach(function(e){var r=e.getBoundingClientRect();if(r.top<innerHeight&&r.bottom>0)e.classList.add('in');});},1200);}
var px=[].slice.call(document.querySelectorAll('[data-px]')),pr=document.getElementById('prog'),tk=false;
function upd(){var h=innerHeight;if(!rm)px.forEach(function(el){var r=el.parentElement.getBoundingClientRect();if(r.bottom<0||r.top>h)return;var s=+el.getAttribute('data-px');el.style.transform='translate3d(0,'+((r.top+r.height/2-h/2)*s).toFixed(1)+'px,0) scale(1.14)';});
 if(pr){var m=d.scrollHeight-h;pr.style.width=(m>0?scrollY/m*100:0)+'%';}d.classList.toggle('scd',scrollY>60);tk=false;}
addEventListener('scroll',function(){if(!tk){requestAnimationFrame(upd);tk=true;}},{passive:true});addEventListener('resize',upd);upd();
[].forEach.call(document.querySelectorAll('.hs'),function(s){var down=false,x0=0,s0=0,mv=0;s.addEventListener('pointerdown',function(e){if(e.pointerType!=='mouse')return;down=true;mv=0;x0=e.clientX;s0=s.scrollLeft;s.classList.add('drag');});addEventListener('pointerup',function(){down=false;s.classList.remove('drag');});s.addEventListener('pointermove',function(e){if(!down)return;mv=Math.abs(e.clientX-x0);s.scrollLeft=s0-(e.clientX-x0);});s.addEventListener('click',function(e){if(mv>6){e.preventDefault();e.stopPropagation();}},true);});
})();
(function(){function $(i){return document.getElementById(i);}var rm=window.matchMedia&&matchMedia('(prefers-reduced-motion: reduce)').matches;
var ht=$('hero-t');if(ht&&!rm){var v=-12;setInterval(function(){v=v===-12?-13:(v===-13?-11:-12);ht.textContent=v;},2400);}
var tg=[].slice.call(document.querySelectorAll('.wm-tg input'));if(tg.length){var W=[[2,3,9],[4,2,7],[5,1,-3],[1,6,-2]];
 function ly(){var w=1,d=1,b=10,on=[];tg.forEach(function(c){var i=+c.value;$('ly'+i).classList.toggle('on',c.checked);if(c.checked){on.push(i);w+=W[i][0];d+=W[i][1];b+=W[i][2]*0+0;}});
  var br=10-(on.indexOf(2)>-1?2:0)-(on.indexOf(3)>-1?3:0)-(on.length>2?1:0);if(on.indexOf(0)>-1)br=Math.min(10,br+1);w=Math.min(10,w);d=Math.min(10,d+(on.indexOf(0)>-1?1:0));
  var t=on.length===0?'Just you? Not in this weather.':on.indexOf(3)>-1&&on.indexOf(2)>-1?'Full system: ready for cold, wind and rain. Vent the zips when moving.':on.indexOf(2)>-1?'Warm and cosy, but keep a shell handy for wind or rain.':on.indexOf(3)>-1?'Protected from wind and rain; add insulation if you will stop for long.':'Good for active days in cool, dry weather.';
  $('ly-o').innerHTML='<div><span>Warmth</span><i style="--w:'+w*10+'%"></i></div><div><span>Weatherproof</span><i style="--w:'+Math.min(10,on.indexOf(3)>-1?9:(on.indexOf(2)>-1?4:2))*10+'%"></i></div><div><span>Breathable</span><i style="--w:'+Math.max(1,br)*10+'%"></i></div><p>'+t+'</p>';}
 tg.forEach(function(c){c.addEventListener('change',ly);});ly();}
var fl=[].slice.call(document.querySelectorAll('.wm-fl'));fl.forEach(function(b){function on(){fl.forEach(function(x){x.classList.toggle('on',x===b);x.setAttribute('aria-pressed',x===b);});}b.addEventListener('click',on);b.addEventListener('mouseenter',function(){if(matchMedia('(hover:hover)').matches)on();});});
var ts=$('tp-s');if(ts){var ac=[].slice.call(document.querySelectorAll('input[name=ac]'));function tp(){var t=+ts.value,a=0;ac.forEach(function(e){if(e.checked)a=+e.value;});var e=t+a*7;$('tp-o').innerHTML=(t>0?'+':'')+t+'&deg;C';
  var h=Math.max(10,Math.min(300,(t+25)/40*300));var m=$('tp-m');m.setAttribute('y',340-h);m.setAttribute('height',h);var col=t<-10?'#7FD1E8':t<3?'#E9A23B':'#E2572B';m.style.fill=col;document.querySelector('.tm').style.fill=col;var hd=$('hd-t');if(hd)hd.innerHTML=(t>0?'+':'−')+Math.abs(t)+'&deg;C';
  var R=e<-12?['Expedition warm',['Thermal base layer','Fleece plus an insulated jacket','Down parka or a hooded down jacket','Shell if windy, hat, gloves and a neck warmer']]:e<-3?['Properly cold',['Merino base layer','Warm knit or fleece','Down or synthetic jacket with a hood','Hat and gloves']]:e<5?['Chilly',['Long-sleeved base layer','Light fleece or knit','Light insulated jacket or wool coat','Scarf for the wind']]:['Cool and fresh',['T-shirt or light base','Fleece or light knit','Windproof or light shell in your bag']];
  $('tp-r').innerHTML='<h3>'+R[0]+'</h3><ul>'+R[1].map(function(x){return '<li>'+x+'</li>';}).join('')+'</ul>';}
 ts.addEventListener('input',tp);ac.forEach(function(e){e.addEventListener('change',tp);});tp();}
})();
