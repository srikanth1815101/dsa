---
title: "Trapping Rain Water - Solution"
problemUrl: "/problems/trapping-rain-water/"
---
<!-- All rights reserved to CSRGO DSA -->

## Explanation

The volume of rainwater trapped above any individual bar $i$ is governed by the heights of the tallest boundaries flanking it on either side:
$$\text{water}[i] = \max\Big(0, \, \min(\text{leftMax}_i, \, \text{rightMax}_i) - \text{height}[i]\Big)$$

Rather than precomputing prefix and suffix maximum arrays in $O(n)$ space, we can solve this in **$O(1)$ auxiliary space** using the **Two-Pointer Technique**:

1. **Two Pointers Setup**:
   - Place `left = 0` and `right = height.length - 1`.
   - Maintain `leftMax = 0` and `rightMax = 0`.
   - Maintain an accumulator `totalWater = 0`.

2. **Advancing the Smaller Boundary**:
   - While `left < right`:
     - If $\text{height}[\text{left}] \le \text{height}[\text{right}]$, the trapped water at the `left` pointer is strictly constrained by `leftMax` (since we know a boundary at least as tall as $\text{height}[\text{left}]$ exists to its right).
       - If $\text{height}[\text{left}] \ge \text{leftMax}$, update $\text{leftMax} = \text{height}[\text{left}]$.
       - Otherwise, accumulate $\text{leftMax} - \text{height}[\text{left}]$ into `totalWater`.
       - Increment `left = left + 1`.
     - Otherwise ($\text{height}[\text{left}] > \text{height}[\text{right}]$), the trapped water at the `right` pointer is strictly constrained by `rightMax`.
       - If $\text{height}[\text{right}] \ge \text{rightMax}$, update $\text{rightMax} = \text{height}[\text{right}]$.
       - Otherwise, accumulate $\text{rightMax} - \text{height}[\text{right}]$ into `totalWater`.
       - Decrement `right = right - 1`.

3. **Termination**:
   - When `left` meets `right`, all bars have been evaluated. Return `totalWater`.

### Complexity Analysis
- **Time Complexity**: $O(n)$, processing each bar exactly once in a single inward sweep.
- **Space Complexity**: $O(1)$, requiring only pointer and maximum tracking scalar variables.

---

## Code

```java
public static int solve(int[] height) {
    if (height == null || height.length <= 2) {
        return 0;
    }

    int left = 0;
    int right = height.length - 1;
    int leftMax = 0;
    int rightMax = 0;
    int totalWater = 0;

    while (left < right) {
        if (height[left] <= height[right]) {
            if (height[left] >= leftMax) {
                leftMax = height[left];
            } else {
                totalWater = totalWater + (leftMax - height[left]);
            }
            left = left + 1;
        } else {
            if (height[right] >= rightMax) {
                rightMax = height[right];
            } else {
                totalWater = totalWater + (rightMax - height[right]);
            }
            right = right - 1;
        }
    }

    return totalWater;
}
```
