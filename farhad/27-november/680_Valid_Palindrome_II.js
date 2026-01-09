const validPalindrome = (s) => {
  const isPalindrome = (s, left, right) => {
    if (left >= right) return true;
    while (left < right) {
      if (s[left] !== s[right]) return false;
      left++;
      right--;
    }
    return true;
  };

  if (s.length <= 1) return true;

  if (isPalindrome(s, 0, s.length - 1)) return true;

  let left = 0;
  let right = s.length - 1;

  for (let i = 0; i < s.length / 2; i++) {
    if (s[left] !== s[right]) {
      console.log("s[left]", s[left], "s[right]", s[right]);
      return (
        isPalindrome(s, left + 1, right) || isPalindrome(s, left, right - 1)
      );
    }
    left++;
    right--;
  }

  return true;
};

const str = "ababcakba";
console.log(validPalindrome(str)); // true
