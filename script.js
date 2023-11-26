console.log('Insira um número!');

function desafio(){
  const res = document.querySelector('h2');
  const lista = [];
  const value = document.getElementById('num').value;
  const num = Number(value);
  console.log('Esse foi o número inserido: ', num);
  for(let n = 0; n<num; n++){
    lista.push(n);
  }
  console.log(lista);
  const listaFiltrada = lista.filter(n => n%3 == 0 || n%5==0);
  console.log(listaFiltrada);
  const soma = listaFiltrada.reduce((acumulador, atual) => {
    return acumulador + atual
  }, 0);
  console.log('O valor do somatório é: ', soma);
  res.innerText = 'O valor do somatório é: ' + soma;
}