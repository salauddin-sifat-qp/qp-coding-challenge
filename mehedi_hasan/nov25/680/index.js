// ValidPalindrome II

// Given a string s, return true if the s can be palindrome after deleting at most one character from it.

/**
 * @param {string} s
 * @return {boolean}
 */

const testcases = ["aba", "abca", "abc"];

const expected = [true, true, false];

var validPalindrome = function (s) {
  let sentance = s.toLowerCase().replace(/[^a-z0-9]/g, "");

  let left = 0;
  let right = sentance.length - 1;
  while (left < right) {
    if (sentance[left] != sentance[right]) {
      if (skiped) {
        return false;
      } else {
        skipped = true;
      }
    }

    left++;
    right--;
  }

  return true;
};

var validPalindrome2 = function (s) {
  let sentance = s.toLowerCase().replace(/[^a-z0-9]/g, "");

  let left = 0;
  let right = sentance.length - 1;

  while (left < right) {
    lefSide += sentance[left];
    rightSide += sentance[right];
    if (sentance[left] != sentance[right]) {
      if (skiped) {
        return false;
      } else {
        skipped = true;
      }
    }

    left++;
    right--;
  }

  return true;
};

console.log(validPalindrome("rac e car"));
