var integerMultiplication = (intX, intY) => {
  if (intX < 10 && intY < 10) {
    return intX * intY;
  }

  let digitX = 0, digitY = 0;
  let x = intX, y = intY;
  while (x / 10 > 0) {
    x = Math.floor(x / 10);
    digitX++;
  }
  while (y / 10 > 0) {
    y = Math.floor(y / 10);
    digitY++;
  }

  let n = Math.max(digitX, digitY);
  let half = Math.floor(n / 2);
  let a = Math.floor(intX / Math.pow(10, half)),
      b = Math.floor(intY / Math.pow(10, half)),
      c = intX % Math.pow(10, half),
      d = intY % Math.pow(10, half);
  let multi1 = integerMultiplication(a, b),
      multi2 = integerMultiplication(c, d),
      multi3 = integerMultiplication((a + c), (b + d)) - multi1 - multi2;

  let result = multi1 * Math.pow(10, 2 * half) + multi2 + multi3 * Math.pow(10, half);
  console.log(result)
  return result;
}

integerMultiplication(3141592653589793238462643383279502884197169399375105820974944592, 2718281828459045235360287471352662497757247093699959574966967627)

module.exports = integerMultiplication;