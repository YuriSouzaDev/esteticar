// Menu mobile
function initMenuHamburger() {
  // Mostra ou esconde o menu mobile
  const menuHamburger = document.querySelector("[data-hamb]");
  const menuNav = document.querySelector("[data-nav]");
  const blur = document.querySelectorAll("[data-blur]");

  function openMenu() {
    menuNav.classList.toggle("active");
    menuHamburger.classList.toggle("active");
    blur.forEach((item) => {
      item.classList.toggle("blur");
    });
  }

  // Verifica se o icone existe
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
