---
title: "Container With Most Water - Solution"
problemUrl: "/problems/container-with-most-water/"
---
<!-- All rights reserved to CSRGO DSA -->

## Explanation

The area formed between any two vertical lines at indices `left` and `right` is given by:
$$\text{Area} = (\text{right} - \text{left}) \times \min(\text{height}[\text{left}], \, \text{height}[\text{right}])$$

To achieve an optimal $O(n)$ solution, we utilize a **Greedy Two-Pointer Approach**:

1. **Initial State**:
   - Place `left = 0` and `right = height.length - 1`.
   - This starts with the maximum possible horizontal width $(\text{right} - \text{left})$.

2. **Greedy Pointer Movement**:
   - The current area is limited by the shorter of the two lines: $\min(\text{height}[\text{left}], \, \text{height}[\text{right}])$.
   - If we were to move the taller line inward:
     - The width $(\text{right} - \text{left})$ would decrease by 1.
     - The bounding height would still be limited by the shorter line (or could become even shorter).
     - Thus, moving the taller line can **never** result in a larger area.
   - The only possibility of discovering a larger area is to move the **shorter line inward** in the hope of finding a significantly taller boundary that overcomes the reduced width.

3. **Algorithm**:
   - While `left < right`:
     - Calculate $\text{currentArea} = (\text{right} - \text{left}) \times \min(\text{height}[\text{left}], \text{height}[\text{right}])$.
     - Update $\text{maxWater} = \max(\text{maxWater}, \text{currentArea})$.
     - If $\text{height}[\text{left}] < \text{height}[\text{right}]$, increment `left = left + 1`.
     - Otherwise, decrement `right = right - 1`.

### Complexity Analysis
- **Time Complexity**: $O(n)$, since each step moves either the `left` or `right` pointer inward by 1 until they meet.
- **Space Complexity**: $O(1)$, using only scalar pointer and area tracking variables.

---

## Code

```java
public static int solve(int[] height) {
    if (height == null || height.length < 2) {
        return 0;
    }

    int left = 0;
    int right = height.length - 1;
    int maxWater = 0;

    while (left < right) {
        int width = right - left;
        int currentHeight = Math.min(height[left], height[right]);
        int currentArea = width * currentHeight;

        if (currentArea > maxWater) {
            maxWater = currentArea;
        }

        if (height[left] < height[right]) {
            left = left + 1;
        } else {
            right = right - 1;
        }
    }

    return maxWater;
}
```
