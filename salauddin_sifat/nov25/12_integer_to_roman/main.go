package main

import (
	"fmt"
	"math"
	"strings"
)

func main() {
	fmt.Println(intToRoman(3749))
}

func intToRoman(num int) string {
	itr := map[int16]string{
		1:    "I",
		5:    "V",
		10:   "X",
		50:   "L",
		100:  "C",
		500:  "D",
		1000: "M",
	}
	length := int(math.Floor(math.Log10(float64(num))) + 1)
	result := ""
	for i := length - 1; i >= 0; i-- {
		el := (num / int(math.Pow10(i))) % 10
		if el == 0 {
			continue
		}
		one := itr[int16(math.Pow10(i))]
		five := itr[int16(5*math.Pow10(i))]
		ten := itr[int16(math.Pow10(i+1))]

		switch el {
		case 4:
			result += one + five
		case 9:
			result += one + ten
		default:
			if el >= 5 {
				result += five
			}
			result += strings.Repeat(one, el%5)
		}
	}
	return result
}
