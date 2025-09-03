from typing import List

# Time Complexity: O(n), Space Complexity: O(1)
class Solution:
    def plusOne(self, digits: List[int]) -> List[int]:
        in_hand = 0
        end = len(digits)-1
        # iterate from the last digit to the first
        for i in range(end, -1, -1):
            num = digits[i] + 1 if i == end else digits[i] + in_hand
            if num == 10:
                digits[i] = 0
                in_hand = 1
            else:
                digits[i] = num
                in_hand = 0
                # no need to iterate further
                break

        if in_hand == 1:
            digits.insert(0,1)

        return digits
    
solution = Solution()
print(solution.plusOne([1, 2, 3]))  # Output: [1, 2, 4]
print(solution.plusOne([9, 9, 9]))  # Output: [1, 0, 0, 0]