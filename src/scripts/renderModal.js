document.addEventListener("DOMContentLoaded", () => {
  const cart = [];
  const cartModal = document.getElementById("cart-modal");
  const cartItemsContainer = document.getElementById("cart-items");
  const cartTotalElement = document.getElementById("cart-total");
  const closeModalButton = document.getElementById("close-modal");

  function updateCart() {
    cartItemsContainer.innerHTML = "";
    let total = 0;

    cart.forEach((item, index) => {
      total += item.price * item.quantity;
      const itemElement = document.createElement("div");
      itemElement.classList.add(
        "flex",
        "justify-between",
        "items-center",
        "mb-2"
      );
      itemElement.innerHTML = `
          <span>${item.name} x${item.quantity}</span>
          <span>$${(item.price * item.quantity).toFixed(2)}</span>
          <button class="remove-item" data-index="${index}">Remove</button>
        `;
      cartItemsContainer.appendChild(itemElement);
    });

    cartTotalElement.textContent = `$${total.toFixed(2)}`;
  }

  function addToCart(product) {
    const existingProductIndex = cart.findIndex(
      (item) => item.name === product.name
    );
    if (existingProductIndex > -1) cart[existingProductIndex].quantity += 1;
    else cart.push({ ...product, quantity: 1 });

    updateCart();
    cartModal.classList.remove("hidden");
  }

  document.querySelectorAll(".product-item").forEach((item, index) => {
    const buyNowButton = item.querySelector("a");
    const priceElement = item.querySelector("p");
    const price = parseFloat(priceElement.textContent.replace("$", ""));
    const product = {
      name: `Product ${index + 1}`,
      price: price,
    };

    buyNowButton.addEventListener("click", (event) => {
      event.preventDefault();
      addToCart(product);
    });
  });

  cartItemsContainer.addEventListener("click", (event) => {
    if (event.target.classList.contains("remove-item")) {
      const index = event.target.getAttribute("data-index");
      cart.splice(index, 1);
      updateCart();
    }
  });

  closeModalButton.addEventListener("click", () => {
    cartModal.classList.add("hidden");
  });

  cartModal.addEventListener("click", (event) => {
    if (event.target === cartModal) {
      cartModal.classList.add("hidden");
    }
  });
});
