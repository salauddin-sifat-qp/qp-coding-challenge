const longestCommonPrefix = (strs) => {
  let firstStr = strs[0];
  let logestPrefix = "";
  for (let i = 0; i < firstStr.length; i++) {
    let flag = true;
    for (let j = 1; j < strs.length; j++) {
      if (strs[j][i] !== firstStr[i]) {
        flag = false;
        break;
      }
    }

    if (flag) {
      logestPrefix += firstStr[i];
    } else {
      break;
    }
  }
  return logestPrefix;
};

const strs = ["flower", "flow", "flight", "flower", "flight"];
const res = longestCommonPrefix(strs);
console.log(res);
