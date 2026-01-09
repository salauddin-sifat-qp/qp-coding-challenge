var validPalindrome = function (s) {
  let sentance = s.toLowerCase().replace(/[^a-z0-9]/g, "");

  let left = 0;
  let right = sentance.length - 1;
  let lefSide = "";
  let rightSide = "";
  while (left < right) {
    lefSide += sentance[left];
    rightSide += sentance[right];

    left++;
    right--;
  }

  console.log(lefSide, rightSide);

  return lefSide === rightSide;
};

console.log(validPalindrome("aBvaavBa"));
