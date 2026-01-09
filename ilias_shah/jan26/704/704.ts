function search(nums: number[], target: number): number {
  let left = 0;
  let right = nums.length;

  while (left < right) {
    let mid = Math.floor((left + right) / 2);

    let num = nums[mid];

    if (num < target) {
      left = mid + 1;
    } else if (num > target) {
      right = mid;
    } else {
      return mid;
    }
  }
  return -1;
}
