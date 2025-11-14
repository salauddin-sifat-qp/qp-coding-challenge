function findNumbers(nums) {
    var count = 0;
    nums.forEach(function (num) {
        if (num.toString().length % 2 === 0) {
            count++;
        }
    });
    return count;
}
