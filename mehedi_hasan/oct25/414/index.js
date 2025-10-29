/**
 * @param {number[]} nums
 * @return {number}
 */
const thirdMax = function (nums) {
  const sortedNums = [...new Set(nums)].sort((a, b) => b - a);
  console.log(sortedNums);
  return sortedNums[sortedNums.length > 2 ? 2 : 0];
};

// with custom quick sort
var thirdMax2 = function (nums) {
  let quickSort = (arr) => {
    if (arr.length <= 1) return arr;

    const left = [];
    const right = [];
    const pivot = arr[arr.length - 1];
    for (let i = 0; i < arr.length - 1; i++) {
      if (pivot < arr[i]) {
        left.push(arr[i]);
      } else {
        right.push(arr[i]);
      }
    }
    console.log(`left: ${left}, pivot: ${pivot}, right: ${right}`);
    return [...quickSort(left), pivot, ...quickSort(right)];
  };
  const sortedNums = quickSort([...new Set(nums)]);

  return sortedNums[sortedNums.length > 2 ? 2 : 0];
};

// without sorting
const thirdMax3 = function (nums) {
  let first = null;
  let second = null;
  let third = null;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === first || nums[i] === second || nums[i] === third) continue;
    if (first === null || nums[i] > first) {
      third = second;
      second = first;
      first = nums[i];
    } else if (second === null || nums[i] > second) {
      third = second;
      second = nums[i];
    } else if (third === null || nums[i] > third) {
      third = nums[i];
    }
    console.log(`first:${first}`, `second: ${second}`, `third: ${third}`);
  }
  // console.log(first, second, third);
  return third != null ? third : first;
};

const nums = [2, 2, 1, 3, 2, 1, 4];

console.log(thirdMax3(nums));
