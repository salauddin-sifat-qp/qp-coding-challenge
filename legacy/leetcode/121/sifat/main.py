class Solution:
    def maxProfit(self, prices: List[int]) -> int:
        max = 0
        buy = prices[0]
        for p in prices:
            if p < buy:
                buy = p
            if p - buy > max:
                max = p - buy
        return max
