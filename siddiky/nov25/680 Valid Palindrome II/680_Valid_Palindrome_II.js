/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function(s) {
    let left = 0;
    let right = s.length - 1;

    while (left < right) {
        
        if (s[left] === s[right]) {
            left++;
            right--;
        } 
        
        else {            
            return checkPalindrome(s, left + 1, right) || checkPalindrome(s, left, right - 1);
        }
    }
    return true;
};

function checkPalindrome(str, start, end) {
    while (start < end) {
        if (str[start] !== str[end]) {
            return false;
        }
        start++;
        end--;
    }
    return true;
}