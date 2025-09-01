/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumbers = function (nums) {
  let count = 0;
  nums.map((num) => {
    if (num < 10) {
      return;
    }
    let absNumber = Math.abs(num);
    let digitCount = 0;
    while (absNumber > 0) {
      absNumber = Math.floor(absNumber / 10);
      digitCount++;
    }
    count = Math.floor(digitCount % 2) === 0 ? count + 1 : count;
  });
  return count;
};
