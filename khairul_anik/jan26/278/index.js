/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function (isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function (n) {
        let left = 1;
        let right = n;
        let currentBadVersion = 0;

        while (left <= right) {
            const mid = Math.floor((left + right) / 2);
            const isBad = isBadVersion(mid);

            if (isBad) {
                currentBadVersion = mid;
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        }

        return currentBadVersion;
    };
};// Time Complexity: O(log n)
// Space Complexity: O(1)