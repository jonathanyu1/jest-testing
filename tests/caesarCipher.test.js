const caesarCipher = require('../src/caesarCipher');

test('caesarCipher test (1)', ()=>{
    expect(caesarCipher('hello', 5)).toBe('mjqqt');
});

test('caesarCipher test (2)', ()=>{
    expect(caesarCipher('zebra!', 5)).toBe('ejgwf!');
});