---
title: "Find Pivot Index - Solution"
date: 2026-10-03T11:20:00+05:30
problemUrl: "/problems/find-pivot-index/"
weight: 85
---
<!-- All rights reserved to CSRGO DSA -->

## Explanation

Let $S$ denote the total sum of all elements in `nums`. At any candidate pivot index $i$, the sum of all elements strictly to the left is $\text{leftSum}$.

The sum of all elements strictly to the right of index $i$ is:
$$\text{rightSum} = S - \text{leftSum} - nums[i]$$

The condition for $i$ to be the pivot index is:
$$\text{leftSum} = S - \text{leftSum} - nums[i]$$

1. First, calculate the total sum of the array: `totalSum`.
2. Initialize `leftSum = 0`.
3. Iterate from the first index ($i = 0$) to the last ($i = n - 1$):
   - Check if `leftSum == totalSum - leftSum - nums[i]`. If true, return $i$ immediately because we want the leftmost index.
   - Add `nums[i]` to `leftSum`.
4. If the loop completes without finding a pivot, return `-1`.

### Step-by-Step Algorithm:
1. Validate input: if `nums == null || nums.length == 0`, return `-1`.
2. Compute `totalSum`: loop through `nums` and add each value.
3. Initialize `leftSum = 0`.
4. Iterate index `i` from `0` to `nums.length - 1`:
   - If `leftSum == totalSum - leftSum - nums[i]`, return `i`.
   - Update `leftSum = leftSum + nums[i]`.
5. Return `-1`.

## Code

```java
public static int solve(int[] nums) {
    if (nums == null || nums.length == 0) {
        return -1;
    }

    int totalSum = 0;
    for (int i = 0; i < nums.length; i = i + 1) {
        totalSum = totalSum + nums[i];
    }

    int leftSum = 0;
    for (int i = 0; i < nums.length; i = i + 1) {
        if (leftSum == totalSum - leftSum - nums[i]) {
            return i;
        }
        leftSum = leftSum + nums[i];
    }

    return -1;
}
```
