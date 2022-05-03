const strings = {}

strings.IsString = arg => {
    return (typeof arg === 'string')
}

strings.stringLength = str => {
    return str.length
}

strings.convertToString = arg => {
    return arg.toString()
}

strings.isPalindrome = str => {
    let newStr = str.split('').reverse().join('')
    return (str === newStr)
}

strings.isPangram = str => {
    let newStr = ([...new Set(str)]).join('')
    if (newStr.length === 26){
        return true
    } else {
        return false
    }
}

strings.reverseString = str => {
    str = str.split('').reverse().join('')
    return str
}

module.exports = strings