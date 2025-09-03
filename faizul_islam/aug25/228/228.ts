function summaryRanges(nums: number[]): string[] {
  let result: string[] = [];
  let start = 0;

  for (let i = 0; i < nums.length; i++) {
    if (i + 1 < nums.length && nums[i] + 1 === nums[i + 1]) {
      continue;
    } else {
      if (start === i) {
        result.push(nums[start].toString());
      } else {
        result.push(nums[start] + "->" + nums[i]);
      }
      start = i + 1;
    }
  }

  return result;
}
