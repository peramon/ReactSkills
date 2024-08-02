import { saludo } from "../../src/base-prueba/02-template-string.js"

describe('Test in 02-template-string.js', () => {
  test('saludo will return "Hola nombre"', () => {
    
    // 1. Inicialization
    const name = 'Paul';
    const message = saludo(name);

    // 2. Stimulus
   

    // 3. Observe the expected behavior...
    expect( message).toBe(`Hola ${name}`)

    
  })
  
})
