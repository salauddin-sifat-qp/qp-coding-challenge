function search(nums: number[], target: number): number {
  let low = 0,
    high = nums.length - 1;
  while (low <= high) {
    let mid = Math.floor((high - low) / 2 + low); //tips: int overflow
    if (target === nums[mid]) {
      return mid;
    } else if (target < nums[mid]) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }
  return -1;
}
