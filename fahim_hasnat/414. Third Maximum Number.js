/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function(nums) {
    nums.sort((a, b) => b - a); // Sort in descending order

    let distinctCount = 1;
    let last = nums[0];

    for (let i = 1; i < nums.length; i++) {
        if (nums[i] !== last) {
            distinctCount++;
            last = nums[i];
        }
        if (distinctCount === 3) {
            return nums[i];
        }
    }

    return nums[0];
};
