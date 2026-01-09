/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */

// 0ms
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
// 578ms
var reverseString2 = function (s) {
  let count = 0;
  for (let i = s.length - 1; i >= 0; i--) {
    s.push(s[i]);
    count++;
  }
  while (count > 0) {
    s.shift();
    count--;
  }
};

const input = ["h", "e", "l", "l", "o"];
console.log("input", input);

reverseString2(input);
console.log("output", input);
