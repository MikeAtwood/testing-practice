const { capitalizeString, reverseString } = require('./index')


// Capitalize
test('capitalize first character in string', () => {
    expect(capitalizeString('hello world')).toBe('Hello world')
})


// reverseString
test('function takes string and returns it reversed', () => {
    expect(reverseString('')).toBe('')
})