---
title: "Display Array - Solution"
problemUrl: "/problems/display-array/"
---
<!-- All rights reserved to CSRGO DSA -->

## Explanation

Traversing an array recursively requires an index pointer `idx` indicating the current position being processed.

### Algorithm Steps
1. Define a helper recursive function `display(arr, idx, list)`.
2. **Base Case**: If `idx == arr.length`, return immediately.
3. **Pre-order Work**: Append `arr[idx]` to `list`.
4. **Recursive Step**: Call `display(arr, idx + 1, list)`.
5. In `solve(arr)`, initialize `result = new ArrayList<>()`, invoke `display(arr, 0, result)`, and return `result`.

### Complexity Analysis
- **Time Complexity**: $O(n)$, visiting each array element exactly once.
- **Space Complexity**: $O(n)$ recursion call stack space.

---

## Code

```java
import java.util.ArrayList;
import java.util.List;

public static List<Integer> solve(int[] arr) {
    List<Integer> result = new ArrayList<>();
    if (arr == null || arr.length == 0) {
        return result;
    }
    display(arr, 0, result);
    return result;
}

private static void display(int[] arr, int idx, List<Integer> result) {
    if (idx == arr.length) {
        return;
    }
    result.add(arr[idx]);
    display(arr, idx + 1, result);
}
```
