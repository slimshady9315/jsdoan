import {
  addProductForLocalStorage,
  products,
  numberWithCommas,
} from "./helper.js";
const productElement = document.getElementById("detail-product");
const renderDetailProduct = () => {
  const param = new URLSearchParams(window.location.search);
  const detail = products[Number(param.get("id")) - 1];
  //   const { image, isSale, name, price, saleprice, sold, category } = detail;
  const div = document.createElement("div");
  div.classList.add("rows");
  div.innerHTML = `<div class="rows">
      <div class="col-6">
          <div class="product-image">
              <div class="product-image-main">
                  <img src=${detail?.image} alt="" id="product-main-image">
              </div>
              <div class="product-image-slider">
              ${
                detail?.category === "trousers"
                  ? ` <img src="https://product.hstatic.net/200000690725/product/esbi006-6_5c6d3db0b4fb487f89e857e2e8e859f0_master.jpg" alt=""  class="image-list">
                <img src="https://product.hstatic.net/200000690725/product/ff_15927ceaf8c342d68b92a6f8f4488382_master.jpg" alt=""  class="image-list">
                <img src="https://product.hstatic.net/200000690725/product/tp038---bj012-_18__ed3eb7308a9a4d4eb28f8c02d560dcee_master.jpg" alt=""  class="image-list">
                <img src="https://product.hstatic.net/200000690725/product/52932060077_c71ecd82d7_o_0ffeea0a3da84368b13a76e2c00cdf5d_master.jpg" alt=""  class="image-list">
                <img src="https://product.hstatic.net/200000690725/product/52777027695_4802662c62_o_9cf976a814c74d1299a1a4e437d368c9_master.jpg" alt=""  class="image-list">`
                  : ` <img src="https://product.hstatic.net/200000690725/product/tp038---bt019-den_12__096f638857f6470d82c09e80ec8e6971_master.jpg" alt=""  class="image-list">
                  <img src="https://product.hstatic.net/200000690725/product/tp007---bj901-_19__77bda55d7cb8490981e89a43f2accbb2_master.jpg" alt=""  class="image-list">
                  <img src="https://product.hstatic.net/200000690725/product/52900747392_3bd87b9424_o_ef4fd5e38ee643538ccbfa25af4daa72_master.jpg" alt=""  class="image-list">
                  <img src="https://product.hstatic.net/200000690725/product/52933043930_8da87d7a6c_o_1af3f2feba9545f8be8a0a196b8b2567_master.jpg" alt=""  class="image-list">
                  <img src="https://product.hstatic.net/200000690725/product/52963145971_d831ed870e_o_0cb9f3d06fb2434f92c94c572d9f7820_master.jpg" alt=""  class="image-list">`
              }
                 
              </div>
          </div>
      </div>
      <div class="col-6">
          <div class="breadcrumb">
              <span><a href="index.html">Trang chủ</a></span>
              <span><a href=${
                detail?.category === "trousers"
                  ? "./trousers.html"
                  : "shirts.html"
              }>${
    detail?.category === "trousers" ? "Quần nam" : "Áo nam"
  }</a></span>
              <span class="active">${detail?.name}</span>
          </div>
          <div class="product" style="padding:0px;">
              <div class="product-title">
                  <h2>${detail?.name}</h2>
              </div>
              <div class="product-rating">
                  <span><i class="bx bxs-star"></i></span>
                  <span><i class="bx bxs-star"></i></span>
                  <span><i class="bx bxs-star"></i></span>
                  <span><i class="bx bxs-star"></i></span>
                  <span><i class="bx bxs-star"></i></span>
                  <span class="review">(Đã bán ${detail?.sold})</span>
              </div>
              <div class="product-price">
                  <span class="offer-price">${numberWithCommas(
                    detail?.price
                  )} VND</span>
                  <span class="sale-price">${
                    detail?.isSale
                      ? numberWithCommas(detail?.saleprice) + "VND"
                      : ""
                  }</span>
              </div>

              <div class="product-details">
                  <h3>Thông tin</h3>
                  <p>Mã sản phẩm</p>
                  <p>Tình trạng</p>
                  <p>Thương hiệu</p> 
              </div>
              <div class="product-size">
                  <h4>Size</h4>
                  <div class="size-layout">
                      <input type="radio" name="size" value="S" id="1" class="size-input">
                      <label for="1" class="size">S</label>

                      <input type="radio" name="size" value="M" id="2" class="size-input">
                      <label for="2" class="size">M</label>

                      <input type="radio" name="size" value="L" id="3" class="size-input">
                      <label for="3" class="size">L</label>

                      <input type="radio" name="size" value="XL" id="4" class="size-input">
                      <label for="4" class="size">XL</label>

                      <input type="radio" name="size" value="XXL" id="5" class="size-input">
                      <label for="5" class="size">XXL</label>
                  </div>
              </div>
              <div class="product-color">
                  <h4>Màu</h4>
                  <div class="custom-radios">
                      <div>
                        <input type="radio" id="color-1" name="color" value="color-1" checked>
                        <label for="color-1">
                          <span>
                            <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/242518/check-icn.svg" alt="Checked Icon" />
                          </span>
                        </label>
                      </div>
                      
                      <div>
                        <input type="radio" id="color-2" name="color" value="color-2">
                        <label for="color-2">
                          <span>
                            <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/242518/check-icn.svg" alt="Checked Icon" />
                          </span>
                        </label>
                      </div>
                      
                      <div>
                        <input type="radio" id="color-3" name="color" value="color-3">
                        <label for="color-3">
                          <span>
                            <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/242518/check-icn.svg" alt="Checked Icon" />
                          </span>
                        </label>
                      </div>
                    
                      <div>
                        <input type="radio" id="color-4" name="color" value="color-4">
                        <label for="color-4">
                          <span>
                            <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/242518/check-icn.svg" alt="Checked Icon" />
                          </span>
                        </label>
                      </div>
                    </div>
              </div>
              <span class="divider"></span>

              <div class="product-btn-group">
              <div class="button add-cart"><i class='bx bxs-cart' id="add-cart" ></i> Thêm vào giỏ hàng</div>
              <div class="button heart"><i class='bx bxs-heart' ></i> Yêu thích</div>
              </div>
              </div>
              </div>
              </div>`;
  // <div class="button buy-now"><i class='bx bxs-zap' ></i> Mua ngay</div>
  productElement?.appendChild(div);
  div
    .querySelector(".add-cart")
    .addEventListener("click", () => addProductForLocalStorage(detail));
};
renderDetailProduct();

const sliderMainImage = document.getElementById("product-main-image"); //product container image
const sliderImageList = document.getElementsByClassName("image-list"); // image thumblian group selection

// sliderImageList[0].onclick = function () {
//   sliderMainImage.src = sliderImageList[0].src;
// };
sliderImageList[0]?.addEventListener("click", () => {
  sliderMainImage.src = sliderImageList[0].src;
});

sliderImageList[1]?.addEventListener("click", () => {
  sliderMainImage.src = sliderImageList[1].src;
});

sliderImageList[2]?.addEventListener("click", () => {
  sliderMainImage.src = sliderImageList[2].src;
});

sliderImageList[3]?.addEventListener("click", () => {
  sliderMainImage.src = sliderImageList[3].src;
});
sliderImageList[4]?.addEventListener("click", () => {
  sliderMainImage.src = sliderImageList[4].src;
});
