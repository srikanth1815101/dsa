---
date: 2026-10-01T01:15:00+05:30

title: "Decode Ways II - Solution"
problemUrl: "/problems/decode-ways-ii/"
weight: 15
---
<!-- All rights reserved to CSRGO DSA -->

## Explanation

Let `dp[i]` be the number of valid decodings for prefix `s[0..i - 1]`.
At index `i - 1`, we examine the transitions from single-character `s[i - 1]` and two-character `s[i - 2..i - 1]`:

1. **Single Character `s[i - 1]`**:
   - If `s[i - 1] == '*'`: maps to digits 1–9, contributing `9 * dp[i - 1]`.
   - If `s[i - 1] != '0'`: maps to 1 digit, contributing `1 * dp[i - 1]`.
   - If `s[i - 1] == '0'`: cannot decode alone (contributes 0).

2. **Two Characters `s[i - 2..i - 1]`**:
   - If `s[i - 2] == '*'`:
     - If `s[i - 1] == '*'`: can form 11–19 (9 ways) and 21–26 (6 ways), total 15 ways.
     - If `s[i - 1] <= '6'`: can form `1X` or `2X`, giving 2 ways.
     - If `s[i - 1] > '6'`: can only form `1X`, giving 1 way.
   - If `s[i - 2] == '1'`:
     - If `s[i - 1] == '*'`: maps to 11–19, giving 9 ways.
     - If `s[i - 1]` is a digit: valid if 10–19, giving 1 way.
   - If `s[i - 2] == '2'`:
     - If `s[i - 1] == '*'`: maps to 21–26, giving 6 ways.
     - If `s[i - 1] <= '6'`: valid if 20–26, giving 1 way.

All arithmetic is computed modulo `10^9 + 7`. Because each step only requires the previous two state counts (`dp[i - 1]` and `dp[i - 2]`), we maintain rolling variables in `O(1)` space and `O(n)` time.

### Step-by-Step Algorithm:
1. Define modulo constant `MOD = 1000000007`.
2. Initialize `prev2 = 1` (representing `dp[0] = 1`).
3. Compute `prev1` for the first character `s[0]`:
   - If `s[0] == '*'`: `prev1 = 9`.
   - If `s[0] == '0'`: `prev1 = 0`.
   - Else: `prev1 = 1`.
4. Iterate `i` from `1` to `s.length() - 1`:
   - Compute single-digit multiplier `singleWays`.
   - Compute two-digit multiplier `doubleWays` by inspecting `s[i - 1]` and `s[i]`.
   - Compute `curr = (singleWays * prev1 + doubleWays * prev2) % MOD`.
   - Shift states: `prev2 = prev1`, `prev1 = curr`.
5. Return `(int) prev1`.

## Code

```java
public static int solve(String s) {
    long MOD = 1000000007L;
    long prev2 = 1L;
    long prev1 = 0L;

    if (s.charAt(0) == '*') {
        prev1 = 9L;
    } else if (s.charAt(0) != '0') {
        prev1 = 1L;
    }

    for (int i = 1; i < s.length(); i = i + 1) {
        char c1 = s.charAt(i - 1);
        char c2 = s.charAt(i);

        long singleWays = 0L;
        if (c2 == '*') {
            singleWays = 9L;
        } else if (c2 != '0') {
            singleWays = 1L;
        }

        long doubleWays = 0L;
        if (c1 == '*') {
            if (c2 == '*') {
                doubleWays = 15L;
            } else if (c2 <= '6') {
                doubleWays = 2L;
            } else {
                doubleWays = 1L;
            }
        } else if (c1 == '1') {
            if (c2 == '*') {
                doubleWays = 9L;
            } else {
                doubleWays = 1L;
            }
        } else if (c1 == '2') {
            if (c2 == '*') {
                doubleWays = 6L;
            } else if (c2 <= '6') {
                doubleWays = 1L;
            }
        }

        long curr = (singleWays * prev1 + doubleWays * prev2) % MOD;
        prev2 = prev1;
        prev1 = curr;
    }

    return (int) prev1;
}
```
