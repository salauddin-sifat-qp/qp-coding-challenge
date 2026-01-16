/**
 * Definition for isBadVersion()
 *
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */

let isBadVersion = (verNum) => {
  return verNum >= 4;
};

let n = 8;

var solution = function (isBadVersion) {
  /**
   * @param {integer} n Total versions
   * @return {integer} The first bad version
   */

  return function (n) {
    let low = 1;
    let high = n;
    while (low < high) {
      let mid = Math.floor(low + (high - low) / 2);
      console.log(`low: ${low}, mid: ${mid}, high:${high}`);
      if (isBadVersion(mid)) {
        high = mid;
      } else {
        low = mid + 1;
      }
    }
    console.log(`low: ${low},  high:${high}`);
    return low;
  };
};

console.log(solution(isBadVersion)(n));
