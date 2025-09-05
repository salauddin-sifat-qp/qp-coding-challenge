const runningSum = (nums) => {
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    nums[i] = sum;
  }
  return nums;
};

const nums = [1, 2, 3, 4];
const result = runningSum(nums);
console.log(result); // Output: [1, 3, 6, 10]
