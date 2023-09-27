// Menu mobile
function initMenuHamburger() {
  // Mostra ou esconde o menu mobile
  const menuHamburger = document.querySelector("[data-hamb]");
  const menuNav = document.querySelector("[data-nav]");

  function openMenu() {
    menuNav.classList.toggle("active");
    menuHamburger.classList.toggle("active");
  }

  // Verifica se o icone existe
  if (menuHamburger) {
    menuHamburger.addEventListener("click", openMenu);
  }
}

initMenuHamburger();

// Troca de logo
function initChangeLogo() {
  // Faz a troca da logo depedendo do tamanho da tela
  const logoImg = document.querySelector("[data-logo]");

  if (window.matchMedia("(max-width:600px)").matches) {
    logoImg.src = "./assets/img/icons/logo-2.svg";
  }
}

initChangeLogo();
