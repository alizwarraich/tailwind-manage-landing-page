const btn = document.getElementById('menu-btn')
const nav = document.getElementById('menu')
const swiper_container = document.getElementsByClassName('swiper')[0]
const swiper_wrapper = document.getElementsByClassName('swiper-wrapper')[0]
const swiper_slide = document.getElementsByClassName('swiper-slide')[0]
const swiper_slide1 = document.getElementsByClassName('swiper-slide')[1]
const swiper_slide2 = document.getElementsByClassName('swiper-slide')[2]
const swiper_pagination = document.getElementsByClassName('swiper-pagination')[0]


if (window.innerWidth > 576) {
    swiper_container.classList.remove('swiper')
    swiper_wrapper.classList.remove('swiper-wrapper')
    swiper_pagination.classList.add('no-swiper-pagination')
    swiper_slide.classList.remove('swiper-slide')
    swiper_slide1.classList.remove('swiper-slide')
    swiper_slide2.classList.remove('swiper-slide')
}
else {
    swiper_container.classList.add('swiper')
    swiper_wrapper.classList.add('swiper-wrapper')
    swiper_pagination.classList.remove('no-swiper-pagination')
    swiper_slide.classList.add('swiper-slide')
    swiper_slide1.classList.add('swiper-slide')
    swiper_slide2.classList.add('swiper-slide')
}

btn.addEventListener('click', () => {
    btn.classList.toggle('open')
    nav.classList.toggle('flex')
    nav.classList.toggle('hidden')
})

const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    // loop: true,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    // And if we need scrollbar
    // scrollbar: {
    //     el: '.swiper-scrollbar',
    // },
});