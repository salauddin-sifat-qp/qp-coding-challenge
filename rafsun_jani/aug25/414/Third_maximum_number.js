var thirdMax = function (nums) {
  let uniqueNums = Array.from(new Set(nums));

  uniqueNums.sort((a, b) => b - a);

  if (uniqueNums.length >= 3) {
    return uniqueNums[2];
  }

  return uniqueNums[0];
};
