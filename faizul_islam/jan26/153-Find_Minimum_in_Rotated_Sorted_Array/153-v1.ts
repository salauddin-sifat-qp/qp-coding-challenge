function findMin(nums: number[]): number {
  let output: number = nums[0];
  let left: number = 0;
  let right: number = nums.length - 1;
  let mid: number;

  while (left <= right) {
    // check if the [left, right] is sorted and update min and break
    if (nums[left] < nums[right]) {
      output = Math.min(output, nums[left]);
      break;
    }

    mid = left + ((right - left) >> 1);
    output = Math.min(output, nums[mid]);

    // if [left, mid] portion is sorted then, output can be found in right portion
    // otherwise, it can be found in left section
    if (nums[mid] >= nums[left]) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return output;
}
