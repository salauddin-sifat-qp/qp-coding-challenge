/**
 * @param {string} s
 * @return {number}
 */
const roman = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
};
var romanToInt = function (s) {
  let num = 0;
  let prevNum = 0;
  for (let i = s.length - 1; i >= 0; i--) {
    const currentNum = roman[s[i]];
    num += prevNum > currentNum ? -currentNum : currentNum;
    prevNum = currentNum;
  }
  return num;
};
