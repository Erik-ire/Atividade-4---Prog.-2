// Por: Erik Levy Pinheiro Rodrigues

function converterParaFahrenheitOg(celsius) {
  return (celsius * 1.8) + 32;
}

const converterParaFahrenheit = (celsius) => (celsius * 1.8) + 32;

console.log(converterParaFahrenheitOg(144));
console.log(converterParaFahrenheit(144));

console.log(converterParaFahrenheitOg(100));
console.log(converterParaFahrenheit(100));