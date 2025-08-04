function maxProfit(prices: number[]): number {
    let currentProfit: number = 0;
    let maxProfit: number = 0;
    let minPrice: number = prices[0];

    for (const price of prices) {
        currentProfit = price - minPrice;
        maxProfit = currentProfit > maxProfit ? currentProfit : maxProfit;
        minPrice = price < minPrice ? price : minPrice;
    }

    return maxProfit;
};