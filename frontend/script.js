const anoInput = document.getElementById("ano");
const buscarButton = document.getElementById("buscar");
const resultadoDiv = document.getElementById("resultado");

buscarButton.addEventListener("click", () => {
  const ano = anoInput.value;

  if (ano === "") {
    resultadoDiv.innerHTML = `<p class="text-red-500 text-sm italic">Por favor, insira um ano.</p>`;
  } else if (isNaN(ano)) {
    resultadoDiv.innerHTML = `<p class="text-red-500 text-sm italic">Por favor, insira um número válido.</p>`;
  } else {
    // Aqui você faria a chamada para a API usando fetch()
    // Exemplo de chamada (substitua com a URL da sua API):
    fetch(`https://http://localhost:8080/?ano=1949`)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Erro na requisição: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        if (data.erro) {
          resultadoDiv.innerHTML = `<p class="text-red-500 text-sm italic">${data.erro}</p>`;
        } else {
          resultadoDiv.innerHTML = `<h2 class="text-xl font-semibold mb-2 text-green-600">Fato Histórico de ${ano}:</h2><p class="text-gray-800">${data.fato}</p>`;
        }
      })
      .catch((error) => {
        resultadoDiv.innerHTML = `<p class="text-red-500 text-sm italic">Ocorreu um erro: ${error.message}</p>`;
      });
  }
});
