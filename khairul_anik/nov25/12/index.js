const collection = [
    [1, 'I'],
    [2, 'II'],
    [3, 'III'],
    [4, 'IV'],
    [5, 'V'],
    [6, 'VI'],
    [7, 'VII'],
    [8, 'VIII'],
    [9, 'IX'],
    [10, 'X'],
    [20, 'XX'],
    [30, 'XXX'],
    [40, 'XL'],
    [50, 'L'],
    [60, 'LX'],
    [70, 'LXX'],
    [80, 'LXXX'],
    [90, 'XC'],
    [100, 'C'],
    [200, 'CC'],
    [300, 'CCC'],
    [400, 'CD'],
    [500, 'D'],
    [600, 'DC'],
    [700, 'DCC'],
    [800, 'DCCC'],
    [900, 'CM'],
    [1000, 'M'],
    [2000, 'MM'],
    [3000, 'MMM']
];
const collectionMap = new Map(collection);

function findMagnitude(num) {
    if (num >= 1000) return 1000;
    if (num >= 100) return 100;
    if (num >= 10) return 10;
    return 1;
}

function getParts(num) {
    let parts = [];
    let remainingNum = num;

    while (remainingNum > 0) {
        const magnitude = findMagnitude(remainingNum);
        const digit = Math.floor(remainingNum / magnitude);
        const part = digit * magnitude;

        parts.push(part);

        remainingNum = remainingNum % magnitude;
    }

    return parts;
}

function intToRoman(num) {
    const parts = getParts(num);
    const result = parts.map(part => collectionMap.get(part));
    return result.join('');
}

console.log(intToRoman(1994)); // Output: "MCMXCIV"