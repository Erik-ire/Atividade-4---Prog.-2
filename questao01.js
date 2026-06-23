// Por: Erik Levy Pinheiro Rodrigues

function contarDivisoresV1(n) {
  let contador = 0;

  for (let i = 1; i <= n; i++) {
    if (n % i === 0) {
      contador++;
    }
  }

  return contador;
}

function contarDivisoresV2(n) {
  let contador = 0;

  // Se d for METADE de n, então divisores acabaram.
  for (let d = 1; d * d <= n; d++) {
    if (n % d === 0) {
      let outro = n / d;

      if (d !== outro) {
        contador += 2;
      } else {
        contador += 1;
      }
    }
  }

  return contador;
}

let num1 = 25;
let num2 = 999999999;

console.time(`Versão 1 para ${num1}`);
contarDivisoresV1(num1);
console.timeEnd(`Versão 1 para ${num1}`);

console.time(`Versão 2 para ${num1}`);
contarDivisoresV2(num1);
console.timeEnd(`Versão 2 para ${num1}`);


console.time(`Versão 1 para ${num2}`);
contarDivisoresV1(num2);
console.timeEnd(`Versão 1 para ${num2}`);

console.time(`Versão 2 para ${num2}`);
contarDivisoresV2(num2);
console.timeEnd(`Versão 2 para ${num2}`);

console.log(contarDivisoresV2(25));
console.log(contarDivisoresV2(999999999));