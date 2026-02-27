function obtenerNombreCompleto(nombre, servicio) {
  // servicio.getApellido() es la “dependencia”
  return `${nombre} ${servicio.getApellido()}`;
}

function restar(a, b) {
  console.log('Restando:', a, '-', b);
  return a - b;
}

module.exports = { obtenerNombreCompleto, restar };