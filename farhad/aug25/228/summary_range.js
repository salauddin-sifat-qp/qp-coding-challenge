const summaryRange = (nums) => {
  const result = [];
  let min = nums[0];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i + 1] - nums[i] === 1) {
      continue;
    } else if (min === nums[i]) {
      result.push(`${min}`);
      min = nums[i + 1];
      continue;
    } else {
      result.push(`${min}->${nums[i]}`);
      min = nums[i + 1];
    }
  }
  return result;
};

const nums = [0, 1, 2, 4, 5, 7];
const res = summaryRange(nums);

console.log(res);
