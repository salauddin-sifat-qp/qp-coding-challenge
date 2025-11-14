/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges2 = function (nums) {
  const arr = [];
  let left = nums[0];

  for (let i = 1; i <= nums.length; i++) {
    if (nums[i - 1] + 1 === nums[i]) continue;

    if (left === nums[i - 1]) {
      arr.push(`${left}`);
    } else {
      arr.push(`${left}->${nums[i - 1]}`);
    }

    left = nums[i];
  }

  return arr;
};
var summaryRanges = function (nums) {
  const arr = [];
  let left = nums[0];
  let curt = nums[0];

  for (let i = 1; i <= nums.length; i++) {
    if (nums[i - 1] + 1 === nums[i]) {
      curt = nums[i];
    }

    // if (nums[i - 1] + 1 === nums[i]) continue;

    // if ((i + 1) !== nums.length && left === nums[i - 1]) {
    //   arr.push(`${left}`);
    // } else {
    //   arr.push(`${left}->${nums[i - 1]}`);
    // }

    // left = nums[i];
  }

  return arr;
};
const nums = [0, 1, 2, 4, 5, 7];
const nums2 = [0, 2, 3, 4, 6, 8, 9];

console.log(summaryRanges2(nums2));
