export default function initSkuSelector() {
  const skuArray = skuJson.skus;
  const select = document.querySelector("#tamanho");
  skuArray.forEach((sku) => {
    select.innerHTML += `
    <option value="${sku.skuname}">${sku.skuname}</option>
    `;
  });

  const buttonAddToCart = document.querySelector(".addToCart")
  buttonAddToCart.dataset.productId = skuJson.productId;
}
