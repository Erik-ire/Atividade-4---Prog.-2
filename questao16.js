class ContaBancaria {
    constructor(titular){
        this.titular = titular;
        this.saldo = 0;
    }

    depositar(valor){ // Adiciona ao saldo
        this.saldo += valor;
    }

    sacar(valor){
        if(this.saldo >= valor){ // Se tiver saldo
            let saldoAnterior = this.saldo;
            this.saldo -= valor;
            console.log(`Sacou R$${valor} de R$${saldoAnterior} disponíveis na conta.\nO valor atual de saldo é R$${this.saldo}!`)
        } else { // Se não
            console.log(`Saldo insuficiente para o saque de R$${valor}.`);
        }
    }
}

const minhaConta = new ContaBancaria("Erik Levy Pinheiro Rodrigues");
minhaConta.depositar(400);
minhaConta.sacar(500);