// const expect = require('chai/lib/chai/interface/expect')
// const { expect } = require('chai')
const calculator = require('../calculator')

test ('Return sum of two arguments passed in', () => {
    expect(calculator.add(5, 2)).toBe(7)
})

test('Return difference of two arguments passed in', () => {
    expect(calculator.subtract(23, 76)).toBe(-53)
})

test('Return value of arg1 to the power of arg2', () => {
    expect(calculator.exponents(23, 3)).toBe(12167)
})

test('Return the square root of number passed in', () => {
    expect(calculator.squareRoot(144)).toBe(12)
})