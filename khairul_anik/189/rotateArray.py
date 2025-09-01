from typing import List

# Time Complexity: O(n*k), Space Complexity: O(1)
class NaiveSolution:
    def rotate(self, nums: List[int], k: int) -> None:
        for i in range(k):
            last = nums.pop()
            nums.insert(0, last)

# Time Complexity: O(n), Space Complexity: O(1)
class Solution:
    # in place reverse with two pointers
    def reverse(self, nums: List[int], left: int, right: int) -> None:
        while left < right:
            nums[left], nums[right] = nums[right], nums[left]
            left += 1
            right -= 1
    # nums = [1,2,3,4,5,6,7], k = 3
    def rotate(self, nums: List[int], k: int) -> None:
        n = len(nums)
        k = k % n # handle cases where k >= n
        self.reverse(nums, 0, n - 1) # [7,6,5,4,3,2,1]
        self.reverse(nums, 0, k - 1) # [5,6,7,4,3,2,1]
        self.reverse(nums, k, n - 1) # [5,6,7,1,2,3,4]