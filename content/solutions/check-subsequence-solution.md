---
date: 2026-10-01T01:11:00+05:30

title: "Check Subsequence - Solution"
problemUrl: "/problems/check-subsequence/"
weight: 11
---
<!-- All rights reserved to CSRGO DSA -->

## Explanation

To determine if `s` is a subsequence of `t`, we can use a two-pointer greedy strategy:

- Pointer `i` traverses target pattern `s`.
- Pointer `j` traverses source text `t`.

At each step, if `s.charAt(i) == t.charAt(j)`, the character in `s` has been matched in `t`, so we advance `i`. Regardless of whether a match occurred, we always advance `j` to scan subsequent characters in `t`.

If pointer `i` reaches `s.length()`, every character of `s` was found in `t` in the correct relative order, returning `true`. Otherwise, if `j` finishes before `i` reaches the end, `false` is returned.

This approach executes in `O(n)` time (where `n = t.length()`) and requires `O(1)` additional space.

### Step-by-Step Algorithm:
1. Initialize pointer `i = 0` for `s` and `j = 0` for `t`.
2. While `i < s.length()` and `j < t.length()`:
   - If `s.charAt(i) == t.charAt(j)`, advance `i = i + 1`.
   - Advance `j = j + 1`.
3. Return `i == s.length()`.

## Code

```java
public static boolean solve(String s, String t) {
    int i = 0;
    int j = 0;

    while (i < s.length() && j < t.length()) {
        if (s.charAt(i) == t.charAt(j)) {
            i = i + 1;
        }
        j = j + 1;
    }

    return i == s.length();
}
```
