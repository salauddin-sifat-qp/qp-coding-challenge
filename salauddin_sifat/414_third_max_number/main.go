package main

import "math"

func ThirdMax(nums []int) int {
	max1, max2, max3 := -math.MaxInt32, -math.MaxInt32, -math.MaxInt32
	seen := make(map[int]bool)

	for _, n := range nums {
		if seen[n] {
			continue
		}
		seen[n] = true

		if n > max1 {
			max3 = max2
			max2 = max1
			max1 = n
		} else if n > max2 {
			max3 = max2
			max2 = n
		} else if n > max3 {
			max3 = n
		}
	}
	if max3 == -1 {
		return max1
	}
	return max3
}
