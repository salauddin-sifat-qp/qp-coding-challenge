/**
 * 228. Summary Ranges
 */

let summaryRanges = function (nums) {
  if (nums.length === 0) return [];
  const result = [];
  let start = nums[0];
  for (let i = 1; i <= nums.length; i++) {
    if (nums[i] === nums[i - 1] + 1) continue;
    const end = nums[i - 1];
    result.push(start === end ? `${start}` : `${start}->${end}`);
    start = nums[i];
  }
  return result;
};

console.log(summaryRanges([0, 1, 2, 4, 5, 7, 9, 11]));
