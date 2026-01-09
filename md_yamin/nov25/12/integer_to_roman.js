/**
 * @param {number} num
 * @return {string}
 */

const subtractiveForm = {
    4: "IV",
    9: "IX",
    40: "XL",
    90: "XC",
    400: "CD",
    900: "CM"
}

const romanToIntegerMap = {
    1: "I",
    5: "V",
    10: "X",
    50: "L",
    100: "C",
    500: "D",
    1000: "M"
}

var intToRoman = function(num) {
    let ans = '';

    while(num !== 0) {
        if(num.toString()[0] === '4' || num.toString()[0] === '9') {
            if(num - 900 >= 0) {
                num -= 900;
                ans += subtractiveForm[900];
            } else if (num - 400 >= 0) {
                num -= 400;
                ans += subtractiveForm[400];
            } else if (num - 90 >= 0) {
                num -= 90;
                ans += subtractiveForm[90];
            } else if (num - 40 >= 0) {
                num -= 40;
                ans += subtractiveForm[40];
            } else if (num - 9 >= 0) {
                num -= 9;
                ans += subtractiveForm[9]
            } else if (num - 4 >= 0) {
                num -= 4;
                ans += subtractiveForm[4]
            }
        } else if (num - 1000 >= 0) {
            num -= 1000;
            ans += romanToIntegerMap[1000];
        } else if (num - 500 >= 0) {
            num -= 500;
            ans += romanToIntegerMap[500];
        } else if (num - 100 >= 0) {
            num -= 100;
            ans += romanToIntegerMap[100];
        } else if (num - 50 >= 0) {
            num -= 50;
            ans += romanToIntegerMap[50];
        } else if (num - 10 >= 0) {
            num -= 10;
            ans += romanToIntegerMap[10];
        } else if (num - 5 >= 0) {
            num -= 5;
            ans += romanToIntegerMap[5];
        } else if (num - 1 >= 0) {
            num -= 1;
            ans += romanToIntegerMap[1];
        }
    }

    return ans;
};