/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
  let carry = true;
  for (let i = digits.length - 1; i >= 0; i--) {
    let temp = carry ? digits[i] + 1 : digits[i];
    digits[i] = temp > 9 ? 0 : temp;
    carry = temp > 9;
  }

  return carry ? [1, ...digits] : digits;
};
