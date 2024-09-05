let dark = document.querySelector('.dark');
let bright = document.querySelector('.bright');
let body = document.querySelector('body');
let para = document.querySelector('.para');
let menu = document.querySelector('.menu');
let manuList = document.querySelector('#manu_list');
let cross = document.querySelector('.cross');



dark.addEventListener('click',function(){
    body.style.background = 'black';
    para.style.color = 'white';
    dark.classList.add('active');
})
bright.addEventListener('click', function(){
    dark.classList.remove('active');
    body.style.background = 'white';
    para.style.color = 'rgb(128, 0, 0)';
})
menu.addEventListener('click', function(){
    manuList.classList.add('activer');
})
cross.addEventListener('click', function(){
    manuList.classList.remove('activer');
})
manuList.addEventListener('click', function(){
    manuList.classList.remove('activer');
})
