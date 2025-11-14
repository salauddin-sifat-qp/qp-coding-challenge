// https://leetcode.com/problems/third-maximum-number/

func thirdMax(nums []int) int {
    sort.Sort(sort.Reverse(sort.IntSlice(nums)))

    distinctCount := 1
    last := nums[0]

    for _, n := range nums {
        if n != last {
            distinctCount++
            last = n
        }
        if distinctCount == 3 {
            return n
        }
    }

    return nums[0]
}
