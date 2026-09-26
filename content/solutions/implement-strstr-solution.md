---
title: "Implement strstr - Solution"
problemUrl: "/problems/implement-strstr/"
---
<!-- All rights reserved to CSRGO DSA -->

## Explanation

The strstr problem requires finding the first occurrence of string `needle` in `haystack`.

### Algorithm Steps
1. If `needle` is empty (length 0), return `0` by convention.
2. If `haystack.length() < needle.length()`, needle cannot fit in haystack; return `-1`.
3. Loop `i` from `0` to `haystack.length() - needle.length()`:
   - Compare characters of `haystack` starting at `i` with `needle` starting at index `0`.
   - If all characters match for length `needle.length()`, return index `i`.
4. If loop completes without a match, return `-1`.

### Complexity Analysis
- **Time Complexity**: $O((n - m + 1) \times m)$, where $n$ is haystack length and $m$ is needle length. In average cases, it is much closer to $O(n)$.
- **Space Complexity**: $O(1)$, using only loop variables.

---

## Code

```java
public static int solve(String haystack, String needle) {
    if (needle == null || needle.length() == 0) {
        return 0;
    }
    if (haystack == null || haystack.length() < needle.length()) {
        return -1;
    }

    int n = haystack.length();
    int m = needle.length();

    for (int i = 0; i <= n - m; i = i + 1) {
        int j = 0;
        while (j < m && haystack.charAt(i + j) == needle.charAt(j)) {
            j = j + 1;
        }
        if (j == m) {
            return i;
        }
    }

    return -1;
}
```
