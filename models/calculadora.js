function somar(numero1, numero2) {
  if (isNaN(numero1) || isNaN(numero2)) {
    return "Erro";
  }
  return numero1 + numero2;
}

exports.somar = somar;
