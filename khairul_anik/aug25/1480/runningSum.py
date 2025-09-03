from typing import List

# Time complexity: O(n), Space complexity: O(n)
class Solution:
    def runningSum(self, nums: List[int]) -> List[int]:
        last_added = nums[0]
        result = [last_added]

        for i in range(1, len(nums)):
            new = last_added + nums[i]
            result.append(new)
            last_added = new

        return result

solution = Solution()
print(solution.runningSum([1, 2, 3, 4]))  # Output: [1, 3, 6, 10]