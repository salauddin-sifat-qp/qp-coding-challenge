function thirdMax(nums: number[]): number {
  let max: number = nums[0];
  let min: number = nums[0];

  for (const n of nums) {
    if (n > max) {
      max = n;
    }
    if (n < min) {
      min = n;
    }
  }

  let firstMax: number = max;
  let secondMax: number = min;
  let thirdMax: number = min;

  for (const n of nums) {
    if (n > secondMax && n < firstMax) {
      thirdMax = secondMax;
      secondMax = n;
    } else if (n > thirdMax && n < secondMax) {
      thirdMax = n;
    }
  }

  return thirdMax === secondMax ? firstMax : thirdMax;
}
