/**
 * @param {number[]} nums
 * @return {boolean}
 */
// 9ms
var containsDuplicate = function (nums) {
  let set = new Set([...nums]);
  return set.size !== nums.length;
};

// 16ms
var containsDuplicate2 = function (nums) {
  let map = new Map();
  for (let item of nums) {
    if (map.has(item)) {
      return true;
    }
    map.set(item, item);
  }
  return false;
};
// 44ms

var containsDuplicate3 = function (nums) {
  let obj = {};

  for (let item of nums) {
    obj[`${item}`] = item;
  }
  return Object.keys(obj).length !== nums.length;
};

console.log(containsDuplicate([1, 2, 3, 4]));
