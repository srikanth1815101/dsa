---
title: "Count Negative Numbers in Sorted Matrix - Solution"
problemUrl: "/problems/count-negative-numbers-in-sorted-matrix/"
---
<!-- All rights reserved to CSRGO DSA -->

## Explanation

The matrix has the property that each row and each column is sorted in non-increasing order.

### Staircase Traversal
We can count negative numbers in $O(m + n)$ time using the **Two-Pointer Staircase Walk**, starting from the bottom-left corner `(r, c) = (m - 1, 0)`:

1. **Evaluate Current Cell**:
   - If `grid[r][c] < 0`:
     - Because row $r$ is sorted in non-increasing order, every element to the right of column $c$ (from column $c$ to $n - 1$) is also strictly negative.
     - The number of negative elements in row $r$ from index $c$ onward is:
       $$\text{negatives in row } r = n - c$$
     - Accumulate this count:
       $$\text{count} = \text{count} + (n - c)$$
     - Move up to inspect the row above:
       $$r = r - 1$$
   - Else (`grid[r][c] >= 0`):
     - Since column $c$ is sorted non-increasingly, elements above row $r$ in column $c$ are also non-negative.
     - Move right to check the next column:
       $$c = c + 1$$

2. **Termination**:
   - The loop stops when row $r < 0$ or column $c \ge n$.
   - Return `count`.

### Complexity Analysis
- **Time Complexity**: $O(m + n)$, as each step either decrements $r$ or increments $c$.
- **Space Complexity**: $O(1)$, using only scalar pointers and an accumulator.

---

## Code

```java
public static int solve(int[][] grid) {
    if (grid == null || grid.length == 0 || grid[0].length == 0) {
        return 0;
    }

    int m = grid.length;
    int n = grid[0].length;

    int r = m - 1;
    int c = 0;
    int count = 0;

    while (r >= 0 && c < n) {
        if (grid[r][c] < 0) {
            count = count + (n - c);
            r = r - 1;
        } else {
            c = c + 1;
        }
    }

    return count;
}
```
