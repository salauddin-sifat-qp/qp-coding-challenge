const binarySearch = (arr, target) => {
  let left = 0;
  let right = arr.length - 1;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (arr[mid] === target) {
      return mid;
    } else if (arr[mid] > target) {
      right = mid - 1;
    } else left = mid + 1;
  }
  return -1;
};

const arr = [-2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const target = 17;
console.log(binarySearch(arr, target));
