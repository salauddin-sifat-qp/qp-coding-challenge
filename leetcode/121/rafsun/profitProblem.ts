var maximumProfit = function(prices) {
    if (prices.length > 0) {
        let minValue = prices[0];
        let maxProfit = 1;
        for (let i = 1; i < prices.length; i++) {
            let profit = prices[i] - minValue;
            if (profit > maxProfit) {
                maxProfit = profit; 
            }
            if (prices[i] < minValue) {
                minValue = prices[i];
            }
        }

        return maxProfit;
    }
    return 0;
};