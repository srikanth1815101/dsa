---
title: "Largest Rectangle in Histogram - Solution"
problemUrl: "/problems/largest-rectangle-in-histogram/"
---

## Explanation

We use a **monotonic increasing stack** of indices. The key insight is: for each bar, we want to find how far it can extend left and right.

**Algorithm:**
1. Iterate through bars, maintaining stack of increasing heights
2. When we encounter a shorter bar, pop taller bars and calculate their areas
3. The width extends from the current position back to the new top of stack
4. After processing all bars, pop remaining elements

## Code

```java
class Solution {
    public int largestRectangleArea(int[] heights) {
        Stack<Integer> stack = new Stack<>();
        int maxArea = 0;
        
        for (int i = 0; i <= heights.length; i++) {
            int h = (i == heights.length) ? 0 : heights[i];
            
            while (!stack.isEmpty() && heights[stack.peek()] > h) {
                int height = heights[stack.pop()];
                int width = stack.isEmpty() ? i : i - stack.peek() - 1;
                maxArea = Math.max(maxArea, height * width);
            }
            
            stack.push(i);
        }
        
        return maxArea;
    }
}
```
