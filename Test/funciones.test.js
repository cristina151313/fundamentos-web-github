// funciones.test.js
// Importamos las funciones que vamos a probar
const { sumar, multiplicar, dividir, crearSaludo, potencia } = require('./funciones');

/* =======================
   Tests de sumar
======================= */

test('sumar: 2 + 3 debe dar 5', () => {
  const resultado = sumar(2, 3);
  expect(resultado).toBe(5);
});

test('sumar: -5 + 2 debe dar -3', () => {
  expect(sumar(-5, 2)).toBe(-3);
});

/* =======================
   Tests de multiplicar
======================= */

test('multiplicar: 4 * 5 debe dar 20', () => {
  expect(multiplicar(4, 5)).toBe(20);
});

test('multiplicar: si un argumento no es número retorna error', () => {
  expect(multiplicar(4, 'a')).toBe('Error: Se requieren números');
});

/* =======================
   Tests de crearSaludo
======================= */

test('crearSaludo: debe retornar el saludo con el nombre', () => {
  const saludoEsperado = 'Hola, Juan. Bienvenido/a.';
  expect(crearSaludo('Juan')).toBe(saludoEsperado);
});

/* =======================
   Tests de dividir
======================= */

test('dividir: lanza error al dividir por cero', () => {
  expect(() => dividir(4, 0)).toThrow('No se puede dividir por cero');
});

/* =======================
   Tests de potencia
======================= */
test('potencia: potencia de una base',() =>{
  const potenciaB = potencia(2,2);
  expect(potenciaB).toBe(4);
});

test('potencia: base no debe ser cero',() =>{
  expect(() => potencia(0, 2)).toThrow('Base no puede ser cero');
});
