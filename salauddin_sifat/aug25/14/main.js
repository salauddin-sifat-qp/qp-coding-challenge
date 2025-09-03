/**
 * 14. Longest Common Prefix
 */

/**
 * @param {string[]} strs
 * @return {string}
 */
let longestCommonPrefix = function (strs) {
  return strs[0].charCodeAt(0) ^ strs[1].charCodeAt(0);
};

console.log(longestCommonPrefix(["flower", "flow", "flight"])); // "fl"
