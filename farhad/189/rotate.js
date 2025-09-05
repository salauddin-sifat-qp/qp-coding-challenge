

const rotateArray = (nums, k) => {
  let current = 0;
 while (current !== 0) {
  current = current + k % nums.length;
  nums[current] = 
 }
};

const arr = [-1, -100, 3, 99];
const res = rotateArray(arr, 2);
console.log(res);
