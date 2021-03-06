export default function initCep() {
  function getSimulation(cep) {
    vtexjs.checkout
      .getOrderForm()
      .then((orderForm) => {
        const cep = document.querySelector(".header-frete input").value;

        var address = {
          postalCode: cep,
          country: "BRA",
        };

        return vtexjs.checkout.calculateShipping(address);
      })
      .done((orderForm) => {
        let adressUser = {
          street: orderForm.shippingData.address.street,
          city: orderForm.shippingData.address.city,
        };

        uptadeFreteHtml(adressUser);
      });
  }

  function uptadeFreteHtml(adress) {
    freteHtml.classList.add("ativo");
    if (!adress.street || !adress.city) {
      freteHtml.innerHTML = `<p class="cep-invalido">CEP inválido</p>`;
    } else {
      freteHtml.innerHTML = `
      <p class="local">
        ${adress.street} - ${adress.city}
      </p> 
      <div class="prazo"><p>PAC</p>
        <div class="valor-prazo">
          <span class="frete-gratis">FRETE GRATIS</span>
          <span class="cor-8">até 8 dias úteis</span>
        </div>
      </div>
      <div class="prazo"><p>SEDEX</p>
        <div class="valor-prazo">
          <span class="sedex">R$ 38,21</span>
          <span class="cor-8">até 4 dias úteis</span>
        </div>
      </div>`;
    }
  }

  const freteHtml = document.querySelector(".frete-informacoes");
  const buttonCep = document.querySelector(".header-frete button");
  if (buttonCep) {
    buttonCep.addEventListener("click", getSimulation);
  }
}
