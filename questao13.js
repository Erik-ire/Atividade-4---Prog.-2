// Por: Erik Levy Pinheiro Rodrigues

let usuarios = [
    { id: 1, nome: "Erik", ativo: true },
    { id: 2, nome: "Felipe", ativo: false },
    { id: 3, nome: "Guilherme", ativo: true }
]

// Para cada item no array, verifica se é ativo e, se for, imprime com suas propriedades.
usuarios.forEach((usuario) => {
    if(usuario.ativo === true){
        console.log(`Usuário Ativo: ${usuario.nome} (ID: ${usuario.id})`)
    }
});