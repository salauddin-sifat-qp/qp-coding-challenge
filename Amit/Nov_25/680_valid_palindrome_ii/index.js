var validPalindrome = function (s) {
  let left = 0;
  let right = s.length - 1;

  if (s.length <= 1) return true;
  if (s.length === 2) return true;

  function isPalindrome(str, left, right) {
    while (left < right) {
      if (str[left] !== str[right]) {
        return false;
      }
      left++;
      right--;
    }
    return true;
  }

  while (left < right) {
    if (s[left] === s[right]) {
      left++;
      right--;
    } else {
      return (
        isPalindrome(s, left + 1, right) || isPalindrome(s, left, right - 1)
      );
    }
  }
  return true;
};
