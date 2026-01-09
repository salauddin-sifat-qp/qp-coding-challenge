/**
 * @param {number} num
 * @return {string}
 */

const numbers = [1000000000, 1000000, 1000, 100, 90, 80, 70, 60, 50, 40, 30, 20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1]
const words = [
    "Billion", "Million", "Thousand", "Hundred", "Ninety", "Eighty", "Seventy", "Sixty", "Fifty", "Forty", "Thirty", "Twenty", "Nineteen", "Eighteen", "Seventeen", "Sixteen", "Fifteen", "Fourteen", "Thirteen", "Twelve", "Eleven", "Ten", "Nine", "Eight", "Seven", "Six", "Five", "Four", "Three", "Two", "One"
]

var numberToWords = function (num) {
    if (num == 0) return "Zero";

    for (let i = 0; i < numbers.length; i++) {
        if (num >= numbers[i]) {
            let prefix = "";
            if (num >= 100) {
                prefix = numberToWords(Math.floor(num / numbers[i])) + " ";
            }
            let unit = words[i];
            let suffix = (num % numbers[i] == 0) ? "" : " " + numberToWords(num % numbers[i]);
            return prefix + unit + suffix;
        }
    }
    return "";
};

//test cases
console.log(numberToWords(123)); 
console.log(numberToWords(0));