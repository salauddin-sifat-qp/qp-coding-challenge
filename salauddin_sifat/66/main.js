/*
 * 66. Plus One
 * You are given a large integer represented as an integer array digits, where each digits[i] is the ith digit of the integer. The digits are ordered from most significant to least significant in left-to-right order. The large integer does not contain any leading 0's. Increment the large integer by one and return the resulting array of digits.
 */
let plusOne = function (digits) {
  const len = digits.length;
  let carry = 0;
  for (let i = len - 1; i >= 0; i--) {
    const el = digits[i];
    if (el === 9) {
      carry = 1;
      digits[i] = 0;
    } else {
      digits[i] = el + 1;
      carry = 0;
      break;
    }
  }
  if (carry === 1) digits.unshift(1);
  return digits;
};

console.log(plusOne([8, 9, 9, 9])); // [1, 2, 4]
