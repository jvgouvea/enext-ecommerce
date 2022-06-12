export default function initFormNewsletter() {
  const formulario = document.querySelector(".newsletter form");
  if (formulario) {
    function formularioEnviado(resposta) {
      if (resposta.ok) {
        formulario.innerHTML =
          "<p class='font-1-16' style='padding:8px; border-radius: 4px; background: var(--cor-3); grid-column:1/-1'><span style='color:green; font-weight:bold'>Enviado</span>, fique atento ao seu Email.</p>";
      } else {
        formulario.innerHTML =
          "<p class='font-1-16' style='padding:8px; border-radius: 4px; background: var(--cor-3)'><span style='color:red; font-weight:bold'>Erro no envio</span>, você pode tentar novamente mais tarde ou entre em contato conosco diretamente pelo email: <strong>contato@suits.com</strong></p>";
        setTimeout(() => {
          formulario.innerHTML =`
            <input class='font-1-16-sb' type='email' placeholder='SEU EMAIL'/> 
            <button class='font-1-16-sb cor-0'>INSCREVA-SE</button>`;
        }, 10000);
      }
    }

    function enviarFormulario(event) {
      event.preventDefault();
      const botao = document.querySelector(".newsletter-input button");
      botao.disabled = true;
      botao.innerText = "Enviando...";

      const data = new FormData(formulario);

      fetch("./enviar.php", {
        method: "POST",
        body: data,
      }).then(formularioEnviado);
    }
    formulario.addEventListener("submit", enviarFormulario);
  }
}
