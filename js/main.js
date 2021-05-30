const swiper = new Swiper('.header-slyder__cont', {

    direction: 'vertical',
    autoplay: {
        delay: 3000,

    },
    scrollbar: {
      el: '.header-slyder__scrollbar',
    },
  });

  const swiperInfrast  = new Swiper('.infrast__slyder', {
    loop: true,
    simulateTouch: false,
    autoplay: {
      delay: 3000,

  },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

  const swipertrigg  = new Swiper('.trigger-slyder__slyder-view', {
    simulateTouch: false,
    slidesPerView: 1,
    autoplay: {
      delay: 5000,

    },
    thumbs: {
      swiper: {
        el: '.trigger-slyder__slyder',

        breakpoints: {
          320:{
            slidesPerView: 1,
            direction: 'horizontal',
          },
          600: {

          },
          950: {
            direction: 'vertical',
            slidesPerView: 3,
          }
        },
        scrollbar: {
          el: '.trigger-slyder__scrollbar',
        },
      }
    },
    slideToClickedSlide: true,
  });

  const swipercard1  = new Swiper('.plots-jsk__slider', {
    loop: true,
    breakpoints: {
      320:{
        slidesPerView: 1,
      },
      600: {
        slidesPerView: 2,
      },
      950: {

        slidesPerView: 3,
      }
    },
    autoplay: {
      delay: 5000,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });


  let menuBurger = document.querySelector('.menu-burger');
  let menuLinks = document.querySelector('.menu-links');
  let bodyLock = document.body;
  menuBurger.addEventListener('click', () => {
    bodyLock.classList.toggle('lock-body');
    menuLinks.classList.toggle('menu-links-active');
  });