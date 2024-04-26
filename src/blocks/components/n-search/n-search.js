(function () {
  const parent = document.querySelector(".n-search");
  if (!parent) return;

  const header = document.querySelector(".header");
  const btnSearch = parent.querySelector(".n-search__button");
  const btnClose = parent.querySelector(".n-search__button-close");
  const items = parent.querySelectorAll(".n-search__link");
  const buttonCatalog = parent.querySelector(".n-search__button-catalog");
  const inputSearchMain = parent.querySelector(
    ".n-search__inner--search-input [name='resource']"
  );
  const inputCategory = parent.querySelector(
    ".n-search__inner--search-input [name='category']"
  );
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

  function initButtonsSearch() {
    btnSearch.addEventListener("click", (e) => {
      if (!flagOpenSearch || inputSearchMain.value == "") e.preventDefault();

      if (!parent.classList.contains("active")) {
        parent.classList.add("active");
      }

      flagOpenSearch = true;
    });

    btnClose.addEventListener("click", () => {
      closeSearchWrapper();
    });
  }

  function initSearchSelectList() {
    items.forEach((item) => {
      item.addEventListener("click", () => {
        buttonCatalog.innerHTML = item.innerHTML;
        inputCategory.value = item.innerHTML;
      });
    });
  }

  function init(parent) {
    initButtonsSearch(parent);
    initSearchSelectList(parent);
  }

  init(parent);
})();
