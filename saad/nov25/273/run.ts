function numberToWords(num: number): string {
	const ones = ['', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine']
	const teens = [
		'Ten',
		'Eleven',
		'Twelve',
		'Thirteen',
		'Fourteen',
		'Fifteen',
		'Sixteen',
		'Seventeen',
		'Eighteen',
		'Nineteen',
	]
	const tens = ['', 'Ten', 'Twenty', 'Thirty', 'Forty', 'Fifty', 'Sixty', 'Seventy', 'Eighty', 'Ninety']
	const thousands = ['', 'Thousand', 'Million', 'Billion']

	if (num === 0) return 'Zero'

	let result: string[] = []
	let i = 0

	while (num > 0) {
		const threeDigits = num % 1000
		if (threeDigits > 0) {
			let words = ''
			let n = threeDigits

			if (n >= 100) {
				words += ones[Math.floor(n / 100)] + ' Hundred'
				n %= 100
				if (n > 0) words += ' '
			}
			if (n >= 20) {
				words += tens[Math.floor(n / 10)]
				if (n % 10 > 0) {
					words += ' ' + ones[n % 10]
				}
			} else if (n >= 10) {
				words += teens[n - 10]
			} else if (n > 0) {
				words += ones[n]
			}
			if (i > 0) {
				result.unshift(words + ' ' + thousands[i])
			} else {
				result.unshift(words)
			}
		}
		num = Math.floor(num / 1000)
		i++
	}
	return result.join(' ')
}
