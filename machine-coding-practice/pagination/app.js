let productList = [];
let currentPage = 1;
let pageSize = 10;
let totalPages;

const app = document.querySelector("#app");

async function fetchProductList() {
  try {
    const res = await fetch("https://dummyjson.com/products?limit=100");
    const data = await res.json();

    if (data && data?.products) {
      productList = data?.products;
      totalPages = productList.length / pageSize;

      render();
    } else {
      console.error("No products found!");
    }
  } catch (e) {
    console.error(e);
  }
}

function removeAllActiveClasses() {
  const listOfBtns = document.querySelectorAll("button");

  listOfBtns.forEach((btn) => btn.classList.remove("active"));
}

function render() {
  app.innerHTML = null;
  const products = document.createElement("div");
  products.className = "product-container";

  productList
    .slice(currentPage * pageSize - pageSize, currentPage * pageSize)
    .forEach((item) => {
      const productCard = document.createElement("div");

      productCard.className = "productCard";
      productCard.innerHTML = `
        <p>${item.id}</p>
        <p>${item.title}</p>
        <img src="${item.thumbnail}" alt="${item.title}"/>
    `;

    productCard.addEventListener("click", () => {
        window.open(item.thumbnail, "_blank")
    })

      products.appendChild(productCard);
    });

  const pagination = document.createElement("div");
  pagination.className = "pagination";

  const prevBtn = document.createElement("button");
  prevBtn.innerText = "Prev";
  prevBtn.className = "otherBtn";

  prevBtn.addEventListener("click", (e) => {
    removeAllActiveClasses();
    prevBtn.classList.add("active");

    if (currentPage === 1) {
      currentPage = totalPages;
    } else {
      currentPage--;
    }

    render();
  });

  const nextBtn = document.createElement("button");
  nextBtn.innerText = "Next";
  nextBtn.className = "otherBtn";

  nextBtn.addEventListener("click", (e) => {
    removeAllActiveClasses();
    nextBtn.classList.add("active");

    if (currentPage === totalPages) {
      currentPage = 1;
    } else {
      currentPage++;
    }

    render();
  });

  pagination.appendChild(prevBtn);

  for (let i = 1; i <= productList.length / pageSize; i++) {
    const button = document.createElement("button");

    button.innerText = i;
    button.setAttribute("data-page", i);
    button.className = "btn"

    button.addEventListener("click", (e) => {
      removeAllActiveClasses();
      button.classList.add("active");

      const { page } = e.target.dataset;

      currentPage = page;
      render();
    });

    pagination.appendChild(button);
  }

  pagination.appendChild(nextBtn);

  // appending pagination
  app.append(products, pagination);
}

fetchProductList();
