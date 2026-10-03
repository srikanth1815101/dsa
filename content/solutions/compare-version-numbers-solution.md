---
date: 2026-10-01T01:16:00+05:30

title: "Compare Version Numbers - Solution"
problemUrl: "/problems/compare-version-numbers/"
weight: 16
---
<!-- All rights reserved to CSRGO DSA -->

## Explanation

A version string consists of integer revision tokens separated by `'.'`. When one version string has fewer revision segments than the other, any missing segment is treated as `0`.

Using two pointers `i` and `j` to scan `version1` and `version2` simultaneously:
1. At each step, accumulate the integer value of the current segment for `version1` until reaching a dot or the end of the string.
2. Similarly, accumulate the integer value of the current segment for `version2`.
3. If one version string has ended, its segment value defaults to `0`.
4. Compare the two segment integer values:
   - If `num1 < num2`, return `-1`.
   - If `num1 > num2`, return `1`.
5. If they are equal, advance past the dot separators and proceed to compare the subsequent segment.
6. If both strings are fully processed with all segment pairs equal, return `0`.

This approach avoids creating string arrays, operating in `O(max(n, m))` time and `O(1)` additional space.

### Step-by-Step Algorithm:
1. Initialize pointers `i = 0` for `version1` and `j = 0` for `version2`.
2. While `i < version1.length()` or `j < version2.length()`:
   - Initialize `num1 = 0` and `num2 = 0`.
   - While `i < version1.length()` and `version1.charAt(i) != '.'`:
     - Accumulate digit: `num1 = num1 * 10 + (version1.charAt(i) - '0')`.
     - Advance `i = i + 1`.
   - While `j < version2.length()` and `version2.charAt(j) != '.'`:
     - Accumulate digit: `num2 = num2 * 10 + (version2.charAt(j) - '0')`.
     - Advance `j = j + 1`.
   - Compare values:
     - If `num1 < num2`, return `-1`.
     - If `num1 > num2`, return `1`.
   - Skip dot characters: `i = i + 1`, `j = j + 1`.
3. Return `0`.

## Code

```java
public static int solve(String version1, String version2) {
    int i = 0;
    int j = 0;
    int n1 = version1.length();
    int n2 = version2.length();

    while (i < n1 || j < n2) {
        int num1 = 0;
        int num2 = 0;

        while (i < n1 && version1.charAt(i) != '.') {
            num1 = num1 * 10 + (version1.charAt(i) - '0');
            i = i + 1;
        }

        while (j < n2 && version2.charAt(j) != '.') {
            num2 = num2 * 10 + (version2.charAt(j) - '0');
            j = j + 1;
        }

        if (num1 < num2) {
            return -1;
        }
        if (num1 > num2) {
            return 1;
        }

        i = i + 1;
        j = j + 1;
    }

    return 0;
}
```
