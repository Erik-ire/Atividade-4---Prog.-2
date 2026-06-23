// Por: Erik Levy Pinheiro Rodrigues

function gerarCracha(nome, departamento, id){
  return `[${id}] - ${nome.toUpperCase()}: ${departamento}`;
}

console.log(gerarCracha("Carlos", "TI", 404));
console.log(gerarCracha("Erik", "SMD", 914));