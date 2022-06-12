export default function initGaleriaImg() {
  const produtoImg = document.querySelector("#product-img-principal img");
  const imgGaleria = document.querySelectorAll(".product-img-list img");

  if (imgGaleria && produtoImg) {
    function mudarImg() {
      produtoImg.src = this.src;
    }

    imgGaleria.forEach((item) => {
      item.addEventListener("click", mudarImg);
    });
  }
}
