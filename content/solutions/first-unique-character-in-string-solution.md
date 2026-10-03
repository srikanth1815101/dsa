---
date: 2026-10-01T01:12:00+05:30

title: "First Unique Character in String - Solution"
problemUrl: "/problems/first-unique-character-in-string/"
weight: 12
---
<!-- All rights reserved to CSRGO DSA -->

## Explanation

To determine the first non-repeating character, we need to know the total frequency of each character across the entire string without disturbing their original indices:

1. **First Pass**: Traverse string `s` and record the frequency of each character in a fixed-size frequency array of size 26 (since `s` contains only lowercase English letters).
2. **Second Pass**: Traverse string `s` from left to right. For each index `i`, check if the frequency of `s.charAt(i)` in our frequency table equals `1`. The first index satisfying this condition is our answer.
3. If no character has a frequency of `1`, return `-1`.

This two-pass strategy operates in `O(n)` time and `O(1)` auxiliary space (fixed array of 26 integers).

### Step-by-Step Algorithm:
1. Initialize an integer array `freq` of size `26`.
2. Iterate through each character of `s` and increment `freq[s.charAt(i) - 'a'] = freq[s.charAt(i) - 'a'] + 1`.
3. Iterate `i` from `0` to `s.length() - 1`:
   - If `freq[s.charAt(i) - 'a'] == 1`, return `i`.
4. If no such index is found, return `-1`.

## Code

```java
public static int solve(String s) {
    int[] freq = new int[26];

    for (int i = 0; i < s.length(); i = i + 1) {
        int idx = s.charAt(i) - 'a';
        freq[idx] = freq[idx] + 1;
    }

    for (int i = 0; i < s.length(); i = i + 1) {
        int idx = s.charAt(i) - 'a';
        if (freq[idx] == 1) {
            return i;
        }
    }

    return -1;
}
```
