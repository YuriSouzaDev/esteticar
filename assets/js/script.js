// Menu mobile
function initMenuHamburger() {
  // Mostra ou esconde o menu mobile
  const menuHamburger = document.querySelector("[data-hamb]");
  const menuNav = document.querySelector("[data-nav]");
  const overlay = document.querySelector(".overlay");
  let isOverlayVisible = false;

  function openMenu() {
    menuNav.classList.toggle("active");
    menuHamburger.classList.toggle("active");

    // Efeito de escurecimento da camada
    if (isOverlayVisible) {
      overlay.style.display = "none";
    } else {
      overlay.style.display = "block";
    }

    // Inverte o estado da camada de escurecimento
    isOverlayVisible = !isOverlayVisible;
  }

  // Fecha o menu ao clicar fora do menu mobile
  overlay.addEventListener("click", () => {
    menuNav.classList.remove("active");
    menuHamburger.classList.remove("active");
    overlay.style.display = "none";
    isOverlayVisible = false;
  });

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

  // if (window.matchMedia("(max-width:600px)").matches) {
  //   logoImg.src = "./assets/img/icons/logo-2.svg";
  // }
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

// slide clients from swiper-slide

var swiper = new Swiper(".mySwiper", {
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
    el: ".swiper-pagination",
    clickable: true,
  },
});
