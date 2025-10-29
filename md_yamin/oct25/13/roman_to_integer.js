/**
 * @param {string} s
 * @return {number}
 */
const RomanToIntegerMap = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
};

var romanToInt = function (s) {
  let ans = 0;

  for (let i = 0; i < s.length; i++) {
    if (
      i + 1 < s.length &&
      RomanToIntegerMap[s[i + 1]] > RomanToIntegerMap[s[i]]
    ) {
      ans += RomanToIntegerMap[s[i + 1]] - RomanToIntegerMap[s[i]];
      i += 1;
    } else {
      ans += RomanToIntegerMap[s[i]];
    }
  }
  return ans;
};
