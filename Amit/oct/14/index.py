def romanToInt(self, s: str) -> int:
        roman_numerals={
        "I": 1,
        "V": 5,
        "X": 10,
        "L": 50,
        "C": 100,
        "D": 500,
        "M": 1000
        }

        sum = 0
        prev_value = 0

        for i in reversed(range(len(s))):
            current_value = roman_numerals[s[i]]
            if current_value < prev_value:
                sum -= current_value
            else:
                sum += current_value
            prev_value = current_value
        return sum