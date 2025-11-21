const reverseString = (s) => {
  const mid = Math.floor(s.length / 2);
  const lastIndex = s.length - 1;

  for (let i = 0; i < mid; i++) {
    const temp = s[i];
    s[i] = s[lastIndex - i];
    s[lastIndex - i] = temp;
  }
  return s;
};

const arr = ["h", "e", "l", "l", "o", "big"];

console.log(reverseString(arr));
