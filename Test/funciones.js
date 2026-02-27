
// Función 1: Suma dos números
function sumar(a, b) {
  return a + b;
}

// Función 2: Multiplica dos números y maneja valores no numéricos
function multiplicar(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    return 'Error: Se requieren números';
  }
  return a * b;
}

function dividir(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    return 'Error: Se requieren números';
  }
  if (b === 0) {
    throw new Error('No se puede dividir por cero');
  }
  return a / b;
}

// Función 3: Crea un saludo personalizado
function crearSaludo(nombre) {
  return `Hola, ${nombre}. Bienvenido/a.`;
}

// Función 4: Potencia de una base
function potencia(a, b){
  if(a === 0){
    throw new Error('Base no puede ser cero');
  }
  return a**b;
}

module.exports = { sumar, multiplicar, dividir, crearSaludo, potencia };
