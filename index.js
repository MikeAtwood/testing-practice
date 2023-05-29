const { resolvePlugin } = require("@babel/core")

const capitalizeString = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1)
}
capitalizeString('hello world')
console.log(capitalizeString('hello world'))

// reverse string function
const reverseString = (string) => {
    let splitString = string.split("")
    let reverseStr = splitString.reverse()
    let joinStr = reverseStr.join("")
    return joinStr
}
reverseString("hello world")

// Calculator Function(add, subtract, divide, multiply)
const Calculator = (a, b, operator) => {
    let result
    switch (operator) {
    case '+':
        result = a + b;
        break;
    case '-':
        result = a - b;
        break;
    case '/':
        result = a / b;
        break;
    case '*':
        result = a * b;
        break;
    default:
        result = 'invalid operator'
    }
    return result
} 
Calculator(2, 2, '+')
Calculator(2, 2, '-')
Calculator(2, 2, '/')
Calculator(2, 2, '*')


module.exports = { capitalizeString, reverseString, Calculator }