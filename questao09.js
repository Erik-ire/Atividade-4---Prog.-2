// Por: Erik Levy Pinheiro Rodrigues

function saudarUsuario(nome, idioma = "pt") {
  if (idioma === "pt") {
    return `Olá, ${nome}!`
  }

  if (idioma === "en") {
    return `Hello, ${nome}!`
  }

  if (idioma === "es") {
    return `¡Hola, ${nome}!`
  }
}

console.log(saudarUsuario("Ana"));