function romanToInt(s) {
  const romanNumerals = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let sum = 0;
  let prevValue = 0;

  // Loop through string from right to left
  for (let i = s.length - 1; i >= 0; i--) {
    const currentValue = romanNumerals[s[i]];
    if (currentValue < prevValue) {
      sum -= currentValue;
    } else {
      sum += currentValue;
    }
    prevValue = currentValue;
  }

  return sum;
}
