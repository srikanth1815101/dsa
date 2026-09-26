---
title: "Tower of Hanoi - Solution"
problemUrl: "/problems/tower-of-hanoi/"
---
<!-- All rights reserved to CSRGO DSA -->

## Explanation

The Tower of Hanoi with $n$ disks is solved by divide-and-conquer:
1. Recursively move top $n - 1$ disks from `src` to `helper` using `dest`.
2. Move disk $n$ directly from `src` to `dest`.
3. Recursively move $n - 1$ disks from `helper` to `dest` using `src`.

### Algorithm Steps
1. **Base Case**: If `n == 0`, return.
2. Call `toh(n - 1, src, helper, dest, result)`.
3. Record move: `result.add(n + "[" + src + " -> " + dest + "]")`.
4. Call `toh(n - 1, helper, dest, src, result)`.

### Complexity Analysis
- **Time Complexity**: $O(2^n)$, because moving $n$ disks requires exactly $2^n - 1$ moves.
- **Space Complexity**: $O(n)$ call stack depth.

---

## Code

```java
import java.util.ArrayList;
import java.util.List;

public static List<String> solve(int n, int src, int dest, int helper) {
    List<String> result = new ArrayList<>();
    toh(n, src, dest, helper, result);
    return result;
}

private static void toh(int n, int src, int dest, int helper, List<String> result) {
    if (n == 0) {
        return;
    }

    toh(n - 1, src, helper, dest, result);
    result.add(n + "[" + src + " -> " + dest + "]");
    toh(n - 1, helper, dest, src, result);
}
```
