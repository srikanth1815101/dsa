---
title: "Print Decreasing - Solution"
problemUrl: "/problems/print-decreasing/"
---
<!-- All rights reserved to CSRGO DSA -->

## Explanation

The problem asks to output numbers from `n` down to `1` using recursion.

### Algorithm Steps
1. Define a recursive helper function `helper(n, list)`.
2. **Base Case**: If `n <= 0`, return immediately.
3. **Work (pre-order)**: Add `n` to the list (or print `n`).
4. **Recursive Call**: Call `helper(n - 1, list)`.
5. Return the populated list from `solve(n)`.

### Complexity Analysis
- **Time Complexity**: $O(n)$, executing exactly $n$ recursive calls.
- **Space Complexity**: $O(n)$ recursion call stack space.

---

## Code

```java
import java.util.ArrayList;
import java.util.List;

public static List<Integer> solve(int n) {
    List<Integer> result = new ArrayList<>();
    printDecreasing(n, result);
    return result;
}

private static void printDecreasing(int n, List<Integer> result) {
    if (n <= 0) {
        return;
    }
    result.add(n);
    printDecreasing(n - 1, result);
}
```
