/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function (nums) {
  let arr = [];
  for (let i = 0; i < nums.length; i++) {
    arr.push((i === 0 ? 0 : arr[i - 1]) + nums[i]);
  }
  return arr;
};
