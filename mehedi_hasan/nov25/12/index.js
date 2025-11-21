/**
 * @param {number} num
 * @return {string}
 */

const roman = new Map([
  ["M", 1000],
  ["CM", 900],
  ["D", 500],
  ["CD", 400],
  ["C", 100],
  ["XC", 90],
  ["L", 50],
  ["XL", 40],
  ["X", 10],
  ["IX", 9],
  ["V", 5],
  ["IV", 4],
  ["I", 1],
]);

var intToRoman = function (num) {
  let ans = "";
  let temp = num;
  while (temp != 0) {
    roman.forEach((value, key) => {
      if (value <= temp) {
        let res = Math.floor(temp / value);
        temp = temp % (res * value);
        console.log(res * value, temp, key.repeat(res));

        ans += key.repeat(res);
        return;
      }
    });
  }
  return ans;
};

var intToRoman2 = function (num) {
  let ans = "";
  let temp = num;

  roman.forEach((value, key) => {
    let res = Math.floor(temp / value);
    if (value <= temp && temp != 0) {
      temp = temp % (res * value);
      console.log(res * value, temp, key.repeat(res));

      ans += key.repeat(res);
    }
  });

  return ans;
};

const number = 3749;
console.log(intToRoman2(number));
