function numberToWords(num: number): string {
  if (num === 0) return "Zero";

  const below20 = [
    "",
    "One",
    "Two",
    "Three",
    "Four",
    "Five",
    "Six",
    "Seven",
    "Eight",
    "Nine",
    "Ten",
    "Eleven",
    "Twelve",
    "Thirteen",
    "Fourteen",
    "Fifteen",
    "Sixteen",
    "Seventeen",
    "Eighteen",
    "Nineteen",
  ];

  const tens = [
    "",
    "",
    "Twenty",
    "Thirty",
    "Forty",
    "Fifty",
    "Sixty",
    "Seventy",
    "Eighty",
    "Ninety",
  ];

  const thousands = ["", "Thousand", "Million", "Billion"];

  function helper(n: number): string {
    if (n === 0) return "";
    else if (n < 20) return below20[n] + " ";
    else if (n < 100) return tens[Math.floor(n / 10)] + " " + helper(n % 10);
    else return below20[Math.floor(n / 100)] + " Hundred " + helper(n % 100);
  }

  let result = "";
  let i = 0;

  while (num > 0) {
    const chunk = num % 1000;
    if (chunk !== 0) {
      result = helper(chunk) + thousands[i] + " " + result;
    }
    num = Math.floor(num / 1000);
    i++;
  }

  return result.trim();
}
