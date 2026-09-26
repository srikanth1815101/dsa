---
title: "Print Increasing - Solution"
problemUrl: "/problems/print-increasing/"
---
<!-- All rights reserved to CSRGO DSA -->

## Explanation

To print numbers from `1` up to `n` using recursion, use the **post-order** recursion principle.

### Algorithm Steps
1. Define a helper recursive function `printIncreasing(n, list)`.
2. **Base Case**: If `n <= 0`, return.
3. **Recursive Call**: Call `printIncreasing(n - 1, list)` first to resolve smaller numbers `1` through `n - 1`.
4. **Work (post-order)**: After the recursive call returns from deeper frames, append `n` to the list.
5. In the main method `solve(n)`, initialize the list, call `printIncreasing(n, result)`, and return `result`.

### Complexity Analysis
- **Time Complexity**: $O(n)$, executing $n$ recursive steps.
- **Space Complexity**: $O(n)$ call stack depth.

---

## Code

```java
import java.util.ArrayList;
import java.util.List;

public static List<Integer> solve(int n) {
    List<Integer> result = new ArrayList<>();
    printIncreasing(n, result);
    return result;
}

private static void printIncreasing(int n, List<Integer> result) {
    if (n <= 0) {
        return;
    }
    printIncreasing(n - 1, result);
    result.add(n);
}
```
