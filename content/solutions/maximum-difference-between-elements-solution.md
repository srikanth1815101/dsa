---
date: 2026-10-01T01:10:00+05:30

title: "Maximum Difference Between Elements - Solution"
problemUrl: "/problems/maximum-difference-between-elements/"
weight: 10
---
<!-- All rights reserved to CSRGO DSA -->

## Explanation

The problem asks for `max(nums[j] - nums[i])` such that `i < j` and `nums[i] < nums[j]`.

As we iterate from left to right, each element `nums[j]` can potentially serve as the larger value. To maximize `nums[j] - nums[i]`, `nums[i]` should be the smallest element observed prior to index `j`.

We maintain a running minimum variable `minVal` initialized to `nums[0]`, and a maximum difference tracker `maxDiff` initialized to `-1`.
For each subsequent element `nums[j]`:
- If `nums[j] > minVal`, we evaluate whether `nums[j] - minVal` exceeds `maxDiff`.
- If `nums[j] < minVal`, we update `minVal = nums[j]`.

This single pass yields an optimal `O(n)` time complexity and `O(1)` auxiliary space complexity.

### Step-by-Step Algorithm:
1. Initialize `minVal = nums[0]` and `maxDiff = -1`.
2. Iterate `j` from `1` to `nums.length - 1`:
   - If `nums[j] > minVal`, update `maxDiff = Math.max(maxDiff, nums[j] - minVal)`.
   - If `nums[j] < minVal`, update `minVal = nums[j]`.
3. Return `maxDiff`.

## Code

```java
public static int solve(int[] nums) {
    int minVal = nums[0];
    int maxDiff = -1;

    for (int j = 1; j < nums.length; j = j + 1) {
        if (nums[j] > minVal) {
            maxDiff = Math.max(maxDiff, nums[j] - minVal);
        } else if (nums[j] < minVal) {
            minVal = nums[j];
        }
    }

    return maxDiff;
}
```
