function maxProfit(prices) {
    var buy = prices[0];
    var max = 0;
    for (var i = 1; i < prices.length; i++) {
        var p = prices[i];
        if (p < buy) {
            buy = p;
        }
        if (p - buy > max) {
            max = p - buy;
        }
    }
    return max;
}
