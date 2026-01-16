/**
 * The isBadVersion API is defined in the parent class.
 * func isBadVersion(version int) bool
 */

func firstBadVersion(n int) int {
	left := 1
	right := n

	memo := make(map[int]bool)

	getFromMapOrAPICall := func(version int) bool {
		if val, ok := memo[version]; ok {
			return val
		}
		result := isBadVersion(version)
		memo[version] = result
		return result
	}

	for {
		mid := left + ((right - left) >> 1)
		isMidBad := getFromMapOrAPICall(mid)

		if isMidBad {
			isMidLeftBad := getFromMapOrAPICall(mid - 1)

			if isMidLeftBad {
				right = mid - 1
			} else {
				return mid
			}
		} else {
			left = mid + 1
		}
	}
}