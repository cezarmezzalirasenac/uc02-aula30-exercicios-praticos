const selectOperacao = document.getElementById('select-operacao')
const btnCalcular = document.getElementById('btn-calcular')
const divRoot = document.getElementById("root")
const textResultado = document.createElement("h3")
divRoot.appendChild(textResultado)

btnCalcular.addEventListener('click', (event) => {
  event.preventDefault()
  // ENTRADA
  // Pegar os dois valores e a operação

  const operacao = selectOperacao.value
  console.log(operacao)

  // lógica de fazer a operação baseado na operação selecionada
  let resultado = 0

  // Mostrar o resultado 
  textResultado.textContent = resultado
})
