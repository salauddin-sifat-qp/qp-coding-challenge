package main

import "fmt"

func main() {
	result := containsNearbyDuplicate([]int{1, 2, 3, 1, 2, 3}, 2)
	fmt.Println(result)
}

func containsNearbyDuplicate(nums []int, k int) bool {
	memo := make(map[int]int)
	for i, v := range nums {
		if p, ok := memo[v]; ok && i-p <= k {
			return true
		}
		memo[v] = i
	}
	return false
}
