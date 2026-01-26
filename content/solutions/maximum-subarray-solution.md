---
title: "Maximum Subarray - Solution"
problemUrl: "/problems/maximum-subarray/"
---

## Explanation

This is a classic problem solved by **Kadane's Algorithm**. The key insight is: at each position, we decide whether to extend the current subarray or start a new one.

**Intuition:** If the sum of elements before current position is negative, it can only decrease our total. So we should start fresh from the current element.

**Algorithm:**
1. Initialize `currentSum` and `maxSum` with the first element
2. For each subsequent element, `currentSum = max(nums[i], currentSum + nums[i])`
3. Update `maxSum` if `currentSum` is larger
4. Return `maxSum`

## Code

```java
class Solution {
    public int maxSubArray(int[] nums) {
        int maxSum = nums[0];
        int currentSum = nums[0];
        for (int i = 1; i < nums.length; i++) {
            currentSum = Math.max(nums[i], currentSum + nums[i]);
            maxSum = Math.max(maxSum, currentSum);
        }
        return maxSum;
    }
}
```
