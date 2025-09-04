
const fizzBuzz = require('./fizzbuzz'); // Importamos la función que vamos a crear

test('debería retornar 1 para el número 1', () => {
    expect(fizzBuzz(1)).toBe('1');
});

test('debería retornar 1 para el número 1', () => {
    expect(fizzBuzz(4)).toBe('4');
});

test('debería retornar Fizz para múltiplos de 3', () => {
    expect(fizzBuzz(3)).toBe('Fizz');
});

test('debería retornar Buzz para múltiplos de 5', () => {
    expect(fizzBuzz(5)).toBe('Buzz');
});


test('debería retornar FizzBuzz para múltiplos de 3 y 5', () => {
    expect(fizzBuzz(15)).toBe('FizzBuzz');
});

