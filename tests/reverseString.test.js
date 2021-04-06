const reverseString = require('../src/reverseString');

test('reverse string test (1)', ()=>{
    expect(reverseString('hello')).toBe('olleh');
});

test('reverse string test (2)', ()=>{
    expect(reverseString('Friend')).toBe('dneirF');
});

test('reverse string test (3)', ()=>{
    expect(reverseString('hello Friend')).toBe('dneirF olleh');
});