// Por: Erik Levy Pinheiro Rodrigues

class Carro {
    constructor(marca, modelo, ano){
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
    }

    obterDescricao(){
        return `Este carro é um ${this.marca} ${this.modelo} ano ${this.ano}`
    }
}

const meuCarro1 = new Carro("Chevrolet", "Camaro SS Coupé", 2010);
const meuCarro2 = new Carro("Ferrari", "F40", 1987);

console.log(meuCarro1.obterDescricao());
console.log(meuCarro2.obterDescricao());