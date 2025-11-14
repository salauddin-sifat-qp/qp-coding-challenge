/**
 * @param {number} num
 * @return {string}
 */

const numberMap = new Map([
  [0, ""],
  [1, "One"],
  [2, "Two"],
  [3, "Three"],
  [4, "Four"],

  [5, "Five"],

  [6, "Six"],
  [7, "Seven"],
  [8, "Eight"],
  [9, "Nine"],
  [10, "Ten"],
  [11, "Eleven"],
  [12, "Twelve"],
  [13, "Thirteen"],
  [14, "Fourteen"],
  [15, "Fifteen"],
  [16, "Sixteen"],
  [17, "Seventeen"],
  [18, "Eighteen"],
  [19, "Nineteen"],
  [20, "Twenty"],
  [30, "Thirty"],
  [40, "Forty"],
  [50, "Fifty"],
  [60, "Sixty"],
  [70, "Seventy"],
  [80, "Eighty"],
  [90, "Ninety"],
]);

function translate(num) {
  if (num > 99 && num < 1000) {
    return (
      translate(Math.floor(num / 100)) +
      " " +
      "Hundred" +
      " " +
      translate(num % 100)
    ).trim();
  } else if (numberMap.has(num)) {
    return numberMap.get(num);
  } else {
    let result = Math.floor(num / 10);
    let remaining = num % 10;
    return (
      translate(result * 10).trim() +
      " " +
      translate(remaining).trim()
    ).trim();
  }
}

var numberToWords = function (num) {
  const THOUSAND = 1000;
  const MILLION = 1000000;
  const BILLION = 1000000000;
  if (num === 0) return "Zero";

  if (num >= BILLION) {
    return `${translate(Math.floor(num / BILLION))} Billion ${
      num % BILLION != 0 ? numberToWords(num % BILLION) : ""
    }`.trim();
  }
  if (num >= MILLION) {
    return `${translate(Math.floor(num / MILLION))} Million ${
      num % MILLION != 0 ? numberToWords(num % MILLION) : ""
    }`.trim();
  }

  if (num >= THOUSAND) {
    return `${translate(Math.floor(num / THOUSAND))} Thousand ${
      num % THOUSAND != 0 ? numberToWords(num % THOUSAND) : ""
    }`.trim();
  }

  return translate(num).trim();
};

console.log("ans:", numberToWords(1000000));
