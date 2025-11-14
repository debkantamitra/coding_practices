const button = document.querySelector("button");
const triggerCountRef = document.querySelector("#triggerCount");
const pressedCountRef = document.querySelector("#pressedCount");

let triggerCount = 0;
let pressedCount = 0;

function debounce(fn, delay) {
  let timeout;

  return function (...args) {
    const context = this;

    clearTimeout(timeout);

    timeout = setTimeout(fn.bind(context, args), delay);
  };
}

const debouncedBtnOnClick = debounce(() => {
  triggerCount += 1;
  triggerCountRef.innerText = triggerCount;
}, 300);

button.addEventListener("click", () => {
  pressedCount += 1;
  pressedCountRef.innerText = pressedCount;

  debouncedBtnOnClick();
});



// this simplest and correct leading edge throttling
function throttle(fn, delay) {
    let isDelay = false;

    return function(...args) {
        const context = this;

        if(isDelay) {
            return;
        } else {
            isDelay = true
            fn.apply(context, args);

            setTimeout(() => {
                isDelay = false
            }, delay)
        }
    }
}