/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    const romanToIntMap = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    };

    let result = 0;
    const l = s.length;

    for (let i = 0; i < l; i++) {
        const current = romanToIntMap[s[i]];
        const next = romanToIntMap[s[i + 1]];

        if (i < l - 1 && current < next) {
            result -= current;
        } else {
            result += current;
        }
    }

    return result;
};
