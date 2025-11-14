package main

import (
	"fmt"
	"math"
	"regexp"
)

func main() {
	fmt.Println(numberToWords(1234))
}

var NUM_TO_WORD = map[int]string{
	1:  "One",
	2:  "Two",
	3:  "Three",
	4:  "Four",
	5:  "Five",
	6:  "Six",
	7:  "Seven",
	8:  "Eight",
	9:  "Nine",
	10: "Ten",
	11: "Eleven",
	12: "Twelve",
	13: "Thirteen",
	14: "Fourteen",
	15: "Fifteen",
	16: "Sixteen",
	17: "Seventeen",
	18: "Eighteen",
	19: "Nineteen",
	20: "Twenty",
	30: "Thirty",
	40: "Forty",
	50: "Fifty",
	60: "Sixty",
	70: "Seventy",
	80: "Eighty",
	90: "Ninety",
}

var decMap = map[int]string{
	0: "",
	1: "Thousand",
	2: "Million",
	3: "Billion",
	4: "Trillion",
}

func numberToWords(num int) string {
	if num == 0 {
		return "Zero"
	}
	result := ""
	index := 0
	for num > 0 {
		n := int(math.Mod(float64(num), 1000))
		x := base(n)
		if x != "" {
			result = x + decMap[index] + result
		} else {
			result = x + result
		}
		num /= 1000
		fmt.Println(num)
		index++
	}
	re := regexp.MustCompile("([a-z])([A-Z])")

	return re.ReplaceAllString(result, "$1 $2")
}
func base(n int) string {
	if n == 0 {
		return ""
	}
	if n <= 20 {
		return NUM_TO_WORD[n]
	}
	ones := int(math.Mod(float64(n), 10))
	tens := int(math.Mod(math.Floor(float64(n/10)), 10))
	if n <= 99 {
		return NUM_TO_WORD[tens*10] + NUM_TO_WORD[ones]
	}

	hundreds := int(math.Mod(math.Floor(float64(n/100)), 10))
	remainder := int(math.Mod(float64(n), 100))
	return NUM_TO_WORD[hundreds] + "Hundred" + base(remainder)
}
