---
title: "Highest Frequency Character - Solution"
problemUrl: "/problems/highest-frequency-character/"
---
<!-- All rights reserved to CSRGO DSA -->

## Explanation

To determine the most frequent character in a string:
1. Maintain a frequency map that associates each character with its total number of occurrences.
2. Iterate through each character of the string:
   - Increment its count in the frequency map.
   - Maintain variables `maxFreq` initialized to `0` and `maxChar` initialized to the first character.
   - If the updated frequency strictly exceeds `maxFreq`, update `maxFreq` and set `maxChar` to the current character.
   - Using a strict inequality (`>`) ensures that ties are resolved by keeping the earliest character that achieved the maximum count.
3. Because the alphabet of ASCII characters is bounded, the space complexity is $O(1)$ and time complexity is linear $O(n)$.

### Step-by-Step Algorithm:
1. If the string is empty, return `' '`.
2. Initialize `Map<Character, Integer> freqMap = new HashMap<>()`.
3. Initialize `char maxChar = str.charAt(0)` and `int maxFreq = 0`.
4. Loop through each character `ch` of `str`:
   - Compute `int count = freqMap.getOrDefault(ch, 0) + 1`.
   - Update `freqMap.put(ch, count)`.
   - If `count > maxFreq`:
     - Update `maxFreq = count`.
     - Update `maxChar = ch`.
5. Return `maxChar`.

## Code

```java
public static char solve(String str) {
    if (str == null || str.length() == 0) {
        return ' ';
    }

    Map<Character, Integer> map = new HashMap<>();
    char maxChar = str.charAt(0);
    int maxFreq = 0;

    for (int i = 0; i < str.length(); i = i + 1) {
        char ch = str.charAt(i);
        int count = map.getOrDefault(ch, 0) + 1;
        map.put(ch, count);
        if (count > maxFreq) {
            maxFreq = count;
            maxChar = ch;
        }
    }

    return maxChar;
}
```
