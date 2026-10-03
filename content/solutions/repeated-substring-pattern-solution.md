---
date: 2026-10-01T01:13:00+05:30

title: "Repeated Substring Pattern - Solution"
problemUrl: "/problems/repeated-substring-pattern/"
weight: 13
---
<!-- All rights reserved to CSRGO DSA -->

## Explanation

A string `s` of length `n` is formed by repeating a substring of length `k` if and only if:
1. The longest proper prefix of `s` that is also a proper suffix has length `lps[n - 1]`.
2. The remaining unmatched part of the string has length `period = n - lps[n - 1]`.
3. If `lps[n - 1] > 0` and `n % period == 0`, the substring of length `period` cleanly divides and constructs the entire string.

We construct the **Longest Prefix Suffix (LPS)** array identical to the preprocessing step of the Knuth-Morris-Pratt (KMP) pattern matching algorithm in `O(n)` time and `O(n)` space.

### Step-by-Step Algorithm:
1. Let `n = s.length()`.
2. Initialize an integer array `lps` of size `n`.
3. Set pointer `len = 0` and `i = 1`.
4. While `i < n`:
   - If `s.charAt(i) == s.charAt(len)`, increment `len = len + 1`, assign `lps[i] = len`, and increment `i = i + 1`.
   - If they do not match:
     - If `len > 0`, fall back to `len = lps[len - 1]`.
     - Otherwise, set `lps[i] = 0` and increment `i = i + 1`.
5. Retrieve `matchLen = lps[n - 1]`.
6. Return `matchLen > 0 && n % (n - matchLen) == 0`.

## Code

```java
public static boolean solve(String s) {
    int n = s.length();
    int[] lps = new int[n];

    int len = 0;
    int i = 1;

    while (i < n) {
        if (s.charAt(i) == s.charAt(len)) {
            len = len + 1;
            lps[i] = len;
            i = i + 1;
        } else {
            if (len > 0) {
                len = lps[len - 1];
            } else {
                lps[i] = 0;
                i = i + 1;
            }
        }
    }

    int matchLen = lps[n - 1];
    return matchLen > 0 && (n % (n - matchLen) == 0);
}
```
