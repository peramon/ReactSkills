describe('Pruebas en <DemoComponente/>', () => {

    test('Esta prueba no debe fallar', () => {
        // Prueba
        // if(0 === 0){
        //     throw new Error('No puede dividir entre 0');
        // }
        // 1 Inicializacion
        const message1 = 'Hola mundo';

        // 2 Estimulo
        const message2 = message1.trim();

        // 3 Observar el comportamiento
        expect(message1).toBe(message2);

    });

});