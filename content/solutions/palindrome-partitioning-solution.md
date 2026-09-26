---
title: "Palindrome Partitioning - Solution"
problemUrl: "/problems/palindrome-partitioning/"
---
<!-- All rights reserved to CSRGO DSA -->

## Explanation

Palindrome partitioning explores every valid prefix that forms a palindrome and recursively partitions the remaining suffix.

### Algorithm Steps
1. Define a helper function `backtrack(start, s, current, result)`:
   - **Base Case**: If `start == s.length()`, all characters have been partitioned into palindromes: add a copy of `current` to `result` and return.
   - Loop `i` from `start` to `s.length() - 1`:
     - Check if substring `s[start...i]` is a palindrome:
       - If yes:
         - Add `s.substring(start, i + 1)` to `current`.
         - Recurse: `backtrack(i + 1, s, current, result)`.
         - Backtrack: remove the last element from `current`.
2. In `solve(s)`, initialize `result = new ArrayList<>()`, invoke `backtrack`, and return `result`.

### Complexity Analysis
- **Time Complexity**: $O(2^n \times n)$, because there are $2^{n - 1}$ possible partition cuts, and checking palindromes takes $O(n)$ time.
- **Space Complexity**: $O(n)$ recursion call stack space.

---

## Code

```java
import java.util.ArrayList;
import java.util.List;

public static List<List<String>> solve(String s) {
    List<List<String>> result = new ArrayList<>();
    if (s == null || s.length() == 0) {
        return result;
    }
    backtrack(0, s, new ArrayList<>(), result);
    return result;
}

private static void backtrack(int start, String s, List<String> current, List<List<String>> result) {
    if (start == s.length()) {
        result.add(new ArrayList<>(current));
        return;
    }

    for (int i = start; i < s.length(); i = i + 1) {
        if (isPalindrome(s, start, i)) {
            current.add(s.substring(start, i + 1));
            backtrack(i + 1, s, current, result);
            current.remove(current.size() - 1);
        }
    }
}

private static boolean isPalindrome(String s, int left, int right) {
    while (left < right) {
        if (s.charAt(left) != s.charAt(right)) {
            return false;
        }
        left = left + 1;
        right = right - 1;
    }
    return true;
}
```
