(function () {
    const selects = document.querySelectorAll("[data-ch-button-wrapper]") as NodeList;
    if (selects.length > 0) {
        selects.forEach((select: HTMLElement) => {
            const options: NodeList = select.querySelectorAll(".ch-button__input");

            function offOptions() {
                options.forEach((option: HTMLInputElement) => {
                    option.checked = false;
                });
            }

            options.forEach((option: HTMLInputElement, index: number) => {
                option.addEventListener("click", () => {
                    offOptions();
                    option.checked = true;
                });
            });
        });
    }
})();
