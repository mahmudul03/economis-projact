const header = document.querySelector('header');

window.addEventListener('scroll' , function(){
    header.classList.toggle('sticky', window.scrollY > 200)
})

let nav = document.getElementById('nav');

document.getElementById('navBtn').addEventListener('click', function(){
    nav.classList.toggle('showNav');
})
