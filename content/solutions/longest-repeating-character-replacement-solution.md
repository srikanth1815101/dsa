---
date: 2026-10-01T01:14:00+05:30

title: "Longest Repeating Character Replacement - Solution"
problemUrl: "/problems/longest-repeating-character-replacement/"
weight: 14
---
<!-- All rights reserved to CSRGO DSA -->

## Explanation

We use a sliding window `[left, right]`. For any current window, the ideal strategy is to keep the most frequent character unchanged and convert all other characters into that character:

- Let `windowLen = right - left + 1`.
- Let `maxFreq` be the highest count of any single character inside the current window.
- The minimum number of replacements needed to make the entire window uniform is `windowLen - maxFreq`.

If `windowLen - maxFreq > k`, the current window is invalid because it requires more than `k` operations. In that case, we decrement the frequency count of `s.charAt(left)` and advance `left = left + 1`.

Because the window only expands or shifts rightward without shrinking below the best valid window found so far, the algorithm processes each character at most twice, achieving `O(n)` time complexity and `O(1)` space complexity (size 26 frequency array).

### Step-by-Step Algorithm:
1. Initialize a frequency array `count` of size `26`.
2. Initialize `left = 0`, `maxFreq = 0`, and `maxLength = 0`.
3. For `right` from `0` to `s.length() - 1`:
   - Increment the frequency of `s.charAt(right)`: `idx = s.charAt(right) - 'A'`, `count[idx] = count[idx] + 1`.
   - Update `maxFreq = Math.max(maxFreq, count[idx])`.
   - If `(right - left + 1) - maxFreq > k`:
     - Decrement frequency of `s.charAt(left)`: `count[s.charAt(left) - 'A'] = count[s.charAt(left) - 'A'] - 1`.
     - Advance `left = left + 1`.
   - Update `maxLength = Math.max(maxLength, right - left + 1)`.
4. Return `maxLength`.

## Code

```java
public static int solve(String s, int k) {
    int[] count = new int[26];
    int left = 0;
    int maxFreq = 0;
    int maxLength = 0;

    for (int right = 0; right < s.length(); right = right + 1) {
        int idx = s.charAt(right) - 'A';
        count[idx] = count[idx] + 1;
        maxFreq = Math.max(maxFreq, count[idx]);

        while ((right - left + 1) - maxFreq > k) {
            count[s.charAt(left) - 'A'] = count[s.charAt(left) - 'A'] - 1;
            left = left + 1;
        }

        maxLength = Math.max(maxLength, right - left + 1);
    }

    return maxLength;
}
```
