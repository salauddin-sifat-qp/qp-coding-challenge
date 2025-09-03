from typing import List

# Time Complexity: O(n), Space Complexity: O(1)
class Solution:
    def summaryRanges(self, nums: List[int]) -> List[str]:
        n = len(nums)
        if n == 0:
            return []
        start = nums[0]
        result = []

        for i in range(n):
            if i < n-1:
                out_of_range = nums[i+1] - nums[i] > 1
                if out_of_range:
                    result.append([start,nums[i]])
                    start = nums[i+1]
            else:
                result.append([start,nums[i]])

        for i in range(len(result)):
            if result[i][0] == result[i][1]:
                result[i] = str(result[i][0])
            else:
                result[i] = f"{result[i][0]}->{result[i][1]}"

        return result

solution = Solution()
print(solution.summaryRanges([0, 1, 2, 4, 5, 7]))