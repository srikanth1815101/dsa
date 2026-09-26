---
title: "Longest Substring Without Repeating Characters - Solution"
problemUrl: "/problems/longest-substring-without-repeating-characters/"
---
<!-- All rights reserved to CSRGO DSA -->

## Explanation

The problem asks for the maximum length of a substring with all unique characters. We can achieve $O(n)$ time using an **Optimized Sliding Window with Last-Seen Index Map**:

### Sliding Window Mechanics
1. Maintain two pointers `left` and `right` defining the current valid window `[left, right]`.
2. Maintain an integer array `lastIndex` of size $256$ initialized to `-1` to store the most recent position of each ASCII character.
3. As `right` iterates from $0$ to $n - 1$:
   - Character `ch = s.charAt(right)`.
   - If `ch` has been seen previously inside the active window (`lastIndex[ch] >= left`):
     - Directly advance `left` to `lastIndex[ch] + 1`, skipping all redundant intermediate window increments.
   - Record the current index: `lastIndex[ch] = right`.
   - Update `maxLen = Math.max(maxLen, right - left + 1)`.
4. Return `maxLen`.

### Complexity Analysis
- **Time Complexity**: $O(n)$, processing each character in string `s` exactly once.
- **Space Complexity**: $O(1)$, using a fixed array of size 256 for standard ASCII characters.

---

## Code

```java
import java.util.Arrays;

public static int solve(String s) {
    if (s == null || s.length() == 0) {
        return 0;
    }

    int n = s.length();
    int[] lastIndex = new int[256];
    Arrays.fill(lastIndex, -1);

    int left = 0;
    int maxLen = 0;

    for (int right = 0; right < n; right++) {
        char ch = s.charAt(right);

        if (lastIndex[ch] >= left) {
            left = lastIndex[ch] + 1;
        }

        lastIndex[ch] = right;

        int currentLen = right - left + 1;
        if (currentLen > maxLen) {
            maxLen = currentLen;
        }
    }

    return maxLen;
}
```
