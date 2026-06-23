// Por: Erik Levy Pinheiro Rodrigues

let nums = [3, 8, 15, 22, 42, 7];

function filtrarPares(numeros) {
  let pares = [];

  for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] % 2 === 0) {
      pares.push(numeros[i]);
    }
  }

  return pares;
}

console.log(filtrarPares(nums));