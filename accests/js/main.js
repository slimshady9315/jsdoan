export const isTrousers = window.location.href.includes("trousers");
import {
  products,
  addProductForLocalStorage,
  numberWithCommas,
} from "./helper.js";
const countCartElement = document.getElementById("count-cart");
const countItemCategory = document.getElementById("count-category-items");

const countforCategory = () => {
  const div = document.createElement("div");

  if (!window.location.href.includes("index")) {
    if (!isTrousers) {
      div.innerHTML = `${
        products.filter((item) => item.category === "shirt").length
      } sản phẩm`;
    } else {
      div.innerHTML =
        products.filter((item) => item.category === "trousers").length +
        " sản phẩm";
    }
  }
  countItemCategory?.appendChild(div);
};
countforCategory();
const setCountCart = () => {
  const div = document.createElement("div");
  div.innerHTML = "";
  countCartElement?.appendChild(div);
  const dataFromLocal = JSON.parse(localStorage.getItem("cart"));
  if (dataFromLocal) {
    const count = dataFromLocal.length;
    const div = document.createElement("div");
    div.innerHTML = `<span>${count}</span>`;
    countCartElement.appendChild(div);
  }
};
setCountCart();

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  freeMode: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  breakpoints: {
    500: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    576: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
  },
  autoplay: {
    delay: 3000, // Thời gian chạy slide là 3 giây
    disableOnInteraction: false, // Tự động chuyển slide ngay cả khi người dùng thao tác với Swiper
  },
});
// Call lib OwlCarousel
var swiper1 = new Swiper(".swiper123", {
  autoplay: {
    delay: 3000,
  },
});
document.addEventListener("DOMContentLoaded", function () {
  var swiper = new Swiper(".swiper123", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
});

const countDown = () => {
  // Ngay het chuong trinh so voi 1-1-1970
  let countDownDate = new Date("Jan 5, 2030 15:37:25").getTime();

  let timerFn = setInterval(() => {
    // Ngay hien tai cua minh so voi 1-1-1970
    let now = new Date().getTime();

    // Khoang thoi gian tu ngay chuong trinh dien ra toi ngay hien tai cua minh
    let distance = countDownDate - now;

    //Cong Thuc tinh Ngay Thang Nam Phut con lai
    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hous = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Hien thi no ra ben ngoai
    document.querySelector(".hous").innerHTML = hous;
    document.querySelector(".minutes").innerHTML = minutes;
    document.querySelector(".seconds").innerHTML = seconds;

    // Het thoi gian
    if (distance < 0) {
      clearInterval();
    }
  }, 1000);
};
countDown();
const hotProducts = document.querySelector(".hot-products .container .row");

function renderProducts() {
  for (let [k, v] of Object.entries(
    isTrousers
      ? products.filter((item) => item.category === "trousers")
      : products.filter((item) => item.category === "shirt")
  )) {
    const { id, image, name, price, saleprice } = v;
    let div = document.createElement("div");
    div.classList.add("product", "col-12", "col-sm-6", "col-md-4", "col-lg-3");
    div.innerHTML = `
  
                <img src=${image} id=${id} class="product-detail"/>
                <div class="add-to-cart">
                    <button><i class="fa-solid fa-cart-plus"></i> Thêm vào giỏ hàng</button>
                    <h3 class="item-title no-underline">${name}</h3>
                    <p class="item-price no-underline">$${numberWithCommas(
                      price
                    )}</p>
                </div>
    `;
    if (hotProducts) {
      hotProducts.appendChild(div);
      div
        .querySelector(".add-to-cart")
        .addEventListener("click", () => addProductForLocalStorage(v));
      div.querySelector(".product-detail").addEventListener("click", () => {
        window.location.href = `detail.html?id=${id}`;
      });
    }
  }
}

renderProducts();
const swiperElement = document.getElementsByClassName("swiper-wrapper")[1];
// san pham sale vo cuc
const renderSaleProducts = () => {
  if (swiperElement) {
    products
      .filter((item) => item.isSale === true) //loc phan tu theo dieu kien
      .forEach((item) => {
        const { id, image, name, price, saleprice } = item;
        const div = document.createElement("div");
        div.classList.add("product-item-slider", "swiper-slide");
        div.innerHTML = `
         <a href="#">
             <div class="image product-detail">
                 <img src=${image}>
             </div>
         </a>
         <div class="detail">
             <div class="add-to-cart">
                 <button><i class="fa-solid fa-cart-plus"></i> Thêm vào giỏ hàng</button>
   
                 <h3 class="item-title ">${name}</h3>
                 <div class="price">
                     <span><p class="item-prices sales">${numberWithCommas(
                       price
                     )}₫</p></span>
                     <span class="price-del"><p>${numberWithCommas(
                       saleprice
                     )}₫</p></span>
                 </div>
             </div>
         </div>`;
        swiperElement.appendChild(div);
        div
          .querySelector(".add-to-cart")
          .addEventListener("click", () => addProductForLocalStorage(item));
        div.querySelector(".product-detail").addEventListener("click", () => {
          window.location.href = `detail.html?id=${id}`;
        });
      });
  } else {
    // console.log("current is no home");
  }
};
renderSaleProducts();

const highlightProducts = document.querySelector(
  ".hot-products .container .row"
);
const renderHighlightProducts = () => {
  if (swiperElement) {
    products
      .filter((item) => item.sold > 10)
      .forEach((item) => {
        const { id, image, name, price, saleprice } = item;
        const div = document.createElement("div");
        div.classList.add(
          "col-12",
          "col-sm-6",
          "col-md-4",
          "col-lg-3",
          "product"
        );
        div.innerHTML = `
          <img src=${image} class="product-detail">
          <div class="detail">
              <div class="add-to-cart">
                  <button><i class="fa-solid fa-cart-plus"></i> Thêm vào giỏ hàng</button>
                  <h3 class="item-title "${name}</h3>
                  <p class="item-price ">${numberWithCommas(price)}₫</p>
              </div>
          </div>`;
        highlightProducts.appendChild(div);
        div
          .querySelector(".add-to-cart")
          .addEventListener("click", () => addProductForLocalStorage(item));
        div.querySelector(".product-detail").addEventListener("click", () => {
          window.location.href = `detail.html?id=${id}`;
        });
      });
  } else {
    // console.log("current is no home");
  }
};
renderHighlightProducts();

// menu mobile -show hide
const menuMobileElement = document.getElementById("mobile-menu-icon");
const listMenumobile = document.getElementById("menu-mobile");
menuMobileElement?.addEventListener("click", () => {
  const className = listMenumobile.getAttribute("class");
  if (className === "menu-mobile") {
    listMenumobile.className = "menu-mobile-show";
  } else {
    listMenumobile.className = "menu-mobile";
  }
});
