---
title: "String Compression - Solution"
problemUrl: "/problems/string-compression/"
---
<!-- All rights reserved to CSRGO DSA -->

## Explanation

Run-Length Encoding (RLE) compresses contiguous repeating sequences of characters:

### Linear Grouping Pass
1. Use an index `i = 0` to iterate through string `s` of length $n$.
2. For each new character group starting at index `i`:
   - Record character `ch = s.charAt(i)`.
   - Use an inner pointer `j = i` to advance while `j < n` and `s.charAt(j) == ch`.
   - The length of the group is `count = j - i`.
3. Append `ch` to a `StringBuilder`.
4. If `count > 1`, append `count` to the `StringBuilder`.
5. Advance the outer pointer: `i = j`.

### Complexity Analysis
- **Time Complexity**: $O(n)$, since each character in `s` is examined at most twice (by pointer `i` and pointer `j`).
- **Space Complexity**: $O(n)$ to construct and return the compressed string.

---

## Code

```java
public static String solve(String s) {
    if (s == null || s.length() == 0) {
        return "";
    }

    int n = s.length();
    StringBuilder sb = new StringBuilder();
    int i = 0;

    while (i < n) {
        char ch = s.charAt(i);
        int j = i;

        while (j < n && s.charAt(j) == ch) {
            j = j + 1;
        }

        int count = j - i;
        sb.append(ch);

        if (count > 1) {
            sb.append(count);
        }

        i = j;
    }

    return sb.toString();
}
```
