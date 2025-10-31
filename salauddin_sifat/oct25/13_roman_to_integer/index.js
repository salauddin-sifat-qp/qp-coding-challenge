const ROMAN_TO_NUM = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
};
function romanToInt(s) {
  let result = 0;
  for (let i = 0; i < s.length; i++) {
    const el = ROMAN_TO_NUM[s[i]];
    result += el;
    if (ROMAN_TO_NUM[s[i - 1]] < el) {
      result -= 2 * ROMAN_TO_NUM[s[i - 1]];
    }
  }
  return result;
}
