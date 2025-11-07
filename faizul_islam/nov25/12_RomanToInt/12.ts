function intToRoman(num: number): string {
  const maps: { key: number; value: string }[] = [
    { key: 1000, value: "M" },
    { key: 900, value: "CM" },
    { key: 500, value: "D" },
    { key: 400, value: "CD" },
    { key: 100, value: "C" },
    { key: 90, value: "XC" },
    { key: 50, value: "L" },
    { key: 40, value: "XL" },
    { key: 10, value: "X" },
    { key: 9, value: "IX" },
    { key: 5, value: "V" },
    { key: 4, value: "IV" },
    { key: 1, value: "I" },
  ];

  let romanNumeral = "";
  for (let i = 0; i < maps.length; i++) {
    while (num >= maps[i].key) {
      romanNumeral += maps[i].value;
      num -= maps[i].key;
    }
  }
  return romanNumeral;
}
