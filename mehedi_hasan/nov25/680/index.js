// ValidPalindrome II

// Given a string s, return true if the s can be palindrome after deleting at most one character from it.

/**
 * @param {string} s
 * @return {boolean}
 */

const testcases = ["aba", "abca", "abc"];

const expected = [true, true, false];

const isValidPalindrome = function (s, leftIndex, rightIndex) {
  while (leftIndex < rightIndex) {
    if (s[leftIndex] != s[rightIndex]) {
      return false;
    }
    leftIndex++;
    rightIndex--;
  }
  return true;
};

var validPalindrome = function (s) {
  let left = 0;
  let right = s.length - 1;
  while (left < right) {
    if (s[left] != s[right]) {
      return (
        isValidPalindrome(s, left + 1, right) ||
        isValidPalindrome(s, left, right - 1)
      );
    }

    left++;
    right--;
  }

  return true;
};

console.log(validPalindrome("ab bba"));
