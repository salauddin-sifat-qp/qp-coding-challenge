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
    const count = Math.floor(num / values[i]);
    if (count > 0) {
      result += numerals[i].repeat(count);
      num %= values[i];
    }
  }

  return result;
};

result = intToRoman(3749);
console.log(result); //MMMDCCXLIX
/*

mod = 3749 // 1000 = 3 , remainder = 3749 % 1000 = 749 result = "MMM"
mod = 749 // 900 = 0 ---cancel 
mod = 749 // 500 = 1 remainder = 749 % 500 = 249 result = "MMMD"
mod = 249 // 100 = 2 remainder = 249 % 100 = 49 result = "MMMDCC"
mod = 49 // 40 = 1 remainder = 49%40 = 9 result = "MMMDCCXL"
mod = 9 // 9 = 1 remainder = 9%9 = 0 result = ""MMMDCCXLIX






*/
