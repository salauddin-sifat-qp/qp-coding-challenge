function isPalindromeFromLeft(s: string): boolean {
  let lcount: number = 0;
  let start = 0;
  let last = s.length - 1;
  while (start <= last) {
    if (s[start] === s[last]) {
      start += 1;
      last -= 1;
    } else {
      if (s[start + 1] === s[last]) {
        lcount += 1;
        start += 2;
        last -= 1;
      } else {
        return false;
      }
    }
  }

  return lcount <= 1;
}

function isPalindromeFromRight(s: string): boolean {
  let rcount: number = 0;
  let start = 0;
  let last = s.length - 1;
  while (start <= last) {
    if (s[start] === s[last]) {
      start += 1;
      last -= 1;
    } else {
      if (s[start] === s[last - 1]) {
        rcount += 1;
        start += 1;
        last -= 2;
      } else {
        return false;
      }
    }
  }

  return rcount <= 1;
}

function validPalindrome(s: string): boolean {
  return isPalindromeFromLeft(s) || isPalindromeFromRight(s);
}
