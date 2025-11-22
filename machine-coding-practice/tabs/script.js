import { tabConfig } from "./data.js";

const renderTabs = () => {
  tabConfig.forEach((tab) => {
    // rendering tabs
    const tabEle = document.createElement("button");

    tabEle.setAttribute("data-tab", tab.id);
    tabEle.className = "tab-link";
    tabEle.innerText = tab.title;

    // set active tab
    if (activeTabId === tab.id) {
      tabEle.classList.add("active");
    }

    tabsContainer.appendChild(tabEle);

    // rendering tabs content
    const tabContent = document.createElement("div");

    tabContent.id = tab.id;
    tabContent.innerHTML = `
                        <h2>${tab.title}</h2>
                        <p>${tab.content}</p>`;
    tabContent.className = "tabContent";

    // set active tab content
    if (activeTabId === tab.id) {
      tabContent.classList.add("active");
    }

    tabsContentContainer.appendChild(tabContent);
  });
};

const handleTabChange = (e) => {
  const target = e.target;

  if (target.matches(".tab-link")) {
    activeTabId = target.getAttribute("data-tab");

    openTab(activeTabId);
  }
};

const openTab = (activeTabId) => {
  const tabs = document.querySelectorAll(".tab-link");
  const contents = document.querySelectorAll(".tabContent");

  tabs.forEach((tabEle) => {
    tabEle.classList.remove("active");

    if (tabEle.getAttribute("data-tab") == activeTabId) {
      tabEle.classList.add("active");
    }
  });

  contents.forEach((content) => {
    content.classList.remove("active");

    if (content.id == activeTabId) {
      content.classList.add("active");
    }
  });
};

let activeTabId = tabConfig[0].id;
const tabsContainer = document.querySelector(".tabs-container");
const tabsContentContainer = document.querySelector(".tabs-content-container");

tabsContainer.addEventListener("click", handleTabChange);

renderTabs();

