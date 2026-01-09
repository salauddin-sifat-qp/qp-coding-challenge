package main

import (
	"fmt"
)

func main() {
	fmt.Println(search([]int{-1, 0, 3, 5, 9, 12}, 9)) // Output: 4
}

func search(nums []int, target int) int {
	li := 0
	hi := len(nums) - 1
	mi := (hi + li) / 2
	for li <= hi {
		if nums[mi] == target {
			return mi
		} else if nums[mi] > target {
			hi = mi - 1
		} else {
			li = mi + 1
		}
		mi = (li + hi) / 2
	}
	if nums[mi] == target {
		return mi
	}
	return -1
}
