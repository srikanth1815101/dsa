---
title: "Permutations of String - Solution"
problemUrl: "/problems/permutations-of-string/"
---
<!-- All rights reserved to CSRGO DSA -->

## Explanation

Generating all permutations can be implemented using **Backtracking with Duplicate Pruning**:

### 1. Lexicographical Sorting
First, convert string `s` into a character array `chars` and sort it alphabetically. This ensures that:
- Generated permutations naturally appear in lexicographical order.
- Duplicate characters are clustered together.

### 2. Backtracking Search
Maintain:
- A boolean array `used[]` of size $n$ to mark whether `chars[i]` is currently in the active permutation.
- A `StringBuilder` representing the permutation being built.

At each recursive step:
- If the current string length equals $n$:
  - Add `current.toString()` to the result list.
  - Return to backtrack.
- Iterate $i$ from $0$ to $n - 1$:
  - If `used[i]` is true, continue.
  - **Duplicate Pruning**: If $i > 0$, `chars[i] == chars[i - 1]`, and `!used[i - 1]`, continue (skipping duplicate branches).
  - Mark `used[i] = true`.
  - Append `chars[i]` to `current`.
  - Recurse to build the next position.
  - Backtrack: remove last character from `current` and set `used[i] = false`.

### Complexity Analysis
- **Time Complexity**: $O(n \times n!)$, where $n!$ is the maximum number of permutations and $O(n)$ time is spent copying each permutation.
- **Space Complexity**: $O(n)$ for the recursion call stack and `used` tracking array.

---

## Code

```java
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

public static List<String> solve(String s) {
    List<String> result = new ArrayList<>();
    if (s == null || s.length() == 0) {
        return result;
    }

    char[] chars = s.toCharArray();
    Arrays.sort(chars);
    boolean[] used = new boolean[chars.length];
    StringBuilder current = new StringBuilder();

    backtrack(chars, used, current, result);

    return result;
}

private static void backtrack(char[] chars, boolean[] used, StringBuilder current, List<String> result) {
    if (current.length() == chars.length) {
        result.add(current.toString());
        return;
    }

    for (int i = 0; i < chars.length; i++) {
        if (used[i]) {
            continue;
        }

        if (i > 0 && chars[i] == chars[i - 1] && !used[i - 1]) {
            continue;
        }

        used[i] = true;
        current.append(chars[i]);

        backtrack(chars, used, current, result);

        current.deleteCharAt(current.length() - 1);
        used[i] = false;
    }
}
```
