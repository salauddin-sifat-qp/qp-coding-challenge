/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  let prefix = "";
  let firstWord = strs[0];

  for (let c = 0; c < firstWord.length; c++) {
    for (let word = 0; word < strs.length; word++) {
      // console.log(firstWord[c], strs[word][c]);
      if (firstWord[c] !== strs[word][c]) {
        return prefix;
      }
    }
    prefix = prefix + firstWord[c];
  }
  return prefix;
};
