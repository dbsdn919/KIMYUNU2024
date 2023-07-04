const toggleBtn = document.querySelector('.navbar_toggleBtn');
const menu = document.querySelector('.navbar_menu');
const navbar = document.querySelector('.navbar');
const logo = document.querySelector('.navbar_logo');

toggleBtn.addEventListener('click', function () {
        menu.classList.toggle('active');
        navbar.classList.toggle('active');
        logo.classList.toggle('active');
        toggleBtn.classList.toggle('active');
    });