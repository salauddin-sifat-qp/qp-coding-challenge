var map = {
  1: "One",
  2: "Two",
  3: "Three",
  4: "Four",
  5: "Five",
  6: "Six",
  7: "Seven",
  8: "Eight",
  9: "Nine",
  10: "Ten",
  11: "Eleven",
  12: "Twelve",
  13: "Thirteen",
  14: "Fourteen",
  15: "Fifteen",
  16: "Sixteen",
  17: "Seventeen",
  18: "Eighteen",
  19: "Nineteen",
  20: "Twenty",
  30: "Thirty",
  40: "Forty",
  50: "Fifty",
  60: "Sixty",
  70: "Seventy",
  80: "Eighty",
  90: "Ninety",
};
const decMap = {
  0: "",
  1: "Thousand",
  2: "Million",
  3: "Billion",
  4: "Trillion",
};

/**
 * @param {number} num
 * @return {string}
 */
var numberToWords = function (num) {
  if (num === 0) return "Zero";
  let result = "";
  let i = 0;
  while (num > 0) {
    const n = num % 1000;
    const x = base(n);
    result = x + (x ? decMap[i] : "") + result;
    num = Math.floor(num / 1000);
    i++;
  }
  return result.replace(/([a-z])([A-Z])/g, "$1 $2");
};

function base(n) {
  if (n === 0) return "";
  if (n <= 20) return map[n];

  const ones = n % 10;
  const tens = Math.floor(n / 10) % 10;
  const hundreds = Math.floor(n / 100) % 10;

  if (n <= 99)
    return (
      (tens === 0 ? "" : `${map[tens * 10]}`) +
      (ones === 0 ? "" : `${map[ones]}`)
    );
  if (n <= 999)
    return (
      (hundreds === 0 ? "" : `${map[hundreds]}Hundred`) +
      (n % 100 === 0 ? "" : `${base(n % 100)}`)
    );
}
