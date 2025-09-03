function findNumbers(nums: number[]): number {
  let eventNumberCount = 0;

  for (const value of nums) {
    if (
      (9 < value && value < 100) ||
      (999 < value && value < 10000) ||
      value == 100000
    ) {
      eventNumberCount += 1;
    }
  }
  return eventNumberCount;
}
