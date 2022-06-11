export default function initCart() {
  let productsInCart = JSON.parse(localStorage.getItem("shoppingCart"));
  if (!productsInCart) {
    productsInCart = [];
  }

  const cartLength = document.querySelector("#cart-length");
  const parentElement = document.querySelector("#shopping-products");
  const cartSumPrice = document.querySelector("#sum-prices");
  const products = document.querySelectorAll(".main-product");

  const countTheSumPrice = function () {
    // 4
    let sum = 0;
    productsInCart.forEach((item) => {
      sum += item.price;
    });

    sum = +sum.toFixed(2);
    sum = sum.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });

    return sum;
  };

  const updateShoppingCartHTML = function () {
    // 3
    localStorage.setItem("shoppingCart", JSON.stringify(productsInCart));
    if (productsInCart.length > 0) {
      cartLength.innerText = productsInCart.length;
      let result = productsInCart.map((product) => {
        let priceCart = +product.price.toFixed(2);

        priceCart = priceCart.toLocaleString("pt-BR", {
          style: "currency",
          currency: "BRL",
        });
        return `
        <li class="shopping-item">
          <img src="${product.image}" alt="${product.name}">
          <div class="shopping-item-info">
          <a class="href-product" href="${product.url}">
            <h4>${product.name}</h4>
            <p>Tamanho: <strong>${product.size}</strong></p>
            <p><strong>${priceCart}</strong></p>
          </a>
          <div class="quant-trash">
            <div class="shopping-quantidade">
              <button class="button-minus" data-id=${product.id} data-size=${product.size}>-</button>
              <span>${product.count}</span>
              <button class="button-plus" data-id=${product.id} data-size=${product.size}>+</button>
            </div>
            <img data-id=${product.id} data-size=${product.size} class="trash" src="/arquivos/lixeira-de-reciclagem.png" alt="Excluir item">
          </div>
          </div>
        </li>`;
      });
      parentElement.innerHTML = result.join("");
      document.querySelector(".checkout").classList.remove("hidden");
      cartSumPrice.innerHTML = countTheSumPrice();
    } else {
      document.querySelector(".checkout").classList.add("hidden");
      cartLength.innerText = 0;
      parentElement.innerHTML =
        '<h4 class="empty">Seu carrinho está vazio</h4>';
      cartSumPrice.innerHTML = "R$ 0,00";
    }
  };

  function updateProductsInCart(product) {
    // 2
    for (let i = 0; i < productsInCart.length; i++) {
      if (
        productsInCart[i].id == product.id &&
        productsInCart[i].size == product.size
      ) {
        productsInCart[i].count += product.count;
        productsInCart[i].price =
          productsInCart[i].basePrice * productsInCart[i].count;
        return;
      }
    }
    productsInCart.push(product);
  }

  products.forEach((item) => {
    // 1
    item.addEventListener("click", (e) => {
      const productSize = item.querySelector("#tamanho").value;
      if (e.target.classList.contains("addToCart") && productSize) {
        const productURL = window.location.href;
        const productID = e.target.dataset.productId;
        const productName = item.querySelector(".productName").innerText;
        const productPrice = item.querySelector("#productPrice").dataset.price;
        const productImage = item.querySelector("#image-main").src;
        const productCount = item.querySelector("#quantidade").value;

        let product = {
          url: productURL,
          name: productName,
          size: productSize,
          image: productImage,
          id: productID,
          count: +productCount,
          price: productPrice * productCount,
          basePrice: +productPrice,
        };
        updateProductsInCart(product);
        updateShoppingCartHTML();
      } else if (e.target.classList.contains("addToCart") && !productSize) {
        alert("Não foi possível adicionar o produto ao carrinho!")
      }
    });
  });

  parentElement.addEventListener("click", (e) => {
    // Ultimo
    const isPlusButton = e.target.classList.contains("button-plus");
    const isMinusButton = e.target.classList.contains("button-minus");
    const trash = e.target.classList.contains("trash");
    if (isPlusButton || isMinusButton || trash) {
      for (let i = 0; i < productsInCart.length; i++) {
        if (
          productsInCart[i].id == e.target.dataset.id &&
          productsInCart[i].size == e.target.dataset.size
        ) {
          if (isPlusButton) {
            productsInCart[i].count += 1;
          } else if (isMinusButton) {
            productsInCart[i].count -= 1;
          }
          productsInCart[i].price =
            productsInCart[i].basePrice * productsInCart[i].count;
        }
        if (productsInCart[i].count <= 0) {
          productsInCart.splice(i, 1);
        } else if (
          productsInCart[i].id == e.target.dataset.id &&
          productsInCart[i].size == e.target.dataset.size &&
          trash
        ) {
          productsInCart.splice(i, 1);
        }
      }
      updateShoppingCartHTML();
    }
  });

  updateShoppingCartHTML();
}
