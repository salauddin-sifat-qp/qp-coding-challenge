/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let buyPriceIndex = 0;
  let maxProfit = 0;
  for (let index = 0; index < prices.length; index++) {
    let profit = prices[index] - prices[buyPriceIndex];
    maxProfit = maxProfit < profit ? profit : maxProfit;
    buyPriceIndex =
      prices[buyPriceIndex] > prices[index] ? index : buyPriceIndex;
  }
  return maxProfit;
};

const arrayOfPrices = [
  { prices: [7, 6, 4, 3, 1], maxProfit: 0 },
  { prices: [2, 4, 1], maxProfit: 2 },
  { prices: [7, 1, 5, 3, 6, 4], maxProfit: 5 },
];
function test(testDataArray, func) {
  testDataArray.forEach((v) => {
    const testValue = func(v.prices);
    console.log(
      "maxProfit:",
      testValue,
      `test passed: ${testValue === v.maxProfit})`
    );
  });
}

test(arrayOfPrices, maxProfit);
