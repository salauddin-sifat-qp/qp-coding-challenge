function thirdMax(nums: number[]): number {
	const number: number[] = []
	for (let i = 0; i < nums.length; i++) {
		if (!number.includes(nums[i])) {
			number.push(nums[i])
		}
	}
	number.sort((a, b) => b - a)
	if (number.length < 3) {
		return number[0]
	}
	return number[2]
}
