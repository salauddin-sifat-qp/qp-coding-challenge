const countEvenNumberOfDigits = (array) => {
  let numDigits = 0;
  for (let i = 0; i < array.length; i++) {
    let count = 0;
    while (array[i] > 0) {
      array[i] = Math.floor(array[i] / 10);
      count += 1;
    }
    if (count % 2 === 0) {
      numDigits += 1;
    }
  }
  return numDigits;
};

const array = [123, 4567, 1, 33, 2];
const result = countEvenNumberOfDigits(array);
console.log(result);
