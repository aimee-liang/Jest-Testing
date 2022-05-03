// const { expect } = require('chai')
// const expect = require('chai/lib/chai/interface/expect')
const strings = require('../strings')

test('Number passed in as a arg will not be evaluated as a string', () => {
    expect(strings.IsString(5)).toBe(false)
})

test('Empty string should return true as string', () => {
    expect(strings.IsString('')).toBe(true)
})

test('Length of string `qwertyuiopasdfghjklzxcvbnm` to be 26', () => {
    expect(strings.stringLength('qwertyuiopasdfghjklzxcvbnm')).toBe(26)
})

test('Argument should be converted as a string', () => {
    expect(strings.convertToString(1502)).toBe('1502')
})

test('Return true if string is a palindrome', () => {
    expect(strings.isPalindrome('racecar')).toBe(true)
})

test('Return false if string is not a palindrome', () => {
    expect(strings.isPalindrome('pizza')).toBe(false)
})

test('Return true if pangram, false if otherwise', () => {
    expect(strings.isPangram('qwertyuioppppplkjhgfdsamnbvcxzazzz')).toBe(true)
})

test('Return reversed string', () => {
    expect(strings.reverseString('abc')).toBe('cba')
})