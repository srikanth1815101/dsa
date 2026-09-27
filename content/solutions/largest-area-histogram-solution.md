---
title: "Largest Area Histogram - Solution"
problemUrl: "/problems/largest-area-histogram/"
---
<!-- All rights reserved to CSRGO DSA -->

## Explanation

For any bar at index `i` with height `heights[i]`, we can determine the largest rectangle that has height equal to `heights[i]` by finding:
1. The first bar to the left that is strictly shorter than `heights[i]` (index `leftIndex`).
2. The first bar to the right that is strictly shorter than `heights[i]` (index `rightIndex`).

The width of this rectangle is `rightIndex - leftIndex - 1`. The area is therefore `heights[i] * (rightIndex - leftIndex - 1)`.

We can compute the largest rectangle efficiently in a single pass using a monotonic stack that stores bar indices in ascending order of height. When a bar is encountered that is shorter than the bar at the top of the stack, the bar at the top is popped. For the popped bar, the current index is its right boundary, and the new top of the stack is its left boundary.

### Step-by-Step Algorithm:
1. Initialize an integer variable `maxArea = 0`.
2. Initialize an empty stack of indices.
3. Iterate index `i` from `0` up to `heights.length`:
   - Define `currentHeight = (i == heights.length) ? 0 : heights[i]`.
   - While the stack is not empty and `currentHeight < heights[stack.peek()]`:
     - Pop `topIndex` from the stack.
     - Set `height = heights[topIndex]`.
     - Set `width = stack.isEmpty() ? i : i - stack.peek() - 1`.
     - Update `maxArea = Math.max(maxArea, height * width)`.
   - Push `i` onto the stack.
4. Return `maxArea`.

## Code

```java
public static int solve(int[] heights) {
    int n = heights.length;
    int maxArea = 0;
    Stack<Integer> stack = new Stack<>();
    for (int i = 0; i <= n; i = i + 1) {
        int currentHeight = (i == n) ? 0 : heights[i];
        while (!stack.isEmpty() && currentHeight < heights[stack.peek()]) {
            int h = heights[stack.pop()];
            int w = stack.isEmpty() ? i : (i - stack.peek() - 1);
            int area = h * w;
            if (area > maxArea) {
                maxArea = area;
            }
        }
        stack.push(i);
    }
    return maxArea;
}
```
