var maximumProfit = function (prices) {
    if (prices.length > 0) {
        var minValue = prices[0];
        var maxProfit_1 = 0;
        for (var i = 1; i < prices.length; i++) {
            var profit = prices[i] - minValue;
            if (profit > maxProfit_1) {
                maxProfit_1 = profit;
            }
            if (prices[i] < minValue) {
                minValue = prices[i];
            }
        }
        return maxProfit_1;
    }
    return 0;
};
