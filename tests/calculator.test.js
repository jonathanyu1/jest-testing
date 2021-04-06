const calculator = require('../src/calculator');

test('calculator add test (1)', ()=>{
    expect(calculator.add(1,2)).toBe(3);
});

test('calculator subtract test (1)', ()=>{
    expect(calculator.subtract(2,1)).toBe(1);
});

test('calculator multiply test (1)', ()=>{
    expect(calculator.multiply(3,4)).toBe(12);
});

test('calculator divide test (1)', ()=>{
    expect(calculator.divide(12,2)).toBe(6);
});