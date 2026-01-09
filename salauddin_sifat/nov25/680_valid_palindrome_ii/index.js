/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function (s) {
  s = s.toLowerCase().replace(/[^a-z0-9]/g, "");
  let l = 0;
  let r = s.length - 1;
  while (l < r) {
    if (s[l] === s[r]) {
      l++;
      r--;
    } else {
      const lp = isPalindrome(s, l, r - 1);
      const rp = isPalindrome(s, l + 1, r);
      return lp || rp;
    }
  }
  return true;
};

var isPalindrome = function (s, start, end) {
  while (start < end) {
    if (s[start] !== s[end]) return false;
    start++;
    end--;
  }
  return true;
};
