// Menu mobile
function initMenuHamburger() {
  // Mostra ou esconde o menu mobile
  const menuHamburger = document.querySelector("[data-hamb]");
  const menuNav = document.querySelector("[data-nav]");
  const linksIntenos = document.querySelectorAll(".nav a[href^='#']");

  document.addEventListener("click", (event) => {
    if (event.target !== menuHamburger && event.target !== menuNav) {
      closeMenu();
    }
  });

  function openMenu() {
    menuNav.classList.toggle("active");
    menuHamburger.classList.toggle("active");
  }

  // Verifica se o icone existe e aciona o evento
  if (menuHamburger) {
    menuHamburger.addEventListener("click", openMenu);
  }

  // Remove a class ativa, caso a tela seja maior que o argumento
  function checkResize() {
    const windowWidth = window.innerWidth;
    const width = 992;

    if (windowWidth < width) {
      if (menuNav.classList.contains("active")) {
        menuNav.classList.remove("active");
        menuHamburger.classList.remove("active");
        blur.forEach((item) => {
          item.classList.remove("blur");
        });
      }
    }
  }
  window.addEventListener("resize", checkResize);

  checkResize();
}

initMenuHamburger();

// Troca de logo
function initChangeLogo() {
  const logoImg = document.querySelector("[data-logo]");

  // Faz a troca da logo depedendo do tamanho da tela
  function checkResizeLogo() {
    const windowWidth = window.innerWidth;
    const width = 600;

    if (windowWidth < width) {
      logoImg.src = "./assets/img/icons/logo-2.svg";
    } else {
      logoImg.src = "./assets/img/icons/logo-1.svg";
    }
  }

  window.addEventListener("resize", checkResizeLogo);

  checkResizeLogo();
}

initChangeLogo();

// slide intro
var introSwiper = new Swiper(".mySlide", {
  spaceBetween: 30,
  effect: "fade",
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// slide servicos

var serviceSwiper = new Swiper(".myService", {
  slidesPerView: 1,
  centeredSlides: true,
  spaceBetween: 0,
  breakpoints: {
    390: {
      spaceBetween: 0,
      grabCursor: true,
    },
    599: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    992: {
      slidesPerView: 3,
      grabCursor: false,
      spaceBetween: 20,
    },
  },
  pagination: {
    el: ".swiper-pagination1",
    dynamicBullets: true,
  },
});

// Força o tamanho do style por problema de responsividade com swiperJS
function styleLiServices() {
  const elementoService = document.querySelectorAll(
    ".services-list .swiper-slide"
  );

  elementoService.forEach((element) => {
    element.style.width = "225px";
  });
}

styleLiServices();

// slide clients from swiper-slide

var clientSwiper = new Swiper(".testimonial", {
  slidesPerView: "auto",
  centeredSlides: true,
  spaceBetween: 0,
  breakpoints: {
    381: {
      spaceBetween: 0,
    },
    600: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    992: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    1200: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
  },
  grabCursor: true,
  pagination: {
    el: ".swiper-pagination2 ",
    dynamicBullets: true,
  },
});

// scroll smooth

function initSmoothScroll() {
  const menuItems = document.querySelectorAll('a[href^="#"]');

  function getScrollTopByHref(element) {
    const id = element.getAttribute("href");
    return document.querySelector(id).offsetTop;
  }

  function scrollToPosition(to) {
    smoothScrollTo(0, to);
  }

  function scrollToIdOnClick(event) {
    event.preventDefault();
    const to = getScrollTopByHref(event.currentTarget) - 80;
    scrollToPosition(to);
  }

  menuItems.forEach((item) => {
    item.addEventListener("click", scrollToIdOnClick);
  });
  function smoothScrollTo(endX, endY, duration) {
    const startX = window.scrollX || window.pageXOffset;
    const startY = window.scrollY || window.pageYOffset;
    const distanceX = endX - startX;
    const distanceY = endY - startY;
    const startTime = new Date().getTime();

    duration = typeof duration !== "undefined" ? duration : 400;

    // Easing function
    const easeInOutQuart = (time, from, distance, duration) => {
      if ((time /= duration / 2) < 1)
        return (distance / 2) * time * time * time * time + from;
      return (-distance / 2) * ((time -= 2) * time * time * time - 2) + from;
    };

    const timer = setInterval(() => {
      const time = new Date().getTime() - startTime;
      const newX = easeInOutQuart(time, startX, distanceX, duration);
      const newY = easeInOutQuart(time, startY, distanceY, duration);
      if (time >= duration) {
        clearInterval(timer);
      }
      window.scroll(newX, newY);
    }, 1000 / 60); // 60 fps
  }
}

initSmoothScroll();

// back to top
function initBackToTop() {
  const backToTop = document.querySelector(".back-to-top");

  // BACK TO TOP BUTTON
  window.addEventListener("scroll", () => {
    backToTop.classList.toggle("ativo", scrollY > 200);
    let scrollTop =
      document.documentElement.scrollTop || document.body.scrollTop;
  });
}

initBackToTop();
