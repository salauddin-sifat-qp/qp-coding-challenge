/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

// TC: O(log n)
// SC: O(1)

const midIndex = (left, right) => {
    return left + Math.floor((right - left) / 2);
}
var search = function(nums, target) {
    let left = 0;
    let right = nums.length - 1;
    mid = midIndex(left, right);

    while(left <= right) {
        if(nums[mid] > target) {
            right = mid - 1;
            mid = midIndex(left, right);
        }
        else if(nums[mid] < target) {
            left = mid + 1;
            mid = midIndex(left, right);
        }
        else {
            return mid;
        }
    }
    return -1;
};