const navMenuMobile = document.getElementById('mobile');
const btnMenuMobile = document.getElementById('btn-mobile');

btnMenuMobile.addEventListener('click', ()=> {
    navMenuMobile.classList.toggle('nav__menu__active');
})