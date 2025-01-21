function searchInsert(nums: number[], target: number): number {
    let pos = 0
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] >= target) {
            pos = i
            break
        }
        pos = nums.length
    }
    return pos
};