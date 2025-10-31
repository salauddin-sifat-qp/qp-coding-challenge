/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    const romanValues = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    };
    
    let total = 0;
    
    for (let position = 0; position < s.length; position++) {
        const current = romanValues[s[position]];
        const next = romanValues[s[position + 1]];
        
        if (next && current < next) {
            total -= current;
        } else {
            total += current;
        }
    }
    
    return total;
};