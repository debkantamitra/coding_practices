const boxConfig = [
  { color: "red", width: "33.33%" },
  { color: "green", width: "33.33%" },
  { color: "blue", width: "33.33%" },
  { color: "yellow", width: "50%" },
  { color: "orange", width: "50%" },
  { color: "purple", width: "75%" },
  { color: "pink", width: "25%" },
];
const container = document.querySelector(".container");
const inputForm = document.querySelector(".input_form");

const handleBoxClick = (e) => {
  const { color, id } = e?.target?.dataset;

  if (color) {
    alert(`The color of box ${id} is ${color}`);
  }
};

const renderBoxes = () => {
  container.innerHTML = null;

  boxConfig.forEach((config, index) => {
    const box = document.createElement("div");

    box.className = "box";
    box.style.backgroundColor = config.color;
    box.style.width = config.width;
    box.setAttribute("data-color", config.color);
    box.setAttribute("data-id", index + 1);

    container.appendChild(box);
  });

  // using event delegation - instead of attaching event listener to each box
  container.addEventListener("click", handleBoxClick);
};

// the function is directly attached to form's onsubmit - check form
const handleInput = (e) => {
  e.preventDefault();

  const target = e.target;
  const width = target.width.value;
  const color = target.color.value;

  boxConfig.push({
    width,
    color,
  });

  target.width.value = null;
  target.color.value = null;

  renderBoxes();
};

renderBoxes();
