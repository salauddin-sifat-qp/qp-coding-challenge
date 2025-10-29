from typing import List

# Time Complexity: O(n log n) due to sorting.
# Space Complexity: O(n) for storing the unique elements.
class Solution:
    def thirdMax(self, nums: List[int]) -> int:
        n = list(set(nums))
        n.sort()

        if len(n) >= 3:
            return n[-3]
        else:
            return n[-1]

solution = Solution()
n = [2, 2, 3, 1]
print(solution.thirdMax(n)) # 1