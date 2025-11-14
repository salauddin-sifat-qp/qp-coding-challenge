/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function (s) {
  count = s.length - 1;
  while (count != 0) {
    for (let i = 0; i < s.length; i++) {
      if (i >= count) return;
      let t = s[i];
      s[i] = s[count];
      s[count] = t;
      count--;
    }
  }
};
const input = ["h", "e", "l", "l", "o", "o"];
console.log("input", input);

reverseString(input);
console.log("output", input);
