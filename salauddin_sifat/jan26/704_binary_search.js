/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  let li = 0;
  let hi = nums.length - 1;
  let mi = Math.floor((li + hi) / 2);
  while (li <= hi) {
    if (target === nums[mi]) {
      return mi;
    } else if (target > nums[mi]) {
      li = mi + 1;
    } else {
      hi = mi - 1;
    }
    mi = Math.floor((li + hi) / 2);
  }
  return nums[mi] === target ? mi : -1;
};
console.log(search([-1, 0, 3, 5, 9, 12], 9)); //4
