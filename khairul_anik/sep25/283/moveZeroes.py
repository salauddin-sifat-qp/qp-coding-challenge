from typing import List

class Solution:
    def moveZeroes(self, nums: List[int]) -> None:
        left = 0
        right = len(nums)-1

        while left <= right:
            if nums[left] == 0:
                nums.pop(left)
                nums.append(0)
                right -= 1
            else:
                left += 1

solution = Solution()
n = [0,0,1]
solution.moveZeroes(n)
print(n)