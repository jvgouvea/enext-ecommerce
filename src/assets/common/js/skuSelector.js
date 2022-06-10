export default function initSkuSelector() {
  const skuArray = skuJson.skus;
  const select = document.querySelector(".sku-select");
  skuArray.forEach((sku) => {
    content.innerHTML += `
    <option value="${sku.skuname}">${sku.skuname}</option>
    `;
  });
}
