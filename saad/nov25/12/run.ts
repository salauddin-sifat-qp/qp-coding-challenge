function intToRoman(num: number): string {
	let result = ''
	let remaining = num

	const thousands = Math.floor(remaining / 1000)
	if (thousands > 0) {
		result += 'M'.repeat(thousands)
		remaining -= thousands * 1000
	}

	const hundreds = Math.floor(remaining / 100)
	if (hundreds > 0) {
		if (hundreds === 9) {
			result += 'CM'
		} else if (hundreds === 4) {
			result += 'CD'
		} else if (hundreds >= 5) {
			result += 'D' + 'C'.repeat(hundreds - 5)
		} else {
			result += 'C'.repeat(hundreds)
		}
		remaining -= hundreds * 100
	}

	const tens = Math.floor(remaining / 10)
	if (tens > 0) {
		if (tens === 9) {
			result += 'XC'
		} else if (tens === 4) {
			result += 'XL'
		} else if (tens >= 5) {
			result += 'L' + 'X'.repeat(tens - 5)
		} else {
			result += 'X'.repeat(tens)
		}
		remaining -= tens * 10
	}

	if (remaining > 0) {
		if (remaining === 9) {
			result += 'IX'
		} else if (remaining === 4) {
			result += 'IV'
		} else if (remaining >= 5) {
			result += 'V' + 'I'.repeat(remaining - 5)
		} else {
			result += 'I'.repeat(remaining)
		}
	}
	return result
}
