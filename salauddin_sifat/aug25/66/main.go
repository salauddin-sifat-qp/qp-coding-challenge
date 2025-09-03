package main

import "fmt"

func main() {
	result := plusOne([]int{9, 8, 8})
	fmt.Println(result)
}

func plusOne(nums []int) []int {
	carry := 1
	for i := len(nums) - 1; i >= 0; i-- {
		sum := nums[i] + carry
		nums[i] = sum % 10
		carry = sum / 10
		if carry == 0 {
			break
		}
	}
	if carry == 1 {
		nums = append([]int{1}, nums...)
	}
	return nums
}
