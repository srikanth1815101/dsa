---
title: "Print ZigZag - Solution"
problemUrl: "/problems/print-zigzag/"
---
<!-- All rights reserved to CSRGO DSA -->

## Explanation

The Print ZigZag problem illustrates the three phases of recursion execution:
1. **Pre-call**: Code executed before any recursive call.
2. **In-call**: Code executed between recursive calls.
3. **Post-call**: Code executed after all recursive calls.

### Algorithm Steps
1. **Base Case**: If `n == 0`, return immediately.
2. Append `n` to the list (Pre-order).
3. Recursively call `zigzag(n - 1, list)` (Left branch).
4. Append `n` to the list (In-order).
5. Recursively call `zigzag(n - 1, list)` (Right branch).
6. Append `n` to the list (Post-order).

### Complexity Analysis
- **Time Complexity**: $O(2^n)$, because each call branches into two recursive calls of size $n - 1$. Specifically, the number of nodes in the recursion tree is $2^{n + 1} - 1$.
- **Space Complexity**: $O(n)$, corresponding to the maximum depth of the call stack.

---

## Code

```java
import java.util.ArrayList;
import java.util.List;

public static List<Integer> solve(int n) {
    List<Integer> result = new ArrayList<>();
    zigzag(n, result);
    return result;
}

private static void zigzag(int n, List<Integer> result) {
    if (n == 0) {
        return;
    }

    result.add(n);
    zigzag(n - 1, result);
    result.add(n);
    zigzag(n - 1, result);
    result.add(n);
}
```
