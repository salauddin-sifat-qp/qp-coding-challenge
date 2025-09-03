function runningSum(nums: number[]): number[] {
	const result: number[] = new Array(nums.length)
	let sum = 0
	for (let i = 0; i < nums.length; i++) {
		sum += nums[i]
		result[i] = sum
	}
	return result
}

console.log(runningSum([1, 2, 3, 4]))
