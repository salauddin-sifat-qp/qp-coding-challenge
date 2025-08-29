/**
 Do not return anything, modify nums in-place instead.
 */

function rotate(nums: number[], k: number): void {
  const n = nums.length;

  if (k % n == 0) return;

  let first = 0,
    middle = n - (k % n),
    last = n;

  let next = middle,
    temp = 0;

  while (first != next) {
    temp = nums[first];
    nums[first] = nums[next];
    nums[next] = temp;

    first += 1;
    next += 1;

    if (next == last) {
      next = middle;
    } else if (first == middle) {
      middle = next;
    }
  }
}
