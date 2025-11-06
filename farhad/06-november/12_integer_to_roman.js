const integerToRoman = (num) => {
  const roman = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1,
  };

  let result = "";
  for (let key in roman) {
    const count = Math.floor(num / roman[key]);
    if (count > 0) {
      result += key.repeat(count);
      num -= roman[key] * count;
    }
    if (num === 0) {
      break;
    }
  }

  return result;
};

console.log(integerToRoman(3749));
