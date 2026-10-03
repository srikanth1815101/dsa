---
date: 2026-10-01T01:06:00+05:30

title: "Maximum Sum Circular Subarray - Solution"
problemUrl: "/problems/maximum-sum-circular-subarray/"
weight: 6
---
<!-- All rights reserved to CSRGO DSA -->

## Explanation

A maximum sum circular subarray falls into one of two categories:
1. **Non-wrapping Subarray**: The optimal subarray lies strictly in the middle without crossing the circular boundary. This is solved by standard Kadane's algorithm to compute `maxKadane`.
2. **Wrapping Subarray**: The optimal subarray starts near the end and wraps around to the beginning. The elements excluded from this wrapping subarray form a contiguous non-wrapping subarray in the middle. Maximizing the wrapping subarray sum is equivalent to minimizing the excluded middle subarray sum:
   `wrappingMax = totalSum - minKadane`

The global answer is `Math.max(maxKadane, totalSum - minKadane)`.

**Corner Case**:
If every element in `nums` is negative, `maxKadane` is negative and `totalSum == minKadane` (which would make `totalSum - minKadane == 0`, representing an empty subarray which is invalid). In this scenario, we must return `maxKadane`.

This single-pass approach runs in `O(n)` time and requires `O(1)` additional space.

### Step-by-Step Algorithm:
1. Initialize `totalSum = 0`.
2. Initialize `currMax = 0`, `maxKadane = nums[0]`.
3. Initialize `currMin = 0`, `minKadane = nums[0]`.
4. Iterate through each element `x` in `nums`:
   - Add `x` to `totalSum`: `totalSum = totalSum + x`.
   - Update `currMax = Math.max(x, currMax + x)`.
   - Update `maxKadane = Math.max(maxKadane, currMax)`.
   - Update `currMin = Math.min(x, currMin + x)`.
   - Update `minKadane = Math.min(minKadane, currMin)`.
5. If `maxKadane < 0`, return `maxKadane`.
6. Otherwise, return `Math.max(maxKadane, totalSum - minKadane)`.

## Code

```java
public static int solve(int[] nums) {
    int totalSum = 0;
    int currMax = 0;
    int maxKadane = nums[0];
    int currMin = 0;
    int minKadane = nums[0];

    for (int i = 0; i < nums.length; i = i + 1) {
        int x = nums[i];
        totalSum = totalSum + x;

        currMax = Math.max(x, currMax + x);
        maxKadane = Math.max(maxKadane, currMax);

        currMin = Math.min(x, currMin + x);
        minKadane = Math.min(minKadane, currMin);
    }

    if (maxKadane < 0) {
        return maxKadane;
    }

    return Math.max(maxKadane, totalSum - minKadane);
}
```
