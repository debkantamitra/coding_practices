import { AccordionItems } from "./data.js";

const renderAccordion = () => {
    AccordionItems.forEach((item, index) => {
        const accordionItemEle = document.createElement("div")
        const accordionItemTitle = document.createElement("div")
        const accordionContent = document.createElement("p")

        accordionItemEle.className = "accordion-item"
        accordionItemTitle.className = "title"
        accordionContent.className = "content"
    
        accordionItemTitle.innerText = item.title
        accordionContent.innerText = item.content
    
        accordionItemEle.append(accordionItemTitle, accordionContent)
        accordion.appendChild(accordionItemEle)

        if (index === 0) {
            accordionItemEle.classList.add("active")
        }
    })
}

const handleAccordionItemClick = (e) => {
    const accordionItem = e.target.parentNode;

    if(!accordionItem.classList.contains("accordion-item")) return

    const accordionItems = document.querySelectorAll(".accordion-item")

    accordionItems.forEach(item => {
        item.classList.remove("active")
    })
    accordionItem.classList.add("active")
}

const accordion = document.querySelector("#accordion")

accordion.addEventListener("click", handleAccordionItemClick)
renderAccordion()