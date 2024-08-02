
describe('Test in <Democomponent />', () => {
    test('This test not failed', () => {
    
        // 1. Inicialization
        const message1 = 'Hello test';
    
        // 2. Stimulus
        const message2 = message1.trim();
    
        // 3. Observe the expected behavior...
        expect( message1 ).toBe(message2);
    
    })
})


