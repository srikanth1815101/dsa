---
title: "Maximum Subarray (Kadane) - Solution"
problemUrl: "/problems/maximum-subarray-kadane/"
---
<!-- All rights reserved to CSRGO DSA -->

## Explanation

The optimal technique to find the maximum contiguous subarray sum is **Kadane's Algorithm**, an elegant dynamic programming approach operating in $O(n)$ time and $O(1)$ auxiliary space.

1. **State Definition**:
   At each index $i$, we consider the maximum subarray sum ending at index $i$, denoted as $\text{currentSum}$:
   $$\text{currentSum}_i = \max(\text{nums}[i], \text{currentSum}_{i-1} + \text{nums}[i])$$
   This decision corresponds to either:
   - Starting a fresh subarray at `nums[i]`.
   - Extending the existing subarray ending at $i-1$.

2. **Global Maximum**:
   We maintain a running variable $\text{maxSum}$ tracking the overall highest sum discovered across all indices:
   $$\text{maxSum} = \max(\text{maxSum}, \text{currentSum})$$

3. **Initialization**:
   - Initialize both `currentSum` and `maxSum` to `nums[0]`.
   - This ensures the algorithm handles arrays containing all negative numbers correctly.

### Complexity Analysis
- **Time Complexity**: $O(n)$, traversing through the input array once.
- **Space Complexity**: $O(1)$, utilizing constant extra variables.

---

## Code

```java
public static int solve(int[] nums) {
    if (nums == null || nums.length == 0) {
        return 0;
    }

    int currentSum = nums[0];
    int maxSum = nums[0];

    for (int i = 1; i < nums.length; i++) {
        currentSum = Math.max(nums[i], currentSum + nums[i]);
        maxSum = Math.max(maxSum, currentSum);
    }

    return maxSum;
}
```
