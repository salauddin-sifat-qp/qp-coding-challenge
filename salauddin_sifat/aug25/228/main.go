package main

import "fmt"

func main() {
	result := summaryRanges([]int{0, 2, 3, 4, 6, 8, 9})
	fmt.Println(result)
}

// 228: Summary Ranges
func summaryRanges(nums []int) []string {
	result := []string{}
	if len(nums) == 0 {
		return result
	}

	start := nums[0]
	for idx := 1; idx <= len(nums); idx++ {
		if idx == len(nums) || nums[idx] != nums[idx-1]+1 {
			if start == nums[idx-1] {
				result = append(result, fmt.Sprintf("%d", start))
			} else {
				result = append(result, fmt.Sprintf("%d->%d", start, nums[idx-1]))
			}
			if idx < len(nums) {
				start = nums[idx]
			}
		}
	}
	return result
}
