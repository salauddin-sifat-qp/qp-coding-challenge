const bad = 6;
const isBadVersion = function (version) {
  return version >= bad;
};

var solution = function (isBadVersion) {
  /**
   * @param {integer} n Total versions
   * @return {integer} The first bad version
   */
  return function (n) {
    let firstVersion = 1;
    let lastVersion = n;
    while (firstVersion <= lastVersion) {
      let midVersion = Math.floor((firstVersion + lastVersion) / 2);
      if (isBadVersion(midVersion)) {
        lastVersion = midVersion - 1;
      } else {
        firstVersion = midVersion + 1;
      }
    }
    return firstVersion;
  };
};

const firstBadVersion = solution(isBadVersion);

console.log(firstBadVersion(15));
