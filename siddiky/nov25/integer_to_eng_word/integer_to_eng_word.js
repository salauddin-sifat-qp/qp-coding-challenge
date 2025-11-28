/**
 * @param {number} num
 * @return {string}
 */
var numberToWords = function(num) {
    if (num === 0) {
        return "Zero";
    }

    const uniqueNames = [
        "", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten",
        "Eleven", "Twelve", "Thirteen", "Fourteen", "Fifteen", "Sixteen", "Seventeen", "Eighteen", "Nineteen"
    ];

    const decadeNames = [
        "", "", "Twenty", "Thirty", "Forty", "Fifty", "Sixty", "Seventy", "Eighty", "Ninety"
    ];

    const magnitudeNames = ["", "Thousand", "Million", "Billion"];

    let wordSegments = [];
    let magnitudeLevel = 0;
    let numberToProcess = num;

    while (numberToProcess > 0) {
        let tripletValue = numberToProcess % 1000;
        
        if (tripletValue > 0) {
            let currentTripletWords = [];
            
            if (tripletValue >= 100) {
                currentTripletWords.push(uniqueNames[Math.floor(tripletValue / 100)]);
                currentTripletWords.push("Hundred");
                tripletValue %= 100;
            }

            if (tripletValue >= 20) {
                currentTripletWords.push(decadeNames[Math.floor(tripletValue / 10)]);
                tripletValue %= 10;
            }

            if (tripletValue > 0) {
                currentTripletWords.push(uniqueNames[tripletValue]);
            }
            
            let tripletString = currentTripletWords.join(" ");
            let magnitudeWord = magnitudeNames[magnitudeLevel];
            
            if (magnitudeWord) {
                tripletString += " " + magnitudeWord;
            }
            
            wordSegments.unshift(tripletString);
        }

        numberToProcess = Math.floor(numberToProcess / 1000);
        magnitudeLevel++;
    }

    return wordSegments.join(" ");
};