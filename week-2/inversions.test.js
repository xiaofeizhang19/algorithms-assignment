const inversions = require('./inversions.js');

test('it should return 5 when given [2,5,1,3,4,6,8,7]', () => {
  expect(inversions([2,5,1,3,4,6,8,7])).toBe(5);
})