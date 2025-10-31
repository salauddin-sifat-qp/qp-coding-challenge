// https://leetcode.com/problems/roman-to-integer/
func romanToInt(s string) int {
	romanToIntMap := map[byte]int{
		'I': 1,
		'V': 5,
		'X': 10,
		'L': 50,
		'C': 100,
		'D': 500,
		'M': 1000,
	}

	result := 0
	l := len(s)

	for index := 0; index < l; index++ {
		mappedInteger := romanToIntMap[s[index]]
		if index < l-1 && mappedInteger < romanToIntMap[s[index+1]] {
			result -= mappedInteger
		} else {
			result += mappedInteger
		}
	}

	return result
}
