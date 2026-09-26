---
title: "Stair Paths - Solution"
problemUrl: "/problems/stair-paths/"
---
<!-- All rights reserved to CSRGO DSA -->

## Explanation

From stair $n$, taking a jump of size 1 leads to stair $n - 1$, jump of 2 leads to $n - 2$, and jump of 3 leads to $n - 3$.

### Algorithm Steps
1. **Base Cases**:
   - If `n == 0`, destination reached: return `[""]`.
   - If `n < 0`, invalid step: return `[]`.
2. Recursively solve for all three branch destinations:
   - `paths1 = solve(n - 1)`
   - `paths2 = solve(n - 2)`
   - `paths3 = solve(n - 3)`
3. Combine results:
   - For each path `p` in `paths1`, add `"1" + p`
   - For each path `p` in `paths2`, add `"2" + p`
   - For each path `p` in `paths3`, add `"3" + p`
4. Return the combined path list.

### Complexity Analysis
- **Time Complexity**: $O(3^n)$, proportional to the number of nodes in a 3-way branching tree.
- **Space Complexity**: $O(3^n)$ to hold all paths in memory.

---

## Code

```java
import java.util.ArrayList;
import java.util.List;

public static List<String> solve(int n) {
    if (n == 0) {
        List<String> base = new ArrayList<>();
        base.add("");
        return base;
    }
    if (n < 0) {
        return new ArrayList<>();
    }

    List<String> paths1 = solve(n - 1);
    List<String> paths2 = solve(n - 2);
    List<String> paths3 = solve(n - 3);

    List<String> paths = new ArrayList<>();

    for (int i = 0; i < paths1.size(); i = i + 1) {
        paths.add("1" + paths1.get(i));
    }
    for (int i = 0; i < paths2.size(); i = i + 1) {
        paths.add("2" + paths2.get(i));
    }
    for (int i = 0; i < paths3.size(); i = i + 1) {
        paths.add("3" + paths3.get(i));
    }

    return paths;
}
```
