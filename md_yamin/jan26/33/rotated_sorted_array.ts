function binary_search(
  low: number,
  high: number,
  target: number,
  nums: number[]
): number {
  while (low <= high) {
    let mid = Math.floor((high - low) / 2) + low;
    if (nums[mid] === target) {
      return mid;
    } else if (target < nums[mid]) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }
  return -1;
}

function search(nums: number[], target: number): number {
  let breakPoint: number;

  for (let it = 0; it < nums.length; it++) {
    if (nums[it] > nums[it + 1]) {
      breakPoint = it;
      break;
    }
  }

  if (breakPoint != null) {
    let ans1 = binary_search(0, breakPoint, target, nums);
    let ans2 = binary_search(breakPoint + 1, nums.length - 1, target, nums);
    return ans1 !== -1 ? ans1 : ans2;
  } else {
    return binary_search(0, nums.length - 1, target, nums);
  }
}
