/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function(n) {
        let left = 1;
        let right = n;
        
        while (left < right) {
            // Use left + Math.floor((right - left) / 2) to avoid integer overflow
            let mid = left + Math.floor((right - left) / 2);
            
            if (isBadVersion(mid)) {
                // If mid is bad, the first bad version is at mid or before
                right = mid;
            } else {
                // If mid is good, the first bad version is after mid
                left = mid + 1;
            }
        }
        
        // When left == right, we've found the first bad version
        return left;
    };
};
