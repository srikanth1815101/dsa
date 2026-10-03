---
title: "Largest Rectangle in Binary Matrix - Solution"
problemUrl: "/problems/largest-rectangle-in-binary-matrix/"
---
<!-- All rights reserved to CSRGO DSA -->

## Explanation

We reduce this 2D matrix problem into a series of 1D Largest Rectangle in Histogram problems.

Let `heights[j]` represent the number of consecutive `'1'`s ending at column `j` in the current row.
1. When iterating row by row, if `matrix[i][j] == '1'`, we increment `heights[j] = heights[j] + 1`; if `matrix[i][j] == '0'`, we reset `heights[j] = 0`.
2. For each row, the array `heights` represents a histogram. We compute the largest rectangle area in this histogram using a monotonic increasing stack in `O(cols)` time.
3. We maintain the maximum area found across all rows.

With `R` rows and `C` columns, the total time complexity is `O(R * C)` with `O(C)` auxiliary space.

### Step-by-Step Algorithm:
1. If `matrix` is empty or has zero columns, return `0`.
2. Initialize `cols = matrix[0].length`, `heights = new int[cols]`, and `maxArea = 0`.
3. For each row `i` from `0` to `rows - 1`:
4. Update `heights[j]`: if `matrix[i][j] == '1'`, `heights[j] = heights[j] + 1`; else `heights[j] = 0`.
5. Calculate largest rectangle in histogram for `heights` using a monotonic stack.
6. Update `maxArea = Math.max(maxArea, rowArea)`.
7. Return `maxArea`.

## Code

```java
public static int solve(char[][] matrix) {
    if (matrix.length == 0 || matrix[0].length == 0) {
        return 0;
    }

    int rows = matrix.length;
    int cols = matrix[0].length;
    int[] heights = new int[cols];
    int maxArea = 0;

    for (int i = 0; i < rows; i = i + 1) {
        for (int j = 0; j < cols; j = j + 1) {
            if (matrix[i][j] == '1') {
                heights[j] = heights[j] + 1;
            } else {
                heights[j] = 0;
            }
        }
        maxArea = Math.max(maxArea, maxHistogram(heights));
    }

    return maxArea;
}

private static int maxHistogram(int[] heights) {
    Deque<Integer> stack = new ArrayDeque<>();
    int maxArea = 0;
    int n = heights.length;

    for (int i = 0; i <= n; i = i + 1) {
        int h;
        if (i == n) {
            h = 0;
        } else {
            h = heights[i];
        }

        while (!stack.isEmpty() && heights[stack.peek()] > h) {
            int height = heights[stack.pop()];
            int width;
            if (stack.isEmpty()) {
                width = i;
            } else {
                width = i - stack.peek() - 1;
            }
            maxArea = Math.max(maxArea, height * width);
        }
        stack.push(i);
    }

    return maxArea;
}
```
