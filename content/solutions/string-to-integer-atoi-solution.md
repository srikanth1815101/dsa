---
title: "String to Integer (atoi) - Solution"
problemUrl: "/problems/string-to-integer-atoi/"
---
<!-- All rights reserved to CSRGO DSA -->

## Explanation

The atoi algorithm safely parses a string into a 32-bit signed integer adhering to whitespace, sign detection, digit conversion, and integer overflow clamp rules.

### Algorithm Steps
1. Return `0` if the string is empty or null.
2. Initialize `idx = 0`, `sign = 1`, and `result = 0`.
3. Advance `idx` past all leading spaces `' '`.
4. If `idx < n` and character is `'+'` or `'-'`:
   - Set `sign = -1` if `'-'`, otherwise `sign = 1`.
   - Increment `idx = idx + 1`.
5. Iterate while `idx < n` and `Character.isDigit(s.charAt(idx))`:
   - Let `digit = s.charAt(idx) - '0'`.
   - Check for overflow before multiplying:
     - If `result > Integer.MAX_VALUE / 10` or (`result == Integer.MAX_VALUE / 10` and `digit > 7`):
       - Return `sign == 1 ? Integer.MAX_VALUE : Integer.MIN_VALUE`.
   - Update `result = result * 10 + digit`.
   - Advance `idx = idx + 1`.
6. Return `result * sign`.

### Complexity Analysis
- **Time Complexity**: $O(n)$, traversing each character of the string at most once.
- **Space Complexity**: $O(1)$, using a few primitive integer variables.

---

## Code

```java
public static int solve(String s) {
    if (s == null) {
        return 0;
    }

    int n = s.length();
    int i = 0;

    while (i < n && s.charAt(i) == ' ') {
        i = i + 1;
    }

    if (i == n) {
        return 0;
    }

    int sign = 1;
    char firstChar = s.charAt(i);
    if (firstChar == '+') {
        i = i + 1;
    } else if (firstChar == '-') {
        sign = -1;
        i = i + 1;
    }

    int result = 0;
    int maxLimit = Integer.MAX_VALUE / 10;

    while (i < n && Character.isDigit(s.charAt(i))) {
        int digit = s.charAt(i) - '0';

        if (result > maxLimit || (result == maxLimit && digit > 7)) {
            return sign == 1 ? Integer.MAX_VALUE : Integer.MIN_VALUE;
        }

        result = result * 10 + digit;
        i = i + 1;
    }

    return result * sign;
}
```
