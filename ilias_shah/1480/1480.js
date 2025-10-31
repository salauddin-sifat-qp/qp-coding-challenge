function runningSum(nums) {
    var newArr = [nums[0]];
    for (var i = 1; i < nums.length; i++) {
        newArr.push(newArr[i - 1] + nums[i]);
    }
    return newArr;
}
