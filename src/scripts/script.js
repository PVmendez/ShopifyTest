document.addEventListener("DOMContentLoaded", function () {
  const menuButton = document.getElementById("menu-button");
  const mobileMenu = document.getElementById("mobile-menu");
  menuButton.addEventListener("click", function () {
    mobileMenu.classList.toggle("hidden");
  });

  const swiper = new Swiper(".swiper", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    autoplay: {
      delay: 50000,
    },
    loop: true,
  });

  const productsPerPage = 8;
  let currentPage = 1;
  const productItems = document.querySelectorAll(".product-item");
  const totalPages = Math.ceil(productItems.length / productsPerPage);
  const prevPageButton = document.getElementById("prev-page");
  console.log(prevPageButton);
  const nextPageButton = document.getElementById("next-page");

  function showPage(page) {
    const start = (page - 1) * productsPerPage;
    const end = start + productsPerPage;

    productItems.forEach((item, index) => {
      if (index >= start && index < end) {
        item.style.display = "block";
      } else {
        item.style.display = "none";
      }
    });
  }

  function updatePaginationButtons() {
    prevPageButton.disabled = currentPage === 1;
    nextPageButton.disabled = currentPage === totalPages;
  }

  prevPageButton.addEventListener("click", function () {
    if (currentPage > 1) {
      currentPage--;
      showPage(currentPage);
      updatePaginationButtons();
    }
  });

  nextPageButton.addEventListener("click", function () {
    if (currentPage < totalPages) {
      currentPage++;
      showPage(currentPage);
      updatePaginationButtons();
    }
  });

  showPage(currentPage);
  updatePaginationButtons();
});
