import { FRUITS } from "./data.js";

export const getSuggestions = async (searchText) => {
    const result = FRUITS.filter(fruit => fruit?.toLowerCase().includes(searchText.toLowerCase()));

    return Promise.resolve(result)
}

export function debounce(fn, delay) {
    let timer;

    return function() {
        const context = this;

        if(timer) clearTimeout(timer)

        timer = setTimeout(() => {
            return fn.apply(context, arguments)
        }, delay)
    }
}