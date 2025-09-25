from typing import List

# Time Complexity: O(n + m)) where n and m are the lengths of nums1 and nums2.
# Space Complexity: O(n + m) for storing the sets.
class Solution:
    # HashSet
    def intersection(self, nums1: List[int], nums2: List[int]) -> List[int]:
        return list(set(nums1) & set(nums2))
    
# Time 
# Time Complexity: O(n log n + m log m), where n and m are the lengths of nums1 and nums2 (due to sorting).
# Space Complexity: O(1) if we ignore the output list/set, otherwise O(k) for the result set (where k is the number of unique intersections).
class Solution2:
    # Two Pointers
    def intersection(self, nums1: List[int], nums2: List[int]) -> List[int]:
        nums1.sort()
        nums2.sort()
        i, j = 0, 0
        result = set()
        
        while i < len(nums1) and j < len(nums2):
            if nums1[i] < nums2[j]:
                i += 1
            elif nums1[i] > nums2[j]:
                j += 1
            else:
                result.add(nums1[i])
                i += 1
                j += 1
        
        return list(result)

solution = Solution()
n1 = [1,2,2,1]
n2 = [2,2]
print(solution.intersection(n1, n2)) # [2]