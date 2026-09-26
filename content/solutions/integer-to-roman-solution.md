---
title: "Integer to Roman - Solution"
problemUrl: "/problems/integer-to-roman/"
---
<!-- All rights reserved to CSRGO DSA -->

## Explanation

Roman numeral conversion is solved greedily using precomputed arrays of standard and subtractive decimal values mapped to their Roman symbol representations in decreasing order.

### Algorithm Steps
1. Define parallel arrays of Roman symbols and their integer values in descending order:
   - Values: `[1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1]`
   - Symbols: `["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"]`
2. Initialize a `StringBuilder`.
3. Loop through the array from largest value to smallest:
   - While `num >= values[i]`:
     - Append `symbols[i]` to `sb`.
     - Update `num = num - values[i]`.
4. Return `sb.toString()`.

### Complexity Analysis
- **Time Complexity**: $O(1)$, because the maximum number is 3999, which requires at most 15 loop iterations.
- **Space Complexity**: $O(1)$, using fixed-size symbol tables.

---

## Code

```java
public static String solve(int num) {
    int[] values = {1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1};
    String[] symbols = {"M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"};

    StringBuilder sb = new StringBuilder();

    for (int i = 0; i < values.length; i = i + 1) {
        while (num >= values[i]) {
            sb.append(symbols[i]);
            num = num - values[i];
        }
    }

    return sb.toString();
}
```
