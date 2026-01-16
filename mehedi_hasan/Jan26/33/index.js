/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  let low = 0;
  let high = nums.length - 1;

  while (low <= high) {
    let mid = Math.floor(low + (high - low) / 2); // preventing int overflow
    if (nums[mid] === target) {
      return mid;
    }

    if (nums[low] <= nums[mid]) {
      if (nums[low] <= target && target < nums[mid]) {
        // Left half is sorted
        high = mid - 1; // move to left
      } else {
        low = mid + 1; // move to right
      }
    } else {
      if (nums[high] >= target && target > nums[mid]) {
        // Right half is sorted
        low = mid + 1; // move to right
      } else {
        high = mid - 1; // move to left
      }
    }
  }
  return -1;
};

const nums = [4, 5, 6, 7, 0, 1, 2],
  target = 6;
console.log(search(nums, target));
