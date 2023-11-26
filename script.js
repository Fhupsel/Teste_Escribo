///Script para caso seja testado via console
function DesafioConsole(numero){
  const listaN = []
  for(let i = 0; i<numero; i++){
    listaN.push(i);
  }
  const listaFiltro = listaN.filter(n => n%3 == 0 || n%5==0);
  const total = listaFiltro.reduce((acumulador, atual) => {
    return acumulador + atual
  }, 0);
  console.log(total);
}

////Script para caso seja testado via web
function desafio(){
  const res = document.querySelector('h2');
  const lista = [];
  const value = document.getElementById('num').value;
  const num = Number(value);
  for(let n = 0; n<num; n++){
    lista.push(n);
  }
  const listaFiltrada = lista.filter(n => n%3 == 0 || n%5==0);
  const soma = listaFiltrada.reduce((acumulador, atual) => {
    return acumulador + atual
  }, 0);
  res.innerText = 'O valor do somatório é: ' + soma;
}
