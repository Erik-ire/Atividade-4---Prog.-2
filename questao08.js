// Por: Erik Levy Pinheiro Rodrigues

function calcularPrecoFinal(valorProduto, porcentagemDesconto){
  let desconto = valorProduto * (porcentagemDesconto/100);

  return valorProduto - desconto;
}

console.log(calcularPrecoFinal(150, 20));