const integerMultiplication = require('./int-mul')

test('it should return 408 when given 12 and 34', () => {
  expect(integerMultiplication(12, 34)).toBe(408);
})

test('it should return 56088 when given 123 and 456', () => {
  expect(integerMultiplication(1234, 5678)).toBe(7006652);
})

test('it should return 561741 when given 123 and 4567', () => {
  expect(integerMultiplication(123, 4567)).toBe(561741);
})

test('it should return 17818164 when given 42 and 424242', () => {
  expect(integerMultiplication(42, 424242)).toBe(17818164);
})

test('it should return 7006652 when given 1234 and 5678', () => {
  expect(integerMultiplication(1234, 5678)).toBe(7006652);
})