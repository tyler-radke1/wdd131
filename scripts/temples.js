const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.nav-menu ul');

hamburger.addEventListener('click', () => {
    menu.classList.toggle("active")
})