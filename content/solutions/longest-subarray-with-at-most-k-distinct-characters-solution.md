---
title: "Longest Subarray with At Most K Distinct Characters - Solution"
date: 2026-10-03T11:20:00+05:30
problemUrl: "/problems/longest-subarray-with-at-most-k-distinct-characters/"
weight: 77
---
<!-- All rights reserved to CSRGO DSA -->

## Explanation

The problem asks for the maximum length of a contiguous substring of `s` containing at most `k` unique characters.

We can solve this problem in linear time using a **Two-Pointer Sliding Window**:
1. If $k = 0$ or the string is empty, no valid non-empty substring can be formed, so return `0`.
2. Maintain a frequency map `counts` to record the count of each character inside the current window `[left, right]`.
3. Expand the window by advancing the right pointer `right` from `0` to `s.length() - 1`, adding `s.charAt(right)` to the frequency map.
4. If the number of distinct characters in the map exceeds `k` (`counts.size() > k`):
   - Contract the window from the left by decrementing the count of `s.charAt(left)`.
   - If the count drops to 0, remove the character from `counts`.
   - Advance `left` by 1.
   - Continue until `counts.size() <= k`.
5. At every valid step, the length of the window is `right - left + 1`. We update `maxLen` with the maximum window length encountered.

### Step-by-Step Algorithm:
1. Check base conditions: if `s == null || s.length() == 0 || k <= 0`, return `0`.
2. Initialize a hash map `counts` of character frequencies.
3. Initialize `left = 0` and `maxLen = 0`.
4. Iterate `right` from `0` to `s.length() - 1`:
   - Let `c = s.charAt(right)`.
   - Insert or increment `c` in `counts`.
   - While `counts.size() > k`:
     - Let `leftChar = s.charAt(left)`.
     - Decrement count of `leftChar` in `counts`.
     - If count becomes `0`, remove `leftChar` from `counts`.
     - Increment `left = left + 1`.
   - Let `currentLen = right - left + 1`.
   - If `currentLen > maxLen`, update `maxLen = currentLen`.
5. Return `maxLen`.

## Code

```java
public static int solve(String s, int k) {
    if (s == null || s.length() == 0 || k <= 0) {
        return 0;
    }

    Map<Character, Integer> counts = new HashMap<>();
    int left = 0;
    int maxLen = 0;

    for (int right = 0; right < s.length(); right = right + 1) {
        char c = s.charAt(right);
        counts.put(c, counts.getOrDefault(c, 0) + 1);

        while (counts.size() > k) {
            char leftChar = s.charAt(left);
            counts.put(leftChar, counts.get(leftChar) - 1);
            if (counts.get(leftChar) == 0) {
                counts.remove(leftChar);
            }
            left = left + 1;
        }

        int currentLen = right - left + 1;
        if (currentLen > maxLen) {
            maxLen = currentLen;
        }
    }

    return maxLen;
}
```
