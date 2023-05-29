const capitalizeString = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1)
}
capitalizeString('hello world')
console.log(capitalizeString('hello world'))

module.exports = { capitalizeString }