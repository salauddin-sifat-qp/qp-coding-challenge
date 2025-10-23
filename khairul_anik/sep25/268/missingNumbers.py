from typing import List

# Time Complexity: O(n log n)
# Space Complexity: O(1)
class Solution:
    def missingNumber(self, nums: List[int]) -> int:
        nums.sort()
        n = len(nums)

        for i in range(n):
            if i != nums[i]:
                return i

        return n

solution = Solution()
n = [3,0,1]
print(solution.missingNumber(n)) # 2