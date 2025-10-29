function thirdMax(nums: number[]): number {
  const uniqueSortedArr = [...new Set(nums)].sort((a, b) => b - a);
  return uniqueSortedArr.length < 3 ? uniqueSortedArr[0] : uniqueSortedArr[2];
}

console.log(thirdMax([3, 2, 1]));
console.log(thirdMax([1, 2]));
console.log(thirdMax([2, 2, 3, 1]));
