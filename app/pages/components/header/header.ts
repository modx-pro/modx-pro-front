(function () {
    const header = document.querySelector(".header") as HTMLElement | null;
    if (header === null) return;

    const buttonMenuOpen = header.querySelector(".header__button-open-menu") as HTMLElement | null;
    const buttonMenuClose = header.querySelector(".header__button-close-menu") as HTMLElement | null;
    const headerOverflow = header.querySelector(".header__overlay") as HTMLElement | null;

    if (buttonMenuOpen !== null) {
        buttonMenuOpen.addEventListener("click", () => {
            if (!header.classList.contains("menu-active")) {
                header.classList.add("menu-active");
            }
        });
    }

    if (buttonMenuClose !== null) {
        buttonMenuClose.addEventListener("click", () => {
            if (header.classList.contains("menu-active")) {
                header.classList.remove("menu-active");
            }
        });
    }

    if (headerOverflow !== null) {
        headerOverflow.addEventListener("click", () => {
            if (header.classList.contains("menu-active")) {
                header.classList.remove("menu-active");
            }
        });
    }
})();
