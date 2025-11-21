function intToRoman(num: number): string {
  const intToRomanMap: [number, string][] = [
    [1000, "M"],
    [900, "CM"],
    [500, "D"],
    [400, "CD"],
    [100, "C"],
    [90, "XC"],
    [50, "L"],
    [40, "XL"],
    [10, "X"],
    [9, "IX"],
    [5, "V"],
    [4, "IV"],
    [1, "I"],
  ];

  let roman = "";

  for (let [n, r] of intToRomanMap) {
    const count = Math.floor(num / n);

    if (count > 0) {
      roman += r.repeat(count);
      num = num - count * n;
    }
  }
  return roman;
}
