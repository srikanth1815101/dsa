---
title: "Solution: First Unique Character"
date: 2024-01-10
problemUrl: "/problems/first-unique-character/"
---

## Approach

We can use a frequency map (or an integer array of size 26 for lowercase English letters) to count occurrences.

1. **First Pass**: Iterate through the string and count the frequency of each character.
2. **Second Pass**: Iterate through the string again. The first character with a count of 1 is our answer. return its index.
3. If loop finishes, return -1.

### Complexity

- **Time Complexity**: O(n), where n is the string length.
- **Space Complexity**: O(1) (since alphabet size is fixed at 26).

## Code

```java
public class Solution {
    public int firstUniqChar(String s) {
        int[] count = new int[26];
        for (char c : s.toCharArray()) {
            count[c - 'a']++;
        }
        for (int i = 0; i < s.length(); i++) {
            if (count[s.charAt(i) - 'a'] == 1) {
                return i;
            }
        }
        return -1;
    }
}
```
