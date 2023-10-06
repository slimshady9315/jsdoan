import {
  totalShopping,
  removeProductForLocalStorage,
  isDeliveryFree,
  numberWithCommas, // for mat lai khi hien thi ra giao dien
} from "./helper.js";
const showCart = document.getElementById("cart-store"); // khi vbam vao iconcart goi den showCart
const cartElement = document.getElementById("cart-container"); // lay phna tu cha cua list cart
const closeCart = document.getElementById("close-cart"); // bam vao dong cart
const listCart = document.getElementById("items-list"); // danh sach cart
//ham thay do9i so luong cart
const changeQuanlityCart = (type, product) => {
  const dataFromLocal = JSON.parse(localStorage.getItem("cart"));
  switch (type) {
    case "plus": {
      const change = dataFromLocal.map((item) => {
        // map la puong thuc lap qua va tra ra phan tu do
        if (item.id === product.id) {
          return {
            ...item,
            quanlity: item.quanlity + 1, //cong so luomg len 1
          };
        }
        return item;
      });
      listCart.innerHTML = "";
      localStorage.setItem("cart", JSON.stringify(change));
      renderCart();
      isDeliveryFree(); /////
      break;
    }
    case "minus": {
      const change = dataFromLocal.map((item) => {
        if (item.id === product.id) {
          if (item.quanlity == 1) {
            return {
              ...item,
              quanlity: 0,
            };
          } else {
            return {
              ...item,
              quanlity: item.quanlity - 1,
            };
          }
        }
        return item;
      });
      localStorage.setItem(
        "cart",
        JSON.stringify(change.filter((item) => item.quanlity > 0))
      );
      renderCart();
      isDeliveryFree();
      break;
    }
    default: {
      console.log("error change quanlity");
      isDeliveryFree();
      renderCart();
      throw new Error(" error quanlity ");
    }
  }
};

export const renderCart = () => {
  listCart.innerHTML = "";
  const list = JSON.parse(localStorage.getItem("cart")) ?? [];
  [...list].forEach((item) => {
    const { id, image, name, price, quanlity } = item;
    const div = document.createElement("div");
    div.classList.add("cart-detail-item");
    div.innerHTML = `<div id="item-cart" style="display: flex;justify-content: space-between;padding-bottom: 10px;border-bottom: 1px dotted #e7e7e7; margin-bottom:10px;user-select:none;">
      <div style="display: flex;">
          <img src=${image} style="width:75px ;height: 90px;" alt="">
          <div style="margin-left: 10px;display: flex;flex-direction: column;justify-content: space-between;">
              <h7 style="font-weight: 600;">${name}</h7>
              <span style="opacity: 0.8;">Đen/Cotton/31</span>
              <div>
                  <i class="fa-solid fa-minus" style="cursor: pointer;"></i>
                  <span style="margin-left: 4px;margin-right: 4px;">${quanlity}</span>
                  <i class="fa-solid fa-plus" style="cursor: pointer;"></i>
              </div>
          </div>
      </div>
      <div  style="display: flex;flex-direction: column;justify-content: space-between;position: relative;width: 90px; user-select:none;">
          <i class="fa-solid fa-x remove-product" style="position: absolute;right: 0;top: 0;cursor: pointer;"></i>
          <span style="font-weight: 600; position: absolute;right: 5px;bottom: 0;">${numberWithCommas(
            price
          )} đ</span>
      </div>
  </div>`;
    listCart.appendChild(div);
    div
      .querySelector(".remove-product") // xoa san pham
      .addEventListener("click", () => removeProductForLocalStorage(item));
    div
      .querySelector(".fa-minus")
      .addEventListener("click", () => changeQuanlityCart("minus", item));
    div
      .querySelector(".fa-plus")
      .addEventListener("click", () => changeQuanlityCart("plus", item));
  });
  totalShopping();
};

// hien cart
showCart?.addEventListener("click", () => {
  cartElement.className = "show";
  // cartElement.style.opacity = 1;
  renderCart();
  isDeliveryFree();
});

//dong cart
closeCart?.addEventListener("click", () => {
  cartElement.className = "hide";
  // document.getElementsByTagName("body")[0].style.opacity = 1;
  // const child = document.getElementsByClassName("cart-detail-item");
  listCart.innerHTML = "";
  isDeliveryFree();
});

// cartElement?.addEventListener("click", (event) => {
//   const isClickInsideElement = !cartElement.contains(event.target);

//   if (!isClickInsideElement) {
//     // Xử lý khi bấm ra ngoài phần tử
//     // alert("You clicked outside the element!");
//     // cartElement.className = "hide";
//   } else {
//     // cartElement.innerHTML = "";
//   }
// });
