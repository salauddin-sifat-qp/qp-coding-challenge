# Roman to Integer - Solution Strategy

## Problem Overview

Convert a Roman numeral string to its integer equivalent, handling the special subtraction cases where smaller numerals appear before larger ones.

## Solution Strategy

### Key Insight: Right-to-Left Traversal

The core strategy is to process the Roman numeral from **right to left** (reverse order). This approach elegantly handles both normal addition and subtraction cases with a simple comparison rule.

### Algorithm Steps

1. **Initialize Mapping**: Create a map of Roman symbols to their integer values
2. **Start from Right**: Begin with the rightmost character and add its value to the total
3. **Compare and Decide**: For each remaining character (right to left):
   - If current value < next value (to the right) → **Subtract** (subtraction case)
   - If current value ≥ next value → **Add** (normal case)

### Why Right-to-Left Works

By processing right-to-left, we always know the "context" of the current character:

- In `IV`: When we reach `I`, we already processed `V`, so we know `I < V` → subtract
- In `VI`: When we reach `V`, we already processed `I`, so we know `V > I` → add

### Implementation Details

**Source:** [13.ts](./13.ts)

```typescript
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
      total -= current; // Subtraction case
    } else {
      total += current; // Normal case
    }
  }

  return total;
}
```

### Example Walkthrough: "MCMXCIV"

| Step | Index | Char | Current | Next | Operation      | Total |
| ---- | ----- | ---- | ------- | ---- | -------------- | ----- |
| 0    | 6     | V    | 5       | -    | Initialize     | 5     |
| 1    | 5     | I    | 1       | 5    | 1 < 5 → -      | 4     |
| 2    | 4     | C    | 100     | 1    | 100 > 1 → +    | 104   |
| 3    | 3     | X    | 10      | 100  | 10 < 100 → -   | 94    |
| 4    | 2     | M    | 1000    | 10   | 1000 > 10 → +  | 1094  |
| 5    | 1     | C    | 100     | 1000 | 100 < 1000 → - | 994   |
| 6    | 0     | M    | 1000    | 100  | 1000 > 100 → + | 1994  |

**Result:** 1994 ✓

### Edge Cases Handled

- **Single character**: `"V"` → 5
- **All additions**: `"VIII"` → 8
- **All subtractions**: `"IV"` → 4
- **Mixed cases**: `"MCMXCIV"` → 1994
- **Consecutive subtractions**: `"CDXL"` → 440

### Complexity Analysis

- **Time Complexity**: O(n) where n is the length of the string
  - Single pass through the string
- **Space Complexity**: O(1)
  - Fixed-size map (7 entries)
  - Constant extra variables

### Alternative Approaches

1. **Left-to-Right with Lookahead**: More complex logic to handle subtraction cases
2. **Replace Subtraction Patterns**: Replace "IV", "IX", etc. with placeholders first
3. **Stack-based**: Push/pop operations, but unnecessary complexity

### Why This Solution is Optimal

- **Simplicity**: Single loop with straightforward logic
- **Efficiency**: Linear time, constant space
- **Clarity**: The right-to-left approach naturally handles all cases
- **No Special Cases**: No need to explicitly check for "IV", "IX", etc.

This elegant solution demonstrates how choosing the right traversal direction can simplify complex parsing problems.
