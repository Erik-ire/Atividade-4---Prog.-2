// Por: Erik Levy Pinheiro Rodrigues

let nums = [10, 20, 30, 40];

function inverterArray(lista){
  
  for(let i = 1; i <= Math.floor(lista.length / 2); i++){
    let temp = lista[lista.length - i];
    lista[lista.length - i] = lista[i - 1];
    lista[i - 1] = temp;
  }

  return lista;
}

console.log(inverterArray(nums));
