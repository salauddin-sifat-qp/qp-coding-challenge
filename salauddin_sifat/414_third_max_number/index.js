/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function (nums) {
  const sortedNums = [...new Set(nums)].sort((a, b) => b - a);
  return sortedNums[2] ?? sortedNums[0];
};

var thirdMax = function (nums) {
  let max1 = -Infinity, max2 = -Infinity, max3 = -Infinity;
  const seen = {}
  for (const num of nums) {
    if (seen[num]) continue;
    seen[num] = true;
    if (num > max1) {
      max3 = max2;
      max2 = max1;
      max1 = num;
    } else if (num > max2) {
      max3 = max2;
      max2 = num;
    } else if (num > max3) {
      max3 = num;
    }
  }
  return max3 === -Infinity ? max1 : max3
};

console.log(thirdMax([3, 2, 1]) === 1);
console.log(thirdMax([1, 2]) === 2);
console.log(thirdMax([2, 2, 3, 1]) === 1);
console.log(thirdMax([1, 1, 2]) === 2);
console.log(thirdMax([3, 3, 4, 3, 4, 3, 0]));
