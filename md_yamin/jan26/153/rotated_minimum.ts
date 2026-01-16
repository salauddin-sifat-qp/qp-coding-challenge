function findMin(nums: number[]): number {
    let low = 0, high = nums.length - 1;
    if(nums[low] > nums[high]) {
        while(low < high) {
            let mid = Math.floor((high - low) / 2) + low;
            // console.log(low, high, mid);
            if(nums[mid] > nums[high]) {
                low = mid + 1;
            } else {
                high = mid;
            }
        }
        return nums[low];
    } else {
        return nums[0];
    }

};