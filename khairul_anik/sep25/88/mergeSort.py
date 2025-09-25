from typing import List

class Solution:
    def merge(self, nums1: List[int], m: int, nums2: List[int], n: int) -> None:
      left = 0
      right = 0

      while left < m+n:
        if nums2[right] >= nums1[left]:
          nums1.insert(left+1, nums2[right])
          right += 1
          left += 2
        else:
          left += 1

solution = Solution()
n1 = [1,2,3,0,0,0]
n2 = [2,5,6]
solution.merge(n1, 3, n2, 3)
print(n1)