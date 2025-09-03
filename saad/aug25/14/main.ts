function longestCommonPrefix(strs: string[]): string {
	if (strs.length === 0) return ''
	let prefix = strs[0]
	for (let i = 1; i < strs.length; i++) {
		const saad = strs[i]
		while (!saad.startsWith(prefix)) {
			prefix = prefix.slice(0, -1)
			if (prefix === '') return ''
		}
	}
	return prefix
}

console.log(longestCommonPrefix(['flower', 'flow', 'flight']))
