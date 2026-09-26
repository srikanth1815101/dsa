---
title: "Chocolate Distribution - Solution"
problemUrl: "/problems/chocolate-distribution/"
---
<!-- All rights reserved to CSRGO DSA -->

## Explanation

To minimize the difference between the maximum and minimum elements chosen among $m$ elements, we sort the array and apply a **Sliding Window of size $m$**:

1. **Sorting**:
   - Sort the array `nums` in non-decreasing order:
     $$\text{nums}[0] \le \text{nums}[1] \le \dots \le \text{nums}[n-1]$$
   - In any contiguous subarray of size $m$ starting at index $i$, the minimum element is $\text{nums}[i]$ and the maximum element is $\text{nums}[i + m - 1]$.

2. **Sliding Window Evaluation**:
   - Maintain `minDiff = Integer.MAX_VALUE`.
   - Slide a window of size $m$ starting from $i = 0$ up to $i + m - 1 < n$:
     $$\text{diff} = \text{nums}[i + m - 1] - \text{nums}[i]$$
     $$\text{minDiff} = \min(\text{minDiff}, \, \text{diff})$$

3. **Optimality**:
   - Because the array is sorted, any subset of $m$ elements will have its minimum at its lower bound and maximum at its upper bound. The optimal subset of $m$ elements is always contiguous in the sorted array.

### Complexity Analysis
- **Time Complexity**: $O(n \log n)$, dominated by sorting $n$ elements. The subsequent sliding window scan requires $O(n)$ time.
- **Space Complexity**: $O(1)$ auxiliary space.

---

## Code

```java
public static int solve(int[] nums, int m) {
    if (nums == null || m == 0 || nums.length == 0 || m > nums.length) {
        return 0;
    }

    Arrays.sort(nums);

    int minDiff = Integer.MAX_VALUE;

    for (int i = 0; i + m - 1 < nums.length; i++) {
        int diff = nums[i + m - 1] - nums[i];

        if (diff < minDiff) {
            minDiff = diff;
        }
    }

    return minDiff;
}
```
