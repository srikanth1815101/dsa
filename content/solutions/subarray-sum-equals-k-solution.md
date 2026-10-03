---
date: 2026-10-01T01:05:00+05:30

title: "Subarray Sum Equals K - Solution"
problemUrl: "/problems/subarray-sum-equals-k/"
weight: 5
---
<!-- All rights reserved to CSRGO DSA -->

## Explanation

Let `prefixSum[j]` represent the cumulative sum from index `0` to `j`. The sum of any contiguous subarray from index `i` to `j` is:
`sum(nums[i..j]) = prefixSum[j] - prefixSum[i - 1]`

For this subarray sum to equal `k`:
`prefixSum[j] - prefixSum[i - 1] = k`
which rearranges to:
`prefixSum[i - 1] = prefixSum[j] - k`

This means that while scanning through the array, at each index `j` with running sum `currentSum`, every prior prefix sum equal to `currentSum - k` forms a valid subarray ending at `j`.

By maintaining a hash map of prefix sum frequencies with initial entry `{0: 1}` (representing an empty prefix before index 0), we can count valid subarrays in `O(n)` time and `O(n)` space.

### Step-by-Step Algorithm:
1. Initialize a hash map `prefixCounts` and insert `(0, 1)`.
2. Initialize `currentSum = 0` and `count = 0`.
3. Iterate through each element `num` in `nums`:
   - Add `num` to `currentSum`: `currentSum = currentSum + num`.
   - If `prefixCounts` contains `currentSum - k`, add its frequency to `count`:
     `count = count + prefixCounts.get(currentSum - k)`.
   - Update the frequency of `currentSum` in `prefixCounts`:
     `prefixCounts.put(currentSum, prefixCounts.getOrDefault(currentSum, 0) + 1)`.
4. Return `count`.

## Code

```java
public static int solve(int[] nums, int k) {
    Map<Integer, Integer> prefixCounts = new HashMap<>();
    prefixCounts.put(0, 1);

    int currentSum = 0;
    int count = 0;

    for (int i = 0; i < nums.length; i = i + 1) {
        currentSum = currentSum + nums[i];

        if (prefixCounts.containsKey(currentSum - k)) {
            count = count + prefixCounts.get(currentSum - k);
        }

        prefixCounts.put(currentSum, prefixCounts.getOrDefault(currentSum, 0) + 1);
    }

    return count;
}
```
