---
title: "Trapping Rain Water - Solution"
problemUrl: "/problems/trapping-rain-water/"
---

## Explanation

The key insight is that water at any position depends on the **minimum of the maximum heights** to its left and right, minus the current height.

**Two-pointer approach:**
1. Start with pointers at both ends, track maxLeft and maxRight
2. Process the side with the smaller max (water level is limited by the smaller side)
3. If current height < local max, water is trapped; otherwise update local max
4. Move the pointer inward and repeat

## Code

```java
class Solution {
    public int trap(int[] height) {
        int left = 0, right = height.length - 1;
        int leftMax = 0, rightMax = 0;
        int water = 0;
        
        while (left < right) {
            if (height[left] < height[right]) {
                if (height[left] >= leftMax) {
                    leftMax = height[left];
                } else {
                    water += leftMax - height[left];
                }
                left++;
            } else {
                if (height[right] >= rightMax) {
                    rightMax = height[right];
                } else {
                    water += rightMax - height[right];
                }
                right--;
            }
        }
        
        return water;
    }
}
```
