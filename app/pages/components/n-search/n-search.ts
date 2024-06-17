(function () {
    const parent = document.querySelector(".n-search") as HTMLElement | null;
    if (parent === null) return;

    const btnSearch = parent.querySelector(".n-search__button") as HTMLElement | null;
    const btnClose = parent.querySelector(".n-search__button-close") as HTMLElement | null;
    const items = parent.querySelectorAll(".n-search__link") as NodeList;
    const buttonCatalog = parent.querySelector(".n-search__button-catalog") as HTMLElement | null;
    const inputSearchMain = parent.querySelector(".n-search__inner--search-input [name='resource']") as HTMLInputElement | null;
    const inputCategory = parent.querySelector(".n-search__inner--search-input [name='category']") as HTMLInputElement | null;

    let flagOpenSearch = false;

    function closeSearchWrapper() {
        if (parent.classList.contains("active")) {
            parent.classList.remove("active");
        }

        buttonCatalog.innerHTML = "Искать в разделе";
        inputSearchMain.value = "";
        inputCategory.value = "";
        flagOpenSearch = false;
    }

    function initButtonsSearch(parent: HTMLElement) {
        if (btnSearch !== null) {
            btnSearch.addEventListener("click", (e) => {
                if (!flagOpenSearch || inputSearchMain.value == "") e.preventDefault();

                if (!parent.classList.contains("active")) {
                    parent.classList.add("active");
                }

                flagOpenSearch = true;
            });
        }

        if (btnClose !== null) {
            btnClose.addEventListener("click", () => {
                closeSearchWrapper();
            });
        }
    }

    function initSearchSelectList(items: NodeList) {
        if (items.length > 0 && buttonCatalog !== null && inputCategory !== null) {
            items.forEach((item: HTMLInputElement) => {
                item.addEventListener("click", () => {
                    buttonCatalog.innerHTML = item.innerHTML;
                    inputCategory.value = item.innerHTML;
                });
            });
        }
    }

    function init(parent: HTMLElement) {
        initButtonsSearch(parent);
        initSearchSelectList(items);
    }

    init(parent);
})();
