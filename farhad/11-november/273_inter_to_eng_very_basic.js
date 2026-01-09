const ones = [
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
];

const teens = [
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

const thousands = [
  "",
  "Thousand",
  "Million",
  "Billion",
  "Trillion",
  "Quadrillion",
];

// Converts numbers from 0-999
function convertBelow1000(n) {
  let result = "";

  if (n >= 100) {
    result += ones[Math.floor(n / 100)] + " Hundred ";
    n %= 100;
  }

  if (n >= 10 && n < 20) {
    result += teens[n - 10] + " ";
    return result;
  }

  if (n >= 20) {
    result += tens[Math.floor(n / 10)] + " ";
    n %= 10;
  }

  if (n > 0) {
    result += ones[n] + " ";
  }

  return result;
}

function numberToWords(num) {
  if (num === 0) return "Zero";

  let word = "";
  let i = 0;

  while (num > 0) {
    const reminder = num % 1000;
    if (reminder !== 0) {
      word = convertBelow1000(reminder) + thousands[i] + " " + word;
    }

    num = Math.floor(num / 1000);
    i++;
  }

  return word.trim();
}

console.log(numberToWords(1000000027));
