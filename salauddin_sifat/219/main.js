/**
 * 219. Contains Duplicate II
 */
let containsNearbyDuplicate = function (nums, k) {
  const memo = new Map();
  for (let i = 0; i < nums.length; i++) {
    const el = nums[i];
    if (Math.abs(memo.get(el) - i) <= k) return true;
    memo.set(el, i);
  }
  return false;
};

console.log(containsNearbyDuplicate([1, 2, 3, 1], 3));
