---
title: "Print Encodings - Solution"
problemUrl: "/problems/print-encodings/"
---
<!-- All rights reserved to CSRGO DSA -->

## Explanation

At each position in digit string `str`:
1. If the current leading digit is `'0'`, the branch is invalid because `'0'` does not map to any letter.
2. **Single-digit branch**: Decode the first digit `d1` as `(char)('a' + d1 - 1)` and recurse on remainder.
3. **Two-digit branch**: If length is at least 2, parse the 2-digit number `d12`. If `10 <= d12 <= 26`, decode as `(char)('a' + d12 - 1)` and recurse on remainder.

### Algorithm Steps
1. Define `encode(ques, ans, result)`:
   - If `ques.length() == 0`: Add `ans` to `result` and return.
   - If `ques.charAt(0) == '0'`: Return (invalid).
   - Single-digit:
     - `int val1 = ques.charAt(0) - '0'`.
     - `char code1 = (char) ('a' + val1 - 1)`.
     - Call `encode(ques.substring(1), ans + code1, result)`.
   - Two-digit:
     - If `ques.length() >= 2`:
       - `int val2 = Integer.parseInt(ques.substring(0, 2))`.
       - If `val2 <= 26`:
         - `char code2 = (char) ('a' + val2 - 1)`.
         - Call `encode(ques.substring(2), ans + code2, result)`.
2. In `solve(str)`:
   - If `str == null || str.length() == 0`, return empty list.
   - Call `encode(str, "", result)` and return `result`.

### Complexity Analysis
- **Time Complexity**: $O(2^n)$, bounded by the Fibonacci recursion sequence $T(n) = T(n - 1) + T(n - 2)$.
- **Space Complexity**: $O(n)$ recursion call stack space.

---

## Code

```java
import java.util.ArrayList;
import java.util.List;

public static List<String> solve(String str) {
    List<String> result = new ArrayList<>();
    if (str == null || str.length() == 0) {
        return result;
    }
    encode(str, "", result);
    return result;
}

private static void encode(String ques, String ans, List<String> result) {
    if (ques.length() == 0) {
        result.add(ans);
        return;
    }

    if (ques.charAt(0) == '0') {
        return;
    }

    int val1 = ques.charAt(0) - '0';
    char code1 = (char) ('a' + val1 - 1);
    encode(ques.substring(1), ans + code1, result);

    if (ques.length() >= 2) {
        int val2 = Integer.parseInt(ques.substring(0, 2));
        if (val2 <= 26) {
            char code2 = (char) ('a' + val2 - 1);
            encode(ques.substring(2), ans + code2, result);
        }
    }
}
```
