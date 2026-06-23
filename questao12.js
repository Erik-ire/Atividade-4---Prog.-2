// Por: Erik Levy Pinheiro Rodrigues

let produto = {
    nome: "Teclado Mecânico", // String
    preco: 250, // Number
    emEstoque: true, // Boolean

    calcularTotalEstoque: function(quantidadeDesejada){
        return this.preco * quantidadeDesejada;
    }
}

// Chama as propriedades do objeto com "produto.propriedade" 
console.log(`O valor para 3 unidades de ${produto.nome} é R$ ${produto.calcularTotalEstoque(3)}`);
console.log(`O valor para 3 unidades de ${produto.nome} é R$ ${produto.calcularTotalEstoque(10)}`);