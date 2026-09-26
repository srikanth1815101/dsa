---
title: "Maze Paths with Jumps - Solution"
problemUrl: "/problems/maze-paths-with-jumps/"
---
<!-- All rights reserved to CSRGO DSA -->

## Explanation

From any cell `(sr, sc)`, three directions of variable-length leaps are permitted:
1. **Horizontal**: `sc + ms` where $1 \le ms \le dc - sc$, prefix `"h" + ms`.
2. **Vertical**: `sr + ms` where $1 \le ms \le dr - sr$, prefix `"v" + ms`.
3. **Diagonal**: `sr + ms, sc + ms` where $1 \le ms \le \min(dr - sr, dc - sc)$, prefix `"d" + ms`.

### Algorithm Steps
1. **Base Case**: If `sr == dr && sc == dc`, return `[""]`.
2. Initialize `paths = new ArrayList<>()`.
3. Loop `ms` from 1 to `dc - sc` (Horizontal):
   - Recursively call `hpaths = solve(sr, sc + ms, dr, dc)`.
   - Prepend `"h" + ms` to each returned path and add to `paths`.
4. Loop `ms` from 1 to `dr - sr` (Vertical):
   - Recursively call `vpaths = solve(sr + ms, sc, dr, dc)`.
   - Prepend `"v" + ms` to each returned path and add to `paths`.
5. Loop `ms` from 1 to `Math.min(dr - sr, dc - sc)` (Diagonal):
   - Recursively call `dpaths = solve(sr + ms, sc + ms, dr, dc)`.
   - Prepend `"d" + ms` to each returned path and add to `paths`.
6. Return `paths`.

### Complexity Analysis
- **Time Complexity**: Exponential $O(3^{dr + dc})$, branching into multiple jump lengths at each coordinate.
- **Space Complexity**: $O(dr + dc)$ call stack depth plus space to store output paths.

---

## Code

```java
import java.util.ArrayList;
import java.util.List;

public static List<String> solve(int sr, int sc, int dr, int dc) {
    if (sr == dr && sc == dc) {
        List<String> base = new ArrayList<>();
        base.add("");
        return base;
    }

    List<String> paths = new ArrayList<>();

    // Horizontal moves
    for (int ms = 1; ms <= dc - sc; ms = ms + 1) {
        List<String> hpaths = solve(sr, sc + ms, dr, dc);
        for (int i = 0; i < hpaths.size(); i = i + 1) {
            paths.add("h" + ms + hpaths.get(i));
        }
    }

    // Vertical moves
    for (int ms = 1; ms <= dr - sr; ms = ms + 1) {
        List<String> vpaths = solve(sr + ms, sc, dr, dc);
        for (int i = 0; i < vpaths.size(); i = i + 1) {
            paths.add("v" + ms + vpaths.get(i));
        }
    }

    // Diagonal moves
    for (int ms = 1; ms <= dr - sr && ms <= dc - sc; ms = ms + 1) {
        List<String> dpaths = solve(sr + ms, sc + ms, dr, dc);
        for (int i = 0; i < dpaths.size(); i = i + 1) {
            paths.add("d" + ms + dpaths.get(i));
        }
    }

    return paths;
}
```
