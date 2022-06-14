export default function initSkuSelector() {
  const buttonAddToCart = document.querySelector(".addToCart");
  const productPrice = document.querySelector("#productPrice");

  if (buttonAddToCart) {
    const skuArray = skuJson.skus;
    const price = skuJson.skus[0].bestPriceFormated;
    const priceUSA = Number(price.replace(/\D/g, "")) / 100;
    const select = document.querySelector("#tamanho");

    skuArray.forEach((sku) => {
      select.innerHTML += `
      <option value="${sku.dimensions.Tamanho}">${sku.dimensions.Tamanho}</option>
      `;
    });

    buttonAddToCart.dataset.productId = skuJson.productId;
    productPrice.dataset.price = priceUSA;
  }
}
