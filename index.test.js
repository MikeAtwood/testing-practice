const { capitalizeString, reverseString, Calculator, caesarCipher, analyzeArray } = require('./index')


// Capitalize
// test('capitalize first character in string', () => {
//     expect(capitalizeString('hello world')).toBe('Hello world')
// })
test('returns a promise that resolves to a capitalized string', () => {
    return capitalizeString('hello world').then(result => {
        expect(result).toBe('Hello world');
    });
  });

// reverseString
test('function takes string and returns it reversed', () => {
    expect(reverseString('')).toBe('')
})

// Calculator
test('add, subtract, divide and mulitply two numbers', () => {
    expect(Calculator(2, 2, '+')).toBe(4),
        expect(Calculator(2, 2, '-')).toBe(0),
        expect(Calculator(2, 2, '/')).toBe(1),
        expect(Calculator(2, 2, '*')).toBe(4)
})

// CaesarCiphar
// describe('Casesar Cipher'), () => {
test("shifts characters up one character", () => {
    expect(caesarCipher('hello')).toBe('ifmmp')
})
// }


//AnalyzeArray
describe('Analyze Array', () => {
    test('takes array of numbers and returns: average, min, max and length', () => {
        expect(analyzeArray([1, 2, 3, 4, 5])).toEqual({
            average: 3,
            min: 1,
            max: 5,
            length: 5
        })
    })

    // Tests each case
    test('Get the average of the array', () => {
        expect(analyzeArray([1, 2, 3, 4, 5]).average).toBe(3)
    })

    test('Get minimum value of the array', () => {
        expect(analyzeArray([1, 2, 3, 4, 5]).min).toBe(1)
    })

    test('Get maximum value of the array', () => {
        expect(analyzeArray([1, 2, 3, 4, 5]).max).toBe(5)
    })

    test('Get the length of the array', () => {
        expect(analyzeArray([1, 2, 3, 4, 5]).length).toBe(5)
    })
})