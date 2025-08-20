package main

func maxProfit(prices []int) int {
	buy := prices[0]
	max := 0
	for i := 1; i < len(prices); i++ {
		p := prices[i]
		if p < buy {
			buy = p
		}
		if p-buy > max {
			max = p - buy
		}
	}
	return max
}
