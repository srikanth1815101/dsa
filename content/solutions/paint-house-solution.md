---
title: "Paint House - Solution"
problemUrl: "/problems/paint-house/"
---
<!-- All rights reserved to CSRGO DSA -->

## Explanation

We maintain the minimum cost to paint houses up to index `i` with each specific color:

1. **State Definition**:
   - `red`: minimum cost ending with color `0` (Red) at the current house.
   - `blue`: minimum cost ending with color `1` (Blue) at the current house.
   - `green`: minimum cost ending with color `2` (Green) at the current house.
2. **Base Case**: For house `0`, `red = costs[0][0]`, `blue = costs[0][1]`, and `green = costs[0][2]`.
3. **Transition**: For each subsequent house `i` from `1` to `n - 1`:
   - `newRed = costs[i][0] + Math.min(blue, green)`
   - `newBlue = costs[i][1] + Math.min(red, green)`
   - `newGreen = costs[i][2] + Math.min(red, blue)`
4. The minimum among the three colors at the final house yields the overall minimum cost in $O(n)$ time and $O(1)$ space.

### Step-by-Step Algorithm:
1. If `costs == null || costs.length == 0`, return `0`.
2. Initialize `int red = costs[0][0]`, `int blue = costs[0][1]`, and `int green = costs[0][2]`.
3. Loop `i` from `1` to `costs.length - 1`:
   - Compute `int nextRed = costs[i][0] + Math.min(blue, green)`.
   - Compute `int nextBlue = costs[i][1] + Math.min(red, green)`.
   - Compute `int nextGreen = costs[i][2] + Math.min(red, blue)`.
   - Update `red = nextRed`, `blue = nextBlue`, `green = nextGreen`.
4. Return `Math.min(red, Math.min(blue, green))`.

## Code

```java
public static int solve(int[][] costs) {
    if (costs == null || costs.length == 0) {
        return 0;
    }

    int red = costs[0][0];
    int blue = costs[0][1];
    int green = costs[0][2];

    for (int i = 1; i < costs.length; i = i + 1) {
        int nextRed = costs[i][0] + Math.min(blue, green);
        int nextBlue = costs[i][1] + Math.min(red, green);
        int nextGreen = costs[i][2] + Math.min(red, blue);

        red = nextRed;
        blue = nextBlue;
        green = nextGreen;
    }

    return Math.min(red, Math.min(blue, green));
}
```
