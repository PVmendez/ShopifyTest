const products = [
  { img: "../assets/images/product1.svg", price: "$176.98" },
  { img: "../assets/images/product2.svg", price: "$126.98" },
  { img: "../assets/images/product3.svg", price: "$136.98" },
  { img: "../assets/images/product4.svg", price: "$146.98" },
  { img: "../assets/images/product1.svg", price: "$156.98" },
  { img: "../assets/images/product2.svg", price: "$166.98" },
  { img: "../assets/images/product3.svg", price: "$176.98" },
  { img: "../assets/images/product2.svg", price: "$166.98" },
  { img: "../assets/images/product2.svg", price: "$126.98" },
  { img: "../assets/images/product3.svg", price: "$136.98" },
  { img: "../assets/images/product4.svg", price: "$146.98" },
  { img: "../assets/images/product1.svg", price: "$156.98" },
  { img: "../assets/images/product2.svg", price: "$166.98" },
  { img: "../assets/images/product3.svg", price: "$176.98" },
  { img: "../assets/images/product2.svg", price: "$166.98" },
];

const productGrid = document.getElementById("product-grid");

function createProductItem(product) {
  const div = document.createElement("div");
  div.className = "product-item bg-white p-4 rounded-lg shadow-lg";

  const img = document.createElement("img");
  img.src = product.img;
  img.alt = "Product";
  img.className = "w-full";

  const priceDiv = document.createElement("div");
  priceDiv.className = "xl:flex justify-between items-center text-center py-4";

  const priceP = document.createElement("p");
  priceP.className = "text-3xl md:m-4 m-5";
  priceP.textContent = product.price;

  const buyButton = document.createElement("a");
  buyButton.href = "#";
  buyButton.className =
    "bg-main text-white px-4 py-2 rounded-full hover:bg-green-600 transition duration-300";
  buyButton.textContent = "BUY NOW";

  priceDiv.appendChild(priceP);
  priceDiv.appendChild(buyButton);

  div.appendChild(img);
  div.appendChild(priceDiv);

  return div;
}

function renderProducts(products) {
  productGrid.innerHTML = "";
  products.forEach((product) => {
    const productItem = createProductItem(product);
    productGrid.appendChild(productItem);
  });
}

renderProducts(products);
