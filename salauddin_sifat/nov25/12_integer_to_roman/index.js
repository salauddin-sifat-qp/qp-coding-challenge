function intToRoman(n) {
  const map = {
    1: "I",
    5: "V",
    10: "X",
    50: "L",
    100: "C",
    500: "D",
    1000: "M",
  };
  if (n < 1 || n > 3999) return;
  const len = Math.floor(Math.log10(n)) + 1;
  let result = "";

  for (let i = len - 1; i >= 0; i--) {
    const el = Math.floor(n / 10 ** i) % 10;
    if (el === 0) continue;

    const one = map[10 ** i];
    const five = map[5 * 10 ** i];
    const ten = map[10 ** (i + 1)];

    if (el === 4) {
      result += one + five;
    } else if (el === 9) {
      result += one + ten;
    } else {
      if (el >= 5) result += five;
      result += one.repeat(el % 5);
    }
  }
  return result;
}

console.log(intToRoman(3749));
