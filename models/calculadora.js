function somar(numero1, numero2) {
  if (numero1 === undefined || numero2 === undefined) {
    throw new Error("Os números são obrigatórios");
  }
  if (typeof numero1 !== "number" || typeof numero2 !== "number") {
    throw new Error("Os números devem ser do tipo número");
  }

  if (isNaN(numero1) || isNaN(numero2)) {
    throw new Error("Os números devem ser numéricos");
  }

  return numero1 + numero2;
}

exports.somar = somar;

function dividir(numero1, numero2) {
  if (numero1 === undefined || numero2 === undefined) {
    throw new Error("Os números são obrigatórios");
  }
  if (typeof numero1 !== "number" || typeof numero2 !== "number") {
    throw new Error("Os números devem ser do tipo número");
  }

  if (isNaN(numero1) || isNaN(numero2)) {
    throw new Error("Os números devem ser numéricos");
  }

  if (numero2 === 0) throw new Error("Não é possível dividir por zero");

  return numero1 / numero2;
}
exports.dividir = dividir;
