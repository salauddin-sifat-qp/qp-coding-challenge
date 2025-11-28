package main

import "fmt"

func main() {
	s := []byte{'h', 'e', 'l', 'l', 'o'}
	reverseString(s)
	fmt.Println(string(s))
}

func reverseString(s []byte) {
	l := len(s) - 1
	for i := 0; i <= l/2+1; i++ {
		temp := s[i]
		s[i] = s[l-i]
		s[l-i] = temp
	}
}
