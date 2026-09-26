---
title: "Print Palindromic Substrings - Solution"
problemUrl: "/problems/print-palindromic-substrings/"
---
<!-- All rights reserved to CSRGO DSA -->

## Explanation

A palindrome is a string that reads identically forwards and backwards.

### Two-Pointer Substring Traversal
1. Iterate over every substring start index $i$ from $0$ to $n - 1$.
2. For each start index $i$, iterate over end index $j$ from $i + 1$ to $n$:
   - Extract substring `sub = s.substring(i, j)`.
   - Verify if `sub` is a palindrome:
     - Compare characters using two pointers `left = 0` and `right = sub.length() - 1`.
     - If characters at `left` and `right` match for all symmetric pairs, `sub` is palindromic.
     - Add `sub` to the output list.

### Complexity Analysis
- **Time Complexity**: $O(n^3)$ using standard substring generation and two-pointer verification, where there are $O(n^2)$ substrings and each verification takes $O(n)$ time.
- **Space Complexity**: $O(1)$ auxiliary memory (excluding the returned list of substrings).

---

## Code

```java
import java.util.ArrayList;
import java.util.List;

public static List<String> solve(String s) {
    List<String> result = new ArrayList<>();
    if (s == null || s.length() == 0) {
        return result;
    }

    int n = s.length();

    for (int i = 0; i < n; i++) {
        for (int j = i + 1; j <= n; j++) {
            String sub = s.substring(i, j);
            if (isPalindrome(sub)) {
                result.add(sub);
            }
        }
    }

    return result;
}

private static boolean isPalindrome(String sub) {
    int left = 0;
    int right = sub.length() - 1;

    while (left < right) {
        if (sub.charAt(left) != sub.charAt(right)) {
            return false;
        }
        left = left + 1;
        right = right - 1;
    }

    return true;
}
```
