// https://leetcode.com/problems/integer-to-roman/

/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
    const symbols = [
        ["I", "V", "X"],
        ["X", "L", "C"],
        ["C", "D", "M"],
        ["M"]
    ];

    let result = "";
    let position = 0;

    while (num > 0) {
        const digit = num % 10;
        num = Math.floor(num / 10);

        let part = "";
        const current = symbols[position];

        if (position === 3) {
            part = current[0].repeat(digit);
        } else {
            const [one, five, ten] = current;

            if (digit === 9) {
                part = one + ten;
            } else if (digit >= 5) {
                part = five + one.repeat(digit - 5);
            } else if (digit === 4) {
                part = one + five;
            } else {
                part = one.repeat(digit);
            }
        }

        result = part + result;
        position++;
    }

    return result;
};
