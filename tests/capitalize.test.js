const capitalize = require('../src/capitalize');

test('returns string with first char capitalized (1)', ()=>{
    expect(capitalize('hello')).toBe('Hello');
});

test('returns string with first char capitalized (2)', ()=>{
    expect(capitalize('two words')).toBe('Two words');
});