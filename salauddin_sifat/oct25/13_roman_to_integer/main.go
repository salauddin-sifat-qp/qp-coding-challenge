package main

import "fmt"

var romanValues = map[byte]int{
	'I': 1,
	'V': 5,
	'X': 10,
	'L': 50,
	'C': 100,
	'D': 500,
	'M': 1000,
}

func romanToInt(s string) int {
	res := 0
	length := len(s)

	for i := range length {
		currentVal := romanValues[s[i]]
		res += currentVal

		if i > 0 && currentVal > romanValues[s[i-1]] {
			res -= 2 * romanValues[s[i-1]]
		}
	}
	return res
}

func main() {
	fmt.Printf("III = %d\n", romanToInt("III"))         // 3
	fmt.Printf("IV = %d\n", romanToInt("IV"))           // 4
	fmt.Printf("IX = %d\n", romanToInt("IX"))           // 9
	fmt.Printf("LVIII = %d\n", romanToInt("LVIII"))     // 58
	fmt.Printf("MCMXCIV = %d\n", romanToInt("MCMXCIV")) // 1994
}
