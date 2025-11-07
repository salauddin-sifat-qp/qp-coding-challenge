var intToRoman = function (num) {
  if (typeof num !== "number" || num <= 0 || num >= 4000) {
    throw new Error("num must be an integer in range 1..3999");
  }

  const thousands = ["", "M", "MM", "MMM"];
  const hundreds = ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"];
  const tens = ["", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"];
  const ones = ["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"];

  const t = Math.floor(num / 1000);
  const h = Math.floor((num % 1000) / 100);
  const te = Math.floor((num % 100) / 10);
  const o = num % 10;

  return thousands[t] + hundreds[h] + tens[te] + ones[o];
};
