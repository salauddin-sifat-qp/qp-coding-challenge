var longestCommonPrefix = function(strs) {
    let prefix = "";
    let firstWord = strs[0];
    let index = 0;

    while (index < firstWord.length) {
        for (let i = 1; i < strs.length; i++) {
            if (index >= strs[i].length || strs[i][index] !== firstWord[index]) return prefix;
        }
        prefix += firstWord[index];
        index++;
    }
    return prefix;
};