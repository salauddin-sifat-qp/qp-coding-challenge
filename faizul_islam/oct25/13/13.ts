function romanToInt(s: string): number {
  const romanMap: Map<string, number> = new Map([
    ["I", 1],
    ["V", 5],
    ["X", 10],
    ["L", 50],
    ["C", 100],
    ["D", 500],
    ["M", 1000],
  ]);

  let length = s.length - 1;
  let total: number = romanMap.get(s[length]) || 0;

  for (let index = length - 1; index >= 0; index--) {
    const current = romanMap.get(s[index]) || 0;
    const next = romanMap.get(s[index + 1]) || 0;

    if (current < next) {
      total -= current;
    } else {
      total += current;
    }
  }

  return total;
}
