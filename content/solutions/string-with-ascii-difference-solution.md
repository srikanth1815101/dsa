---
title: "String with ASCII Difference - Solution"
problemUrl: "/problems/string-with-ascii-difference/"
---
<!-- All rights reserved to CSRGO DSA -->

## Explanation

The problem requires constructing an interleaved string consisting of characters and the signed difference of consecutive ASCII values:

### Algorithm Steps
1. Handle edge cases: if `s` is `null` or has length $\le 1$, return `s`.
2. Initialize a `StringBuilder` with capacity proportional to $2n$.
3. Append the initial character `s.charAt(0)` to the builder.
4. Iterate with index $i$ from $1$ to $s.length() - 1$:
   - Current character: `curr = s.charAt(i)`.
   - Previous character: `prev = s.charAt(i - 1)`.
   - ASCII Difference: `diff = curr - prev`.
   - Append `diff` to the `StringBuilder`.
   - Append `curr` to the `StringBuilder`.
5. Return `sb.toString()`.

### Complexity Analysis
- **Time Complexity**: $O(n)$, performing a single linear scan through the string of length $n$.
- **Space Complexity**: $O(n)$, constructing an interleaved string of length proportional to $n$.

---

## Code

```java
public static String solve(String s) {
    if (s == null || s.length() <= 1) {
        return s;
    }

    StringBuilder sb = new StringBuilder();
    sb.append(s.charAt(0));

    for (int i = 1; i < s.length(); i++) {
        char prev = s.charAt(i - 1);
        char curr = s.charAt(i);
        int diff = curr - prev;

        sb.append(diff);
        sb.append(curr);
    }

    return sb.toString();
}
```
