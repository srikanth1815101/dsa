---
title: "Minimum Number of Arrows to Burst Balloons - Solution"
problemUrl: "/problems/minimum-number-of-arrows-to-burst-balloons/"
---
<!-- All rights reserved to CSRGO DSA -->

## Explanation

This is the classic interval scheduling / point-cover greedy problem.

1. **Sort by End Coordinate**: Sort balloons by `xend` ascending using `Integer.compare(a[1], b[1])` to prevent 32-bit integer subtraction overflow when handling negative numbers.
2. **Greedy Arrow Placement**: We shoot the first arrow at the end of the first balloon: `arrowPos = points[0][1]`.
3. For each subsequent balloon `points[i]`:
   - If `points[i][0] > arrowPos`, the balloon starts after our last arrow, so it cannot be burst by it. We shoot a new arrow at its end: `arrowPos = points[i][1]` and increment `arrows = arrows + 1`.
   - Otherwise, `points[i][0] <= arrowPos`, so it is already burst by the current arrow.

Sorting takes `O(n log n)` time, followed by a linear `O(n)` scan with `O(1)` auxiliary space.

### Step-by-Step Algorithm:
1. If `points.length == 0`, return `0`.
2. Sort `points` by end coordinate `xend` ascending: `Arrays.sort(points, (a, b) -> Integer.compare(a[1], b[1]))`.
3. Initialize `arrows = 1` and `arrowPos = points[0][1]`.
4. For index `i` from `1` to `points.length - 1`:
5. If `points[i][0] > arrowPos`, shoot a new arrow: `arrows = arrows + 1` and `arrowPos = points[i][1]`.
6. Return `arrows`.

## Code

```java
public static int solve(int[][] points) {
    if (points.length == 0) {
        return 0;
    }

    Arrays.sort(points, (a, b) -> Integer.compare(a[1], b[1]));

    int arrows = 1;
    int arrowPos = points[0][1];

    for (int i = 1; i < points.length; i = i + 1) {
        if (points[i][0] > arrowPos) {
            arrows = arrows + 1;
            arrowPos = points[i][1];
        }
    }

    return arrows;
}
```
