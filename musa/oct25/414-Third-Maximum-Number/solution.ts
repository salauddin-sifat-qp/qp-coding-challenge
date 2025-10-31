function thirdMax(nums: number[]): number {
  const distinctNumbers = [...new Set(nums)];
  const sortedNumbers = distinctNumbers.sort((a, b) => b - a);
  if (sortedNumbers.length >= 3) {
    return sortedNumbers[2];
  }
  return sortedNumbers[0];
}
