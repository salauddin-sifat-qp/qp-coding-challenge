function maxProfit(prices: number[]): number {
  let buy = prices[0];
  let max = 0;
  for (let i = 1; i < prices.length; i++) {
    const p = prices[i];
    if (p < buy) {
      buy = p;
    }
    if (p - buy > max) {
      max = p - buy;
    }
  }
  return max;
}
