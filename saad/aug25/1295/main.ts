function findNumbers(nums: number[]): number {
	let bucket = 0
	for (const n of nums) {
		if (haveEvenDigit(n)) bucket++
	}
	return bucket
}
function haveEvenDigit(n: number): boolean {
	const digits = Math.abs(n).toString().length
	return digits % 2 === 0
}
console.log(findNumbers([12, 345, 2, 6, 7896]))
