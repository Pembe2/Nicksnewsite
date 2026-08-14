const header=document.querySelector('.header');
const menu=document.querySelector('.menu-btn');
const nav=document.querySelector('.nav');

addEventListener('scroll',()=>header.classList.toggle('scrolled',scrollY>8));
menu?.addEventListener('click',()=>{
  const open=nav.classList.toggle('open');
  menu.setAttribute('aria-expanded',String(open));
});
nav?.querySelectorAll('a').forEach(link=>link.addEventListener('click',()=>{
  nav.classList.remove('open');
  menu?.setAttribute('aria-expanded','false');
}));
