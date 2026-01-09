function maxProfit(prices) {
    var currentProfit = 0;
    var maxProfit = 0;
    var minPrice = prices[0];
    for (var _i = 0, prices_1 = prices; _i < prices_1.length; _i++) {
        var price = prices_1[_i];
        currentProfit = price - minPrice;
        maxProfit = currentProfit > maxProfit ? currentProfit : maxProfit;
        minPrice = price < minPrice ? price : minPrice;
    }
    return maxProfit;
}
;
