import { saludo } from "../../bases/02-template-string";

describe('Pruebas en el archivo 02-template', () => {
  test('getSaludo debe retornar Este es un texto name', () => {

    const nombre = 'Paul';
    const message = saludo(nombre);
    expect( message ).toBe(`Hola ${nombre}!!!`)
  });
  
});
