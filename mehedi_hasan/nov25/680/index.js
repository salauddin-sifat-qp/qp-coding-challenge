// ValidPalindrome II

// Given a string s, return true if the s can be palindrome after deleting at most one character from it.

/**
 * @param {string} s
 * @return {boolean}
 */

const testcases = ["aba", "abca", "abc"];

const expected = [true, true, false];

// Solution 1
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

// 5ms
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

// 4ms
// solution 2
var validPalindrome2 = function (s) {
  let trySkipping = (side) => {
    let left = 0;
    let right = s.length - 1;
    let isSkipped = false;

    while (left < right) {
      if (s[left] != s[right] && !isSkipped) {
        if (side === "l") {
          left++;
        } else {
          right--;
        }

        isSkipped = true;

        continue;
      } else if (s[left] != s[right]) {
        return false;
      }
      left++;
      right--;
    }
    return true;
  };
  return trySkipping("l") || trySkipping("r");
};

console.log(validPalindrome2("abca"));
