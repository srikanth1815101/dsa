---
title: "Roman to Integer - Solution"
problemUrl: "/problems/roman-to-integer/"
---
<!-- All rights reserved to CSRGO DSA -->

## Explanation

To convert a Roman numeral to an integer, examine characters from left to right.

### Algorithm Steps
1. Map each symbol to its numeric value:
   - `'I'` $\rightarrow 1$
   - `'V'` $\rightarrow 5$
   - `'X'` $\rightarrow 10$
   - `'L'` $\rightarrow 50$
   - `'C'` $\rightarrow 100$
   - `'D'` $\rightarrow 500$
   - `'M'` $\rightarrow 1000$
2. Iterate `i` from `0` to `n - 1`:
   - If the current value is less than the next character's value (e.g. `I` before `V`), subtract the current value from the running total: `total = total - current`.
   - Otherwise, add the current value to the running total: `total = total + current`.
3. Return `total`.

### Complexity Analysis
- **Time Complexity**: $O(n)$, where $n$ is the length of the string (at most 15).
- **Space Complexity**: $O(1)$, since Roman numerals use a fixed alphabet of 7 characters.

---

## Code

```java
public static int solve(String s) {
    int total = 0;
    int n = s.length();

    for (int i = 0; i < n; i = i + 1) {
        int val = charValue(s.charAt(i));

        if (i + 1 < n && val < charValue(s.charAt(i + 1))) {
            total = total - val;
        } else {
            total = total + val;
        }
    }

    return total;
}

private static int charValue(char c) {
    switch (c) {
        case 'I': return 1;
        case 'V': return 5;
        case 'X': return 10;
        case 'L': return 50;
        case 'C': return 100;
        case 'D': return 500;
        case 'M': return 1000;
        default: return 0;
    }
}
```
