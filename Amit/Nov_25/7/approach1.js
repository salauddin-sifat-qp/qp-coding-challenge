var intToRoman = function (num) {
  const values = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  const numerals = [
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

  for (let i = 0; i < values.length; i++) {
    const value = values[i];
    const numeral = numerals[i];
    while (num >= value) {
      result += numeral;
      num -= value;
    }
  }

  return result;
};

result = intToRoman(3749);
console.log(result); //MMMDCCXLIX
