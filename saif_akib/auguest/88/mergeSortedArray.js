// TC: O(m+n)
// MC: O(1)
var merge = function(nums1, m, nums2, n) {
    let i = (m + n) - 1;
    let L = m - 1;
    let R = n - 1;

    while(L >= 0 && R >= 0) {
        if(nums1[L] <= nums2[R]) {
            nums1[i] = nums2[R];
            R--;
        } else {
            nums1[i] = nums1[L];
            L--;
        }
        i--;
    }
    while(R >= 0) {
        nums1[i] = nums2[R];
        R--;
        i--;
    }
    return nums1;
};

const arr1 = [1, 2, 3, 0, 0, 0];
const arr2 = [2, 5, 6];
console.log(merge(arr1, 3, arr2, 3));