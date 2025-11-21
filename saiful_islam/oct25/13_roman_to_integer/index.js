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
  for (let i = s.length - 1; i >= 0; i--) {
    const value = ROMAN_TO_NUM[s[i]];
    if (i === s.length - 1) {
      result += value;
      continue;
    }
    if (value < ROMAN_TO_NUM[s[i + 1]]) {
      result -= value;
      continue;
    }
    result += value;
  }
  return result;
}

const number = romanToInt("MCMXCIV"); // 1994
console.log(number);
