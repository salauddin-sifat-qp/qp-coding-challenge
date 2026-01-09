const positionMap: { [key: number]: string } = {
  1000000000: "Billion",
  1000000: "Million",
  1000: "Thousand",
  100: "Hundred",
  90: "Ninety",
  80: "Eighty",
  70: "Seventy",
  60: "Sixty",
  50: "Fifty",
  40: "Forty",
  30: "Thirty",
  20: "Twenty",
  19: "Nineteen",
  18: "Eighteen",
  17: "Seventeen",
  16: "Sixteen",
  15: "Fifteen",
  14: "Fourteen",
  13: "Thirteen",
  12: "Twelve",
  11: "Eleven",
  10: "Ten",
  9: "Nine",
  8: "Eight",
  7: "Seven",
  6: "Six",
  5: "Five",
  4: "Four",
  3: "Three",
  2: "Two",
  1: "One",
};

function numberToWords(num: number): string {
  if (num === 0) return "Zero";

  let numericText = "";
  for (const key of Object.keys(positionMap)
    .map(Number)
    .sort((a, b) => b - a)) {
    while (num >= key) {
      if (num < 100 && num >= 20) {
        const tens = Math.floor(num / 10) * 10;
        num -= tens;
        numericText += positionMap[tens] + " ";
        continue;
      } else if (num < 20 && num > 0) {
        numericText += positionMap[num] + " ";
        num = 0;
        continue;
      } else {
        const count = Math.floor(num / key);
        const countInWords = numberToWords(count);
        const amountToSubtract = count * key;
        num -= amountToSubtract;
        numericText += countInWords + " " + positionMap[key] + " ";
      }
    }
  }
  return numericText.trim();
}
