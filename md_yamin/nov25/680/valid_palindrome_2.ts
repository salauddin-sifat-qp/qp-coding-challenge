function validPalindrome(s: string): boolean {
    let left = 0, right = s.length - 1;
    let count1 = 0, count2 = 0;
    
    while(left < right) {
        if(s[left] != s[right]) {
            left++
            count1++;
            continue;
        }
        left++;
        right--;
    }

    left = 0, right = s.length - 1;

    while(left < right) {
        if(s[left] != s[right]) {
            right--;
            count2++;
            continue;
        }
        left++;
        right--;
    }

    if(count1 <= 1 || count2 <= 1) return true;
    return false;
};