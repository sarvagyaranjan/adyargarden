const navSLide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links ');
    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');
        burger.classList.toggle('toggle');
    });
};
navSLide();
window.addEventListener("scroll", () => {
    const nav = document.querySelector('.navbar');
    const logo = document.querySelector('.logo');
    const active = document.querySelector('.navbar .nav-links li .active');
    logo.classList.toggle("white", window.scrollY > 50);
    nav.classList.toggle("sticky", window.scrollY > 50);
});

// // color change on scroll

// $(function () {
//     $(document).scroll(function () {
//         var $nav = $(".navbar-fixed-top");
//         $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
//     });
// });

// const burger = document.querySelector('#burger')
// const menu = document.querySelector('#menu')
// burger.addEventListener('click', () => {

//     if (menu.classList.contains('none')) {
//         menu.classList.remove('none')
//         menu.classList.add('block')

//     }
//     else {
//         menu.classList.add('none');
//     }
// })

// const burger = document.querySelector('#burger')
// const menu = document.querySelector('#menu')
// burger.addEventListener('click', () => {

//     if (document.getElementById('menu').contains('none')) {
//         document.getElementById('menu').style.display = "block"
//     }
//     else {
//         document.getElementById('menu').style.display = "none"
//     }
// })

const myfunction = () => {

    let style = {
        display: "block"
    }
    style();
}

myfunction();