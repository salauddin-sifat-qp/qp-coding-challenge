from typing import List

# String Solution (Time Complexity: O(n * d), Space Complexity: O(d))
class Solution_String:
    def findNumbers(self, nums: List[int]) -> int:
        result = 0
        for i in range(len(nums)):
            str_num = str(nums[i])
            is_even = len(str_num) % 2
            if is_even == 0:
                result = result + 1
        
        return result

# Math Solution (Time Complexity: O(n * d), Space Complexity: O(1))
class Solution_Math:
    def totalDigits(self, num: int) -> int:
        digits = 0
        
        while num != 0:
            digit = num // 10
            digits = digits + 1
            num = digit
            
        return digits

    def findNumbers(self, nums: List[int]) -> int:
        result = 0
        for i in range(len(nums)):
            digits_length = self.totalDigits(nums[i])
            if digits_length % 2 == 0:
                result = result + 1
        
        return result

solution_math = Solution_Math()
print(solution_math.findNumbers([12, 345, 2, 6, 7896]))  # Example usage

solution_string = Solution_String()
print(solution_string.findNumbers([12, 345, 2, 6, 7896]))  # Example usage