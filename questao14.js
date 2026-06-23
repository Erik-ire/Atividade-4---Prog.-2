// Por: Erik Levy Pinheiro Rodrigues

let alunos = [
    {nome: "Erik", nota: 10},
    {nome: "Felipe", nota: 4},
    {nome: "Guilherme", nota: 7}
]

function calcularMediaTurma(listaAlunos){
    let soma = 0;

    listaAlunos.forEach((aluno) => { // Acumula somas das notas (aluno.nota)
        soma += aluno.nota;
    });
    
    let media = soma / listaAlunos.length; // Média conforme a quantidade de alunos
    return media.toFixed(1);
}

console.log(calcularMediaTurma(alunos))