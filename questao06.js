// Por: Erik Levy Pinheiro Rodrigues

function verificarAcesso(senhaDigitada, senhaCadastrada) {
  if (senhaDigitada.trim().toLowerCase() === senhaCadastrada.toLowerCase()) {
    return true;
  }

  return false;
}

console.log(verificarAcesso("   Secreta123  ", "secreta123"));