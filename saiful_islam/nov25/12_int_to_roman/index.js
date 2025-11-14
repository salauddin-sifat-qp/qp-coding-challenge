/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function (num) {
  const baseValues = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  const romanNumerals = [
    "M",
    "CM",
    "D",
    "CD",
    "C",
    "XC",
    "L",
    "XL",
    "X",
    "IX",
    "V",
    "IV",
    "I",
  ];

  let result = "";
  let i = 0;
  while (num > 0) {
    let div = Math.floor(num / baseValues[i]);

    while (div) {
      result += romanNumerals[i];
      div--;
    }

    num = num % baseValues[i];
    i++;
  }
  return result;
};

/**
 * @param {number} num
 * @return {string}
 */
var intToRoman2 = function (num) {
  const baseValues = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  const romanNumerals = [
    "M",
    "CM",
    "D",
    "CD",
    "C",
    "XC",
    "L",
    "XL",
    "X",
    "IX",
    "V",
    "IV",
    "I",
  ];

  let result = "";
  let i = 0;
  while (num > 0) {
    let div = Math.floor(num / baseValues[i]);
    result += romanNumerals[i].repeat(div);
    num = num % baseValues[i];
    i++;
  }
  return result;
};

console.log(intToRoman(1994)); // "MCMXCIV"
