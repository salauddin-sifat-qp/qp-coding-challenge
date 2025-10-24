var thirdMax = function (nums) {
  let uniqueNums = [];
  for (let i = 0; i < nums.length; i++) {
    let alreadyExists = false;
    for (let j = 0; j < uniqueNums.length; j++) {
      if (nums[i] === uniqueNums[j]) {
        alreadyExists = true;
        break;
      }
    }
    if (!alreadyExists) {
      uniqueNums.push(nums[i]);
    }
  }

  for (let i = 0; i < uniqueNums.length - 1; i++) {
    for (let j = i + 1; j < uniqueNums.length; j++) {
      if (uniqueNums[i] < uniqueNums[j]) {
        let temp = uniqueNums[i];
        uniqueNums[i] = uniqueNums[j];
        uniqueNums[j] = temp;
      }
    }
  }

  if (uniqueNums.length >= 3) {
    return uniqueNums[2];
  } else {
    return uniqueNums[0];
  }
};
