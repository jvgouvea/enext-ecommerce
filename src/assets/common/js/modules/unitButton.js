export default function initProdutoQuantidade() {
  
  const quantidade = document.querySelector("#quantidade");
  if (quantidade) {
    const menos = document.querySelector("#menos");
    const mais = document.querySelector("#mais");
  
    function adicionar() {
      quantidade.value = +quantidade.value + 1;
    }
    function remover() {
      if (quantidade.value == 1) {
        quantidade.value === 1;
      } else {
        quantidade.value = quantidade.value - 1;
      }
    }
  
    mais.addEventListener("click", adicionar);
    menos.addEventListener("click", remover);
  }
  }


