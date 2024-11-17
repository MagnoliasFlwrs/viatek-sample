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

// modals

const showModal = (modal) => {
    overlay.classList.add('open');
    modal.classList.add('active');
}
const closeModal = (modal) => {
    overlay.addEventListener('click' , () => {
        overlay.classList.remove('open');
        modal.classList.remove('active');
    })
    const closeBtns =  modal.querySelectorAll('.close-btn');
    closeBtns?.forEach(closeBtn => {
        closeBtn.addEventListener('click' , () => {
            overlay.classList.remove('open');
            modal.classList.remove('active');
        })
    })

}

const priceModal = document.querySelector('.price-modal');
const newsSingleModal = document.querySelector('.news-single-modal');
const contactsModal = document.querySelector('.contacts-modal');
const showNewsSingleModalBtns = document.querySelectorAll('.show-news-modal');
const showContactsModalBtns =  document.querySelectorAll('.show-contacts-modal');
const showPriceModalBtns =  document.querySelectorAll('.show-price-modal');

showNewsSingleModalBtns?.forEach(el=> {
    el.addEventListener('click' , (e) => {
        e.preventDefault();
        showModal(newsSingleModal);
        closeModal(newsSingleModal);
    })
})
showContactsModalBtns?.forEach(el=> {
    el.addEventListener('click' , (e) => {
        e.preventDefault();
        showModal(contactsModal);
        closeModal(contactsModal);
    })
})
showPriceModalBtns?.forEach(el=> {
    el.addEventListener('click' , (e) => {
        e.preventDefault();
        showModal(priceModal);
        closeModal(priceModal);
    })
})


// accordeon


const boxes = document.querySelectorAll(".box");

boxes.forEach((box) => {
    box.addEventListener("click", boxHandler);
});

function boxHandler(e) {
    e.preventDefault();
    let currentBox = e.target.closest(".box");
    let currentContent = currentBox.querySelector('.content');
    let currentHide =  e.target.closest(".box").querySelector('.hide');

    console.log(currentHide);

    currentBox.classList.toggle("active");

    if (currentHide) {
        currentHide.addEventListener('click' , (e)=> {
            e.stopPropagation();
            e.preventDefault()
            currentBox.classList.remove('active');
            currentContent.style.maxHeight = 0;
        })
    }
    if (currentBox.classList.contains("active")) {
        currentContent.style.maxHeight = currentContent.scrollHeight + "px";
    } else {
        currentContent.style.maxHeight = 0;
    }
}

Fancybox.bind('[data-fancybox]', {
});

Fancybox.bind('[data-fancybox="gallery"]', {
});

// callback-modal

const showCallbackModalBtns = document.querySelectorAll('.show-order-modal');
const closeCallbackModalBtn = document.querySelector('.callback-modal .close-btn');
const callbackModal = document.querySelector('.callback-modal');

const showCallbackModal = () => {
    showCallbackModalBtns.forEach(el => {
        el.addEventListener('click' , (e)=> {
            e.preventDefault();
            overlay.classList.add('open');
            callbackModal.classList.add('active');
        })
    })
}
const hideCallbackModal = () => {
    overlay.classList.remove('open');
    callbackModal.classList.remove('active');
}
if (showCallbackModalBtns) {
    showCallbackModal();
    closeCallbackModalBtn?.addEventListener('click' , ()=> {
        hideCallbackModal()
    })
    overlay?.addEventListener('click' , ()=> {
        hideCallbackModal()
    })
}


// custom select

const servicesSelect =  document.querySelector('.services');
const servicesOptions = document.querySelectorAll('.services-list li');
const servicesSelectBody = document.querySelector('.services-list');


if (servicesSelect) {
    servicesSelect.addEventListener('click' , () => {
        servicesSelectBody.classList.add('active');
    })
    servicesSelect.querySelector('p').addEventListener('click' , () => {
        servicesSelectBody.classList.add('active');
    })
    servicesOptions.forEach(el => {
        el.addEventListener('click' , ()=> {
            servicesSelect.querySelector('p').innerHTML = el.innerHTML;
            servicesSelect.dataset.current = el.dataset.value;
            servicesSelectBody.classList.remove('active')
        })
    })
    document.addEventListener('click' , (e)=> {
        if ((!e.target.closest('.services-wrap')) && servicesSelectBody.classList.contains('active')) {
            servicesSelectBody.classList.remove('active');
        }
    })
}





