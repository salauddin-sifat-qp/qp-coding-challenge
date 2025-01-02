/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert_initialSolution = function (nums, target) {
  /**
   * if the target is greater than the last element of the nums array,
   * than we should insert the target after the last index.
   */
  if (nums[nums.length - 1] < target) return nums.length;

  /**
   * Now we loop through to find the target
   */
  for (let i = 0; i < nums.length; i++) {
    /**
     * if the target is equal or smaller
     * than the current number in the index, we return the index.
     */
    if (target === nums[i] || target < nums[i]) {
      return i;
    }
  }
};

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
  /**
   *  we loop through to find the target
   */
  for (let i = 0; i < nums.length; i++) {
    /**
     * if the target is equal or smaller
     * than the current number in the index, we return the index.
     */
    if (nums[i] === target || nums[i] > target) {
      return i;
    }
  }
  /**
   * if still not found,
   * than the target must be greater than the last number of the array,
   *  so, the target is suppose to get inserted after the last element of the array, hence we return the array length
   */
  return nums.length;
};

console.log(searchInsert([1, 3, 4, 5, 6], 7));
