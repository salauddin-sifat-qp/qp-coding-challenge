function runningSum(nums: number[]): number[] {
  const newArr = [nums[0]];

  for (let i = 1; i < nums.length; i++) {
    newArr.push(newArr[i - 1] + nums[i]);
  }

  return newArr;
}
