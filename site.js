document.addEventListener('DOMContentLoaded',function(){
var b=document.getElementById('burger'),m=document.getElementById('mpanel');if(b)b.addEventListener('click',function(){m.classList.toggle('open')});
var mo=document.querySelector('.more>span');if(mo)mo.addEventListener('click',function(){mo.parentElement.classList.toggle('open')});
document.querySelectorAll('.hero').forEach(function(h){var s=h.querySelectorAll('.slide'),d=h.querySelectorAll('.dots button'),i=0,t;
function go(n){i=(n+s.length)%s.length;s.forEach(function(x,k){x.classList.toggle('on',k===i)});d.forEach(function(x,k){x.classList.toggle('on',k===i)})}
function play(){t=setInterval(function(){go(i+1)},5500)}function stop(){clearInterval(t)}
h.querySelector('.arrow.l').onclick=function(){go(i-1)};h.querySelector('.arrow.r').onclick=function(){go(i+1)};
d.forEach(function(x,k){x.onclick=function(){go(k)}});h.addEventListener('mouseenter',stop);h.addEventListener('mouseleave',play);play()})});