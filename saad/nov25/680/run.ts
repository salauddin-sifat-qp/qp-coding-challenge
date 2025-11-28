function validPalindrome(s: string): boolean {
	let left = 0
	let right = s.length - 1

	while (left < right) {
		if (s[left] !== s[right]) {
			let leftIndex = left + 1
			let rightIndex = right
			while (leftIndex < rightIndex && s[leftIndex] === s[rightIndex]) {
				leftIndex++
				rightIndex--
			}
			if (leftIndex >= rightIndex) return true
			leftIndex = left
			rightIndex = right - 1
			while (leftIndex < rightIndex && s[leftIndex] === s[rightIndex]) {
				leftIndex++
				rightIndex--
			}
			return leftIndex >= rightIndex
		}
		left++
		right--
	}
	return true
}
