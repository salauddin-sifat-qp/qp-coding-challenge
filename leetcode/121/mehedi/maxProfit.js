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
