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

module.exports = { capitalizeString, reverseString }