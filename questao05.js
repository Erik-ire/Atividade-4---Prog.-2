// Por: Erik Levy Pinheiro Rodrigues

function extrairDominio(email){
  if(email.indexOf("@") === -1){
    return "E-mail inválido."
  }

  return email.slice(email.indexOf("@") + 1);
}

console.log(extrairDominio("aluno.estudioso@universidade.edu.br"))
console.log(extrairDominio("aluno.estudiosouniversidade.edu.br"))