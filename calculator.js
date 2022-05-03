const calculator = {}

calculator.add = (arg1, arg2) => {
    return arg1 + arg2
}

calculator.subtract = (arg1, arg2) => {
    return arg1 - arg2
}

calculator.exponents = (arg1, arg2) => {
    return Math.pow(arg1, arg2)
}

calculator.squareRoot = num => {
    return Math.sqrt(num)
}

module.exports = calculator