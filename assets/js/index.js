const menuBurger = document.querySelector('.menu-burger');
const navMenu = document.querySelector('.nav-menu');

//ouverture du burger au clic sur ce dernier
menuBurger.addEventListener('click',function(){
    navMenu.classList.toggle('active');
    menuBurger.classList.toggle('active');
});


