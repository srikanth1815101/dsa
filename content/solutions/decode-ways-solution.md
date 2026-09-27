---
title: "Decode Ways - Solution"
problemUrl: "/problems/decode-ways/"
---
<!-- All rights reserved to CSRGO DSA -->

## Explanation

We use Dynamic Programming where `dp[i]` represents the number of ways to decode the prefix of string `s` of length `i`:

1. **Base Cases**:
   - `dp[0] = 1`: an empty prefix has 1 valid decoding.
   - If `s.charAt(0) == '0'`, then the message starts with an invalid digit, returning `0`. Otherwise `dp[1] = 1`.
2. **Transition**: For each index `i` from `2` to `n`:
   - **Single-digit decode**: Check character `c1 = s.charAt(i - 1)`. If `c1 != '0'`, it represents a valid single character ('1'-'9'), contributing `dp[i - 1]` ways.
   - **Two-digit decode**: Check two-digit substring `s.substring(i - 2, i)`. If this integer is between `10` and `26`, it represents a valid character ('10'-'26'), contributing `dp[i - 2]` ways.
   - `dp[i] = (valid single ? dp[i - 1] : 0) + (valid double ? dp[i - 2] : 0)`.
3. **Space Optimization**: Because `dp[i]` only depends on `dp[i - 1]` and `dp[i - 2]`, we can maintain two variables (`prev2` and `prev1`), reducing space complexity to $O(1)$.

### Step-by-Step Algorithm:
1. If `s == null || s.length() == 0 || s.charAt(0) == '0'`, return `0`.
2. Let `int n = s.length()`.
3. Initialize `int prev2 = 1` and `int prev1 = 1`.
4. Loop `i` from `2` to `n`:
   - Initialize `int current = 0`.
   - Let `int oneDigit = s.charAt(i - 1) - '0'`.
   - Let `int twoDigits = Integer.parseInt(s.substring(i - 2, i))`.
   - If `oneDigit >= 1 && oneDigit <= 9`:
     - `current = current + prev1`.
   - If `twoDigits >= 10 && twoDigits <= 26`:
     - `current = current + prev2`.
   - Update `prev2 = prev1`.
   - Update `prev1 = current`.
5. Return `prev1`.

## Code

```java
public static int solve(String s) {
    if (s == null || s.length() == 0 || s.charAt(0) == '0') {
        return 0;
    }

    int n = s.length();
    int prev2 = 1;
    int prev1 = 1;

    for (int i = 2; i <= n; i = i + 1) {
        int current = 0;
        int oneDigit = s.charAt(i - 1) - '0';
        int twoDigits = Integer.parseInt(s.substring(i - 2, i));

        if (oneDigit >= 1 && oneDigit <= 9) {
            current = current + prev1;
        }

        if (twoDigits >= 10 && twoDigits <= 26) {
            current = current + prev2;
        }

        prev2 = prev1;
        prev1 = current;
    }

    return prev1;
}
```
