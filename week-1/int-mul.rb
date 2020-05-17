def int_mul(x, y)
  if x < 10 && y < 10
    return x * y
  end

  digit_x = 0
  digit_y = 0
  x_dup = x
  y_dup = y
  while x_dup > 0
    x_dup = x_dup / 10
    digit_x += 1
  end
  while y_dup > 0
    y_dup = y_dup / 10
    digit_y += 1
  end
  division = ([digit_x, digit_y].max) / 2
  a = x / (10 ** division)
  b = y / (10 ** division)
  c = x % (10 ** division)
  d = y % (10 ** division)
  multi_1 = int_mul(a, b)
  multi_2 = int_mul(c, d)
  multi_3 = int_mul(a + c, b + d) - multi_1 - multi_2
  p multi_1
  p multi_2
  p multi_3
  result = multi_1 * (10 ** (2 * division)) + multi_2 + multi_3 * (10 ** division)
  p result
end

int_mul(3141592653589793238462643383279502884197169399375105820974944592, 2718281828459045235360287471352662497757247093699959574966967627)