const containDuplicate = (nums, k) => {
  let mapping = new Map();
  for (let i = 0; i < nums.length; i++) {
    if (mapping.has(nums[i]) && i - mapping.get(nums[i]) <= k) {
      return true;
    }
    mapping.set(nums[i], i);
  }
  return false;
};

const nums = [1, 2, 3, 1];
const res = containDuplicate(nums, 3);
console.log(res);
