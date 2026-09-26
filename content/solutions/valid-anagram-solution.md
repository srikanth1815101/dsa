---
title: "Valid Anagram - Solution"
problemUrl: "/problems/valid-anagram/"
---
<!-- All rights reserved to CSRGO DSA -->

## Explanation

Two strings are anagrams if and only if they contain the exact same characters with the exact same frequencies.

### Fixed Frequency Counter Approach
1. **Length Check**:
   - If `s.length() != t.length()`, they cannot have identical frequencies; return `false` immediately.
2. **Frequency Counting**:
   - Since characters are restricted to lowercase English letters, allocate a fixed integer array `count` of size $26$.
   - Iterate through both strings simultaneously:
     - For `s.charAt(i)`: increment `count[s.charAt(i) - 'a'] = count[s.charAt(i) - 'a'] + 1`.
     - For `t.charAt(i)`: decrement `count[t.charAt(i) - 'a'] = count[t.charAt(i) - 'a'] - 1`.
3. **Verification**:
   - If every bucket in `count` is zero, every character frequency matched.
   - If any bucket is non-zero, return `false`.

### Complexity Analysis
- **Time Complexity**: $O(n)$, making a single pass over strings of length $n$.
- **Space Complexity**: $O(1)$, using a fixed array of 26 integers regardless of input length.

---

## Code

```java
public static boolean solve(String s, String t) {
    if (s == null || t == null) {
        return false;
    }

    if (s.length() != t.length()) {
        return false;
    }

    int[] count = new int[26];

    for (int i = 0; i < s.length(); i++) {
        int indexS = s.charAt(i) - 'a';
        int indexT = t.charAt(i) - 'a';

        count[indexS] = count[indexS] + 1;
        count[indexT] = count[indexT] - 1;
    }

    for (int i = 0; i < 26; i++) {
        if (count[i] != 0) {
            return false;
        }
    }

    return true;
}
```
