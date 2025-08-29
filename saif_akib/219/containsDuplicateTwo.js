// TC: O(n)
// MC: O(n)
var containsNearbyDuplicate = function(nums, k) {
    let map = {};
    for(let i = 0; i < nums.length; i++) {
        if(map[nums[i]] !== undefined) {
            let dis = i - map[nums[i]];
            if(dis <= k) return true
        }
        map[nums[i]] = i;
    }
    return false
};

const arr = [1,2,3,1,2,3];
const k = 2;
console.log(containsNearbyDuplicate(arr, k));