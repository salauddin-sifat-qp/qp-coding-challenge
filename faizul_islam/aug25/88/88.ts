function merge(nums1: number[], m: number, nums2: number[], n: number): void {
  for (let moveIndex = m + n - 1, i = m - 1; i >= 0; i -= 1, moveIndex -= 1) {
    nums1[moveIndex] = nums1[i];
  }

  let i = n;
  let length1 = m + n;
  let j = 0;
  let length2 = n;
  let index = 0;

  while (i < length1 || j < length2) {
    if (i < length1 && j < length2) {
      if (nums1[i] < nums2[j]) {
        nums1[index++] = nums1[i++];
      } else {
        nums1[index++] = nums2[j++];
      }
    } else if (i < length1) {
      nums1[index++] = nums1[i++];
    } else if (j < length2) {
      nums1[index++] = nums2[j++];
    }
  }
}
