const phoneSelect = document.querySelector('.phone-select .header-phones');

if (phoneSelect) {
    phoneSelect.addEventListener('click' , (e)=> {
        e.stopPropagation()
        let currentSelectWrap = e.target.closest('.phone-select');
        let currentSelectBody = currentSelectWrap.querySelector('.phone-select-wrapper');
        currentSelectBody.classList.toggle('active');
        phoneSelect.classList.toggle('active');
    })
    document.addEventListener('click', (e)=> {
        let lists = document.querySelectorAll('.phone-select-wrapper.active')
        if (!e.target.closest('.phone-select') && lists){
            lists.forEach(el=> {
                el.classList.remove('active');
                phoneSelect.classList.toggle('active');
            })
        }
    })
}

// menu

const menuModal = document.querySelector('.menu-modal');
const overlay = document.querySelector('.overlay');
const closeMenuBtn = document.querySelector('.menu-modal .close-btn');
const burgerBtn = document.querySelector('.burger-btn');

const showMenuModal = () => {
    overlay.classList.add('open');
    menuModal.classList.add('active');
}
const hideMenuModal = () => {
    overlay.classList.remove('open');
    menuModal.classList.remove('active');
}
burgerBtn?.addEventListener('click' , ()=> {
    showMenuModal()
})

closeMenuBtn?.addEventListener('click' , ()=> {
    hideMenuModal()
})
overlay?.addEventListener('click' , ()=> {
    hideMenuModal()
})



document.addEventListener('DOMContentLoaded', () => {
    const heroSwiper = document.querySelector('.hero-swiper');

    if (heroSwiper) {
        const heroBlockSwiper = new Swiper(heroSwiper, {
            slidesPerView: 1,
            navigation: {
                nextEl: ".hero-swiper-button-next",
                prevEl: ".hero-swiper-button-prev",
            },
            on: {
                init: function () {
                    updateCustomPagination(this);
                },
                slideChange: function () {
                    updateCustomPagination(this);
                },
            },
        });

        function updateCustomPagination(swiperInstance) {
            const currentSlide = swiperInstance.realIndex + 1;
            const totalSlides = swiperInstance.slides.length;

            const currentSlideEl = document.querySelector(".hero-swiper-pagination .current-slide");
            const totalSlidesEl = document.querySelector(".hero-swiper-pagination .total-slides");

            if (currentSlideEl && totalSlidesEl) {
                currentSlideEl.textContent = currentSlide;
                totalSlidesEl.textContent = totalSlides;
            }
        }
    }
});





