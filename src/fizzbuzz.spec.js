const fizzBuzz = require('./fizzbuzz');

test('debería retornar 1 para el número 1', () => {
    expect(fizzBuzz(1)).toBe('1');
});