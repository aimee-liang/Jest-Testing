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