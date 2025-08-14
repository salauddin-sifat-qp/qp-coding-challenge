//TC: O(n)
//MC: O(n)
var runningSum = function(nums) {
    const output = new Array(nums.length);;
    let sum = 0;
    nums.forEach((num, i) => {
        sum += nums[i];
        output[i] = sum;
    });
    return output;
};
const arr = [1, 2, 3, 4];
console.log(runningSum(arr));