---
title: "Minimum Window Substring - Solution"
problemUrl: "/problems/minimum-window-substring/"
---
<!-- All rights reserved to CSRGO DSA -->

## Explanation

The problem seeks the shortest contiguous substring in $s$ containing all characters from $t$. We solve this in optimal $O(m + n)$ time using the **Two-Pointer Sliding Window with Frequency Balance Array**:

### Frequency Array Mechanics
1. **Target Frequency Table**:
   - Construct a frequency array `targetCount` of size $128$ for all ASCII characters in $t$.
   - Maintain `required = t.length()`, the total count of characters to match.
2. **Expand Right Pointer**:
   - As `right` iterates from $0$ to $m - 1$:
     - Character `ch = s.charAt(right)`.
     - If `targetCount[ch] > 0`, it satisfies an outstanding required character: decrement `required = required - 1`.
     - Decrement `targetCount[ch] = targetCount[ch] - 1`.
3. **Contract Left Pointer**:
   - While `required == 0` (window contains all characters of $t$):
     - Update minimum window: if `right - left + 1 < minLen`, record `minLen = right - left + 1` and `start = left`.
     - Character at left: `leftChar = s.charAt(left)`.
     - Re-introduce `leftChar` into `targetCount`:
       $$\text{targetCount}[\text{leftChar}] = \text{targetCount}[\text{leftChar}] + 1$$
     - If `targetCount[leftChar] > 0`, the window has lost a necessary character: increment `required = required + 1`.
     - Advance `left = left + 1`.
4. Return `minLen == Integer.MAX_VALUE ? "" : s.substring(start, start + minLen)`.

### Complexity Analysis
- **Time Complexity**: $O(m + n)$, since each character in $s$ is visited at most twice (once by `right` and once by `left`).
- **Space Complexity**: $O(1)$, utilizing a fixed-size array of 128 integers.

---

## Code

```java
public static String solve(String s, String t) {
    if (s == null || t == null || s.length() == 0 || t.length() == 0 || s.length() < t.length()) {
        return "";
    }

    int[] targetCount = new int[128];
    for (int i = 0; i < t.length(); i++) {
        char c = t.charAt(i);
        targetCount[c] = targetCount[c] + 1;
    }

    int required = t.length();
    int left = 0;
    int minLen = Integer.MAX_VALUE;
    int start = 0;

    for (int right = 0; right < s.length(); right++) {
        char c = s.charAt(right);

        if (targetCount[c] > 0) {
            required = required - 1;
        }

        targetCount[c] = targetCount[c] - 1;

        while (required == 0) {
            int currentLen = right - left + 1;
            if (currentLen < minLen) {
                minLen = currentLen;
                start = left;
            }

            char leftChar = s.charAt(left);
            targetCount[leftChar] = targetCount[leftChar] + 1;

            if (targetCount[leftChar] > 0) {
                required = required + 1;
            }

            left = left + 1;
        }
    }

    if (minLen == Integer.MAX_VALUE) {
        return "";
    }

    return s.substring(start, start + minLen);
}
```
