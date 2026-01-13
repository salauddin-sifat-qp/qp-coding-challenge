function search(nums: number[], target: number): number {
  let output: number = -1;
  let left: number = 0;
  let right: number = nums.length - 1;
  let mid: number;

  while (left <= right) {
    mid = left + ((right - left) >> 1);

    if (target === nums[mid]) {
      return mid;
    }
    // check if [left, mid] portion is sorted
    if (nums[left] <= nums[mid]) {
      if (target > nums[mid] || target < nums[left]) {
        // target is greater than upper limit or less than lower limit of sorted portion
        // so it can be found on right side
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    } else {
      // [mid, right] portion is sorted
      if (target > nums[right] || target < nums[mid]) {
        // target is greater than upper limit or less than lower limit of sorted portion
        // so it can be found on left side
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    }
  }
  return output;
}
