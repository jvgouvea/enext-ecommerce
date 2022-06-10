export default function initHeaderBtn() {
  const nav = document.getElementById("nav");
  const user = document.querySelector(".user");
  const shopDiv = document.querySelector("#shopping");
  const userMenu = document.querySelector(".user-button");

  function openUser() {
    nav.classList.remove("active");
    shopDiv.classList.remove("ativo");
    user.classList.toggle("ativo");
  }

  userMenu.addEventListener("click", openUser);

  const buttonCart = document.querySelector(".cart-button");
  const closeButtonCart = document.querySelector(".close-shopping");

  buttonCart.addEventListener("click", () => {
    nav.classList.remove("active");
    user.classList.remove("ativo");
    shopDiv.classList.toggle("ativo");
  });
  closeButtonCart.addEventListener("click", () => {
    shopDiv.classList.remove("ativo");
  });
}
