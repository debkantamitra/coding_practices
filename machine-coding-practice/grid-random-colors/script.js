const gridOf = 3;
const order = [];

const grid = [];

function createGrid() {
  for (let i = 0; i < gridOf; i++) {
    const row = [];

    for (let j = 0; j < gridOf; j++) {
      row.push({ color: getRandomColor() });
    }

    grid.push(row);
  }
}

function getRandomColor() {
  var letters = "0123456789ABCDEF";
  var color = "#";

  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }

  return color;
}

const handleBoxColor = (e) => {
  const { key } = e.target.dataset;

  if (key) {
    order.push({
      key,
      initialColor: grid[key[0]][key[1]].color,
    });

    grid[key[0]][key[1]].color = "white";
  }

  renderBoxes();

  if (key === `${gridOf - 1}${gridOf - 1}`) {
    handleLastBoxClick();
  }
};

function handleLastBoxClick() {
  order.forEach((item, index) => {
    // TODO: The order timing is not working
    setTimeout(() => {
      grid[item.key[0]][item.key[1]].color = item.initialColor;

      renderBoxes();
    }, 1000);
  });
}

function renderBoxes() {
  gridEle.innerHTML = null;

  for (let i = 0; i < gridOf; i++) {
    const row = document.createElement("div");
    row.classList.add("row");

    for (let j = 0; j < gridOf; j++) {
      const column = document.createElement("div");

      column.setAttribute("data-key", `${i}${j}`);
      column.classList.add("column");
      column.style.backgroundColor = grid[i][j].color;

      row.appendChild(column);
    }

    gridEle.appendChild(row);
  }
}

const gridEle = document.getElementById("grid");
gridEle.addEventListener("click", handleBoxColor);

createGrid();
renderBoxes();
