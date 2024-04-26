(function () {
  const header = document.querySelector(".header");
  if (!header) return;

  const buttonMenuOpen = header.querySelector(".header__button-open-menu");
  const buttonMenuClose = header.querySelector(".header__button-close-menu");
  const headerOverflow = header.querySelector(".header__overlay");

  buttonMenuOpen.addEventListener("click", () => {
    if (!header.classList.contains("menu-active")) {
      header.classList.add("menu-active");
    }
  });

  buttonMenuClose.addEventListener("click", () => {
    if (header.classList.contains("menu-active")) {
      header.classList.remove("menu-active");
    }
  });

  headerOverflow.addEventListener("click", () => {
    if (header.classList.contains("menu-active")) {
      header.classList.remove("menu-active");
    }
  });
})();
