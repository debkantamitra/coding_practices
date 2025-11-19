import { getSuggestions, debounce } from "./utils.js";

function handleOptionSelect(e) {
  const { option } = e.target.dataset;

  if (option) {
    autocomplete.value = option;

    menu.classList.remove("active");
  }
}

async function handleSearch(e) {
  const value = e.target.value;

  if (value) {
    const result = await getSuggestions(value);

    renderOptions(result);
  } else {
    resetMenu();
  }
}

function renderOptions(options) {
  resetMenu();

  menu.classList.add("active");

  options.forEach((item) => {
    const option = document.createElement("div");

    option.classList.add("option");
    option.innerText = item;
    option.setAttribute("data-option", item);

    menu.appendChild(option);
  });
}

function resetMenu() {
  menu.innerHTML = null;
}

const autocomplete = document.getElementById("autocomplete");
const menu = document.getElementById("menu");

const debouncedHandleSearch = debounce(handleSearch, 400);

autocomplete.addEventListener("input", debouncedHandleSearch);
menu.addEventListener("click", handleOptionSelect);