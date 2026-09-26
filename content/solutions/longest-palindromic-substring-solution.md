---
title: "Longest Palindromic Substring - Solution"
problemUrl: "/problems/longest-palindromic-substring/"
---
<!-- All rights reserved to CSRGO DSA -->

## Explanation

A palindrome mirrors around its center. A string of length $n$ contains $2n - 1$ potential centers:
- $n$ odd-length centers: centered at a single character `s.charAt(i)`.
- $n - 1$ even-length centers: centered between `s.charAt(i)` and `s.charAt(i + 1)`.

### Expand Around Center Algorithm
1. Initialize `start = 0` and `maxLen = 1`.
2. For each center index $i$ from $0$ to $n - 1$:
   - **Odd expansion**: Expand outward from `(i, i)`.
   - **Even expansion**: Expand outward from `(i, i + 1)`.
3. In helper function `expand(s, left, right)`:
   - While `left >= 0` and `right < n` and `s.charAt(left) == s.charAt(right)`:
     - Expand boundaries: `left = left - 1`, `right = right + 1`.
   - The verified palindromic length is:
     $$\text{len} = \text{right} - \text{left} - 1$$
4. Update the global longest palindrome coordinates if $\text{len} > \text{maxLen}$:
   - `start = left + 1`
   - `maxLen = len`
5. Return `s.substring(start, start + maxLen)`.

### Complexity Analysis
- **Time Complexity**: $O(n^2)$, since there are $2n - 1$ centers and expanding from each center takes $O(n)$ time in the worst case.
- **Space Complexity**: $O(1)$ auxiliary space, needing only boundary pointer indices.

---

## Code

```java
public static String solve(String s) {
    if (s == null || s.length() <= 1) {
        return s;
    }

    int n = s.length();
    int start = 0;
    int maxLen = 1;

    for (int i = 0; i < n; i++) {
        // Odd length palindromes centered at i
        int len1 = expandAroundCenter(s, i, i);
        // Even length palindromes centered between i and i + 1
        int len2 = expandAroundCenter(s, i, i + 1);

        int bestLen = len1 > len2 ? len1 : len2;

        if (bestLen > maxLen) {
            maxLen = bestLen;
            start = i - (bestLen - 1) / 2;
        }
    }

    return s.substring(start, start + maxLen);
}

private static int expandAroundCenter(String s, int left, int right) {
    while (left >= 0 && right < s.length() && s.charAt(left) == s.charAt(right)) {
        left = left - 1;
        right = right + 1;
    }

    return right - left - 1;
}
```
