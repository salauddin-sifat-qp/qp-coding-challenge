package main

import (
	"fmt"
	"math"
)

func main() {
	res := findNumbers([]int{12, 345, 2, 6, 7896})
	fmt.Println(res)
}

// 1295. Find Numbers with even digits
func findNumbers(nums []int) int {
	n := 0
	for _, val := range nums {
		size := int(math.Floor(math.Log10(float64(val))) + 1)
		if size%2 == 0 {
			n++
		}
	}
	return n
}
