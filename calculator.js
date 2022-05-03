const calculator = {}

calculator.add = (arg1, arg2) => {
    return arg1 + arg2
}

calculator.subtract = (arg1, arg2) => {
    return arg1 - arg2
}

calculator.multiply = (arg1, arg2) => {
    return arg1 * arg2
}

calculator.divide = (arg1, arg2) => {
    return arg1 / arg2
}

calculator.exponents = (arg1, arg2) => {
    return Math.pow(arg1, arg2)
}

calculator.squareRoot = num => {
    return Math.sqrt(num)
}

calculator.factorial = num => {
    if (num === 0) return 1
    return (num * calculator.factorial(num - 1))
}

module.exports = calculator