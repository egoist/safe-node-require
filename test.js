/* globals test expect */
const req = require('./')

test('require file (exists)', () => {
  const file = req('./')
  expect(typeof file).toBe('function')
})

test('require file (not exists)', () => {
  const file = req('./foo')
  expect(file).toBe(null)
})

test('require module (exists)', () => {
  const m = req('saikou')
  expect(typeof m).toBe('function')
})

test('require module (not exists)', () => {
  const m = req('pokemon')
  expect(m).toBe(null)
})
