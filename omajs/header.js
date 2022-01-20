var nav = document.querySelector('nav');

window.addEventListener('scroll', function () {
 if (window.pageYOffset > 100) {
   nav.classList.add('shadow', 'bg-vari');
   nav.classList.remove('bg-lapi');
 } else {
   nav.classList.add('bg-lapi');
   nav.classList.remove('shadow', 'bg-vari');
 }
});