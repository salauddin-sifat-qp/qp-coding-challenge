const mergedArray = (nums1, m, nums2, n) => {
  let j = n - 1;
  for (let i = 0; i < m + n; i++) {
    if (j < 0) {
      break;
    }
    if (nums1[i] === 0) {
      nums1[i] = nums2[j];
      j--;
    }
  }

  return nums1.sort((a, b) => a - b);
};

const arr1 = [-1, 0, 0, 3, 3, 3, 0, 0, 0];
const arr2 = [2, 5, 6];
const res2 = mergedArray(arr1, 6, arr2, 3);
console.log(res2);
