function obtenerNombreCompleto(nombre, servicio) {
  // servicio.getApellido() es la “dependencia”
  return `${nombre} ${servicio.getApellido()}`;
}

function restar(a, b) {
  console.log('Restando:', a, '-', b);
  return a - b;
}

function multiplicar(a, b) {
  console.log('Multiplicando:', a, '*', b + 'PRUEBA');
  return a * b;
}

module.exports = { obtenerNombreCompleto, restar, multiplicar };