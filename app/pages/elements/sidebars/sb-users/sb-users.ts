(function () {
    const parent = document.querySelector(".sb-users") as HTMLElement | null;
    if (parent === null) return;

    const button = parent.querySelector(".sb-users__button") as HTMLElement | null;

    if (button !== null) {
        button.addEventListener("click", () => {
            parent.classList.toggle("active");
        });
    }
})();
