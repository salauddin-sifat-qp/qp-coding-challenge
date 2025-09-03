from typing import List

# Time complexity: O(n), Space complexity: O(n)
class Solution:
    def containsNearbyDuplicate(self, nums: List[int], k: int) -> bool:
        hashMap = {}

        for j in range(len(nums)):
            key = nums[j]
            if key in hashMap:
                i = hashMap[key]
                if abs(i-j) <= k:
                    return True
                else:
                    hashMap[key] = j
            else:
                hashMap[key] = j

        return False

solution = Solution()
print(solution.containsNearbyDuplicate([1, 2, 3, 1], 3))  # True
print(solution.containsNearbyDuplicate([1, 0, 1, 1], 1))  # True
print(solution.containsNearbyDuplicate([1, 2, 3, 1, 2, 3], 2))  # False