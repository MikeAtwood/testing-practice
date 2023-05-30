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

// Casesar Cipher
function caesarCipher(str, shift = 1) {
    if (shift < 0) {
      return caesarCipher(str, shift + 26);
    }
    let result = '';
    for (let i = 0; i < str.length; i++) {
      let char = str[i];
      if (char.match(/[a-z]/i)) {
        let code = str.charCodeAt(i);
        if (code >= 65 && code <= 90) {
          char = String.fromCharCode(((code - 65 + shift) % 26) + 65);
        }
        else if (code >= 97 && code <= 122) {
          char = String.fromCharCode(((code - 97 + shift) % 26) + 97);
        }
      }
      result += char;
    }
    return result;
  }
console.log(caesarCipher("hello"))

// Anazlyze Array 
const analyzeArray = (array) => {
    const sum = array.reduce((current, previous) => {
        return current + previous
    })
    const average = sum / array.length
    const min = array.reduce((current, previous) => {
        return Math.min(current, previous)
    })
    const max = array.reduce((current, previous) => {
        return Math.max(current, previous)
    })
    const length = array.length

    const analyzedArray = {
        average: average,
        min: min,
        max: max,
        length: length
    }
    return analyzedArray
}


module.exports = { capitalizeString, reverseString, Calculator, caesarCipher, analyzeArray }