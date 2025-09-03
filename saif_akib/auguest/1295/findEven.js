//TC: O(n)
//MC: O(1)
var findNumbers = function(nums) {
    let count = 0;
    nums.forEach((num) => {
        let length = num.toString().split("").length;
        if(length % 2 == 0) count++; 
    })
    return count;
};

const arr = [12, 345, 2, 6, 7896];
console.log(findNumbers(arr));