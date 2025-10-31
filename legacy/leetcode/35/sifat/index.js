function searchInsert(nums, target) {
    var pos = 0;
    for (var i = 0; i < nums.length; i++) {
        if (nums[i] >= target) {
            pos = i;
            break;
        }
        pos = nums.length;
    }
    return pos;
}
;
