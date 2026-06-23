// Por: Erik Levy Pinheiro Rodrigues

let carrinho = ["Maçã", "Pão", "Leite", "Café"];

// "function numerarProduto" mas resumida
carrinho.forEach((produto, indice) => {
  // ele pega o produto e depois a posição dele
  console.log(`Produto ${indice + 1}: ${produto}`);
});
