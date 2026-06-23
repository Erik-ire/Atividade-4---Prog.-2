// Por: Erik Levy Pinheiro Rodrigues

function formatarNome(nomeBaguncado){
  let nome = "";

  for(let i = 0; i < nomeBaguncado.length; i++){
    if(i === 0){
      nome += nomeBaguncado[i].toUpperCase();
    } else {
      nome += nomeBaguncado[i].toLowerCase();
    }
  }

  return nome;
}

console.log(formatarNome("mArIa"));