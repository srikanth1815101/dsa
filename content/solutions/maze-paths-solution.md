---
title: "Maze Paths - Solution"
problemUrl: "/problems/maze-paths/"
---
<!-- All rights reserved to CSRGO DSA -->

## Explanation

From any grid cell `(sr, sc)`:
- Moving horizontally takes you to `(sr, sc + 1)`.
- Moving vertically takes you to `(sr + 1, sc)`.

### Algorithm Steps
1. **Base Case**:
   - If `sr == dr && sc == dc`: Destination reached; return `[""]`.
   - If `sr > dr || sc > dc`: Out of bounds; return `[]`.
2. Recursively find paths moving horizontally:
   - `hpaths = solve(sr, sc + 1, dr, dc)`
3. Recursively find paths moving vertically:
   - `vpaths = solve(sr + 1, sc, dr, dc)`
4. Combine results:
   - For each path `p` in `hpaths`, add `"h" + p`
   - For each path `p` in `vpaths`, add `"v" + p`
5. Return the aggregated path list.

### Complexity Analysis
- **Time Complexity**: $O(\binom{R + C}{R})$, proportional to the total number of paths where $R = dr - sr$ and $C = dc - sc$.
- **Space Complexity**: $O(R + C)$ call stack depth plus space to store generated paths.

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
    if (sr > dr || sc > dc) {
        return new ArrayList<>();
    }

    List<String> hpaths = solve(sr, sc + 1, dr, dc);
    List<String> vpaths = solve(sr + 1, sc, dr, dc);

    List<String> paths = new ArrayList<>();

    for (int i = 0; i < hpaths.size(); i = i + 1) {
        paths.add("h" + hpaths.get(i));
    }
    for (int i = 0; i < vpaths.size(); i = i + 1) {
        paths.add("v" + vpaths.get(i));
    }

    return paths;
}
```
