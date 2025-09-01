// TC: O(N)
// MC: O(1)
var plusOne = function(digits) {
    for(i=digits.length-1; i >= 0; i--) {
        if(digits[i] < 9) {
            digits[i] += 1
            return digits
        }
        else {
            digits[i] = 0
            if(i === 0) digits.unshift(1)
        }
    }
    return digits
};

const arr = [1, 2, 3];
console.log(plusOne(arr)); // Output: [1, 2, 4]