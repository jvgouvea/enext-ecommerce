export default function initSkuSelector() {
  const buttonAddToCart = document.querySelector(".addToCart");

  if (buttonAddToCart) {
    const skuArray = skuJson.skus;
    const price = skuJson.skus[0].bestPriceFormated;
    const priceUSA = Number(price.replace(/\D/g, "")) / 100;
    const select = document.querySelector("#tamanho");

    skuArray.forEach((sku) => {
      select.innerHTML += `
    <option value="${sku.skuname}">${sku.skuname}</option>
    `;
    });

    buttonAddToCart.dataset.productId = skuJson.productId;

    const productPrice = document.querySelector("#productPrice");
    productPrice.dataset.price = priceUSA;
  }
}
