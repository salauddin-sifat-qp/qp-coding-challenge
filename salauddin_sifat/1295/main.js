function findNumbers(nums) {
  let n = 0;
  for (let i = 0; i < nums.length; i++) {
    n = n + Math.floor(Math.log10(nums[i]) % 2);
  }
  return n;
}

const t = [12, 345, 2, 6, 7896];
console.log(findNumbers(t));
