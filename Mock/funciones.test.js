const { obtenerNombreCompleto, multiplicar } = require('./funciones');

test('mock con datos: devuelve un apellido', () => {
  const servicioMock = {
    getApellido: jest.fn(() => 'Pérez') // mock “con datos”: retorna 'Pérez'
  };

  const resultado = obtenerNombreCompleto('Ana', servicioMock);

  expect(resultado).toBe('Ana Pérez');
  expect(servicioMock.getApellido).toHaveBeenCalledTimes(1);
});

// prueba simple de multiplicar
test('multiplicar: 3 * 4 debe dar 12', () => {
  expect(multiplicar(3, 4)).toBe(12);
});