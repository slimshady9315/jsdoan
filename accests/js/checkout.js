const table = document.getElementById("items-product"); // lay the tbody cua bang san pham
const totalCart = document.getElementById("payment-due-price"); // tinh tong phi phai tra
const tempPrice = document.getElementById("order-summary-emphasis"); // gia tam tinh
const freePrice = document.getElementById("order-summary-emphasis-free");
const btnForm = document.getElementsByClassName("btn-form"); // nut bam hoan tat don hang
const filedPhone = document.getElementById("billing_address_phone"); // the input sos dien thoai
const regexphone = document.getElementById("regex-phone");
const regexPhoneNumber = /(84|0[3|5|7|8|9])+([0-9]{8})\b/; // regex validation
let isSubmit = false;
filedPhone.addEventListener("input", (event) => {
  // console.log("change", event.target.value);
  if (regexPhoneNumber.test(event.target.value)) {
    // console.log("Đặt đơn hàng thành công");
    isSubmit = true;
    // window.location.href = "index.html";
    regexphone.innerHTML = "";
  } else {
    regexphone.innerHTML = "Sai định dạng số điện thoại";
  }
});
btnForm[0].addEventListener("click", () => {
  if (isSubmit) {
    alert("Đặt đơn hàng thành công");
    window.location.href = "index.html";
  } else {
    alert("Hãy nhập đầy đủ các trường yêu cầu");
    regexphone.innerHTML = "Sai định dạng số điện thoại";
  }
});
import { numberWithCommas, totalShopping } from "./helper.js";
const renderTable = () => {
  const dataFromLocalStore = JSON.parse(localStorage.getItem("cart"));
  if (dataFromLocalStore) {
    dataFromLocalStore.forEach((item) => {
      const tRow = document.createElement("tr");
      tRow.classList.add("product");
      tRow.innerHTML = `<td class="product-image">
        <div class="product-thumbnail">
            <div class="product-thumbnail-wrapper">
                <img class="product-thumbnail-image"
                    alt=${item?.name}
                    src=${item?.image} />
            </div>
            <span class="product-thumbnail-quantity" aria-hidden="true">${
              item?.quanlity
            }</span>
        </div>
    </td>
    <td class="product-description">
        <span class="product-description-name order-summary-emphasis">${
          item?.name
        }</span>

        <span class="product-description-variant order-summary-small-text">
            XL
        </span>

    </td>
    <td class="product-quantity visually-hidden">1</td>
    <td class="product-price">
        <span class="order-summary-emphasis">${numberWithCommas(
          item.price
        )}₫</span>
    </td>`;
      table.appendChild(tRow);
    });
  }
};
renderTable();

const renderTotal = () => {
  const tempcart = numberWithCommas(totalShopping()); // iga tram tinh
  const free = totalShopping() > 500000 ? 0 : `${numberWithCommas(30000)} đ`; // phi ship
  tempPrice.innerHTML = `${tempcart} ok đ`; // gan gia tri va hien thi ra man hinh
  freePrice.innerHTML = `${free} đ`;
  totalCart.innerText = `${numberWithCommas(
    totalShopping() + (totalShopping() > 500000 ? 0 : 30000)
  )} `; // tong tien phai tra cuoi cung
};
renderTotal();
