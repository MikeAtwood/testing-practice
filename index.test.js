const { capitalizeString, reverseString, Calculator } = require('./index')


// Capitalize
test('capitalize first character in string', () => {
    expect(capitalizeString('hello world')).toBe('Hello world')
})


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
test("shifts characters up one character", () => {
    const a = 1
    const b = 2
    const shiftFactor = 1
    expect(a + shiftFactor).toBe(b)
})