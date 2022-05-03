const strings = {}

strings.IsString = (arg) => {
    return (typeof arg === 'string')
}

strings.stringLength = (str) => {
    return str.length
}

module.exports = strings