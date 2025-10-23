/**
 * @param {number[]} nums
 * @return {number}
 */

var thirdMax = function(nums) {
    let firstMax, secondMax, thirdMax;
    firstMax = secondMax = thirdMax = Number.MIN_SAFE_INTEGER;

    for (let num of nums) {
        if (num > firstMax) {
            thirdMax = secondMax;
            secondMax = firstMax;
            firstMax = num;
        } else if (num > secondMax && num < firstMax) {
            thirdMax = secondMax;
            secondMax = num;
        } else if (num > thirdMax && num < secondMax) {
            thirdMax = num;
        }
    }

    return thirdMax === Number.MIN_SAFE_INTEGER ? firstMax : thirdMax;
};