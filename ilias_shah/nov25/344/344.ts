function reverseString(s: string[]): void {
  for (let i = 0; i < s.length / 2; i++) {
    const changingStr = s[i];
    s[i] = s[s.length - 1 - i];
    s[s.length - 1 - i] = changingStr;
  }
}

const strArray1 = ["h", "e", "l", "l", "o"];
const strArray2 = ["i", "l", "i", "a", "s", "s", "h", "a", "h"];

reverseString(strArray1);
console.log(strArray1);

reverseString(strArray2);
console.log(strArray2);
