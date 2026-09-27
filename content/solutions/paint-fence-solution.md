---
title: "Paint Fence - Solution"
problemUrl: "/problems/paint-fence/"
---
<!-- All rights reserved to CSRGO DSA -->

## Explanation

The problem asks for the number of ways to paint `n` fence posts using `k` colors such that at most two adjacent posts share the same color.

At each step `i` (from post `3` to `n`), the valid colorings can be partitioned into two mutually exclusive states:
1. `same`: The current post `i` has the same color as post `i - 1`. This requires post `i - 1` and post `i - 2` to have had different colors. Thus, `newSame = diff`.
2. `diff`: The current post `i` has a different color from post `i - 1`. This post can take any of the `(k - 1)` distinct colors, following any valid coloring of the previous post. Thus, `newDiff = (same + diff) * (k - 1)`.

By storing only the previous `same` and `diff` counts, we achieve $O(n)$ time complexity and $O(1)$ auxiliary space.

### Step-by-Step Algorithm:
1. If `n == 0 || k == 0`, return `0`.
2. If `n == 1`, return `k`.
3. Initialize `same = k` and `diff = k * (k - 1)` representing the states for `2` posts.
4. Loop `i` from `3` up to `n`:
   - Calculate `newSame = diff`.
   - Calculate `newDiff = (same + diff) * (k - 1)`.
   - Update `same = newSame` and `diff = newDiff`.
5. Return `same + diff`.

## Code

```java
public static int solve(int n, int k) {
    if (n == 0 || k == 0) {
        return 0;
    }
    if (n == 1) {
        return k;
    }

    int same = k;
    int diff = k * (k - 1);

    for (int i = 3; i <= n; i = i + 1) {
        int newSame = diff;
        int newDiff = (same + diff) * (k - 1);

        same = newSame;
        diff = newDiff;
    }

    return same + diff;
}
```
