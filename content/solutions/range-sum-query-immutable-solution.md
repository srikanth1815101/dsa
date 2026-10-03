---
title: "Range Sum Query (Immutable) - Solution"
date: 2026-10-03T11:20:00+05:30
problemUrl: "/problems/range-sum-query-immutable/"
weight: 82
---
<!-- All rights reserved to CSRGO DSA -->

## Explanation

The goal is to answer multiple range sum queries efficiently. A naive approach of looping through indices `left` to `right` for each query takes $\mathcal{O}(k)$ time per query, which becomes prohibitive with many queries ($\mathcal{O}(Q \cdot n)$).

Using a **Prefix Sum Array**, each query can be evaluated in $\mathcal{O}(1)$ time after an initial $\mathcal{O}(n)$ preprocessing step:
1. Construct a prefix sum array `prefix` of size $n + 1$, where `prefix[i]` stores the sum of the first `i` elements (`nums[0]` through `nums[i - 1]`), with `prefix[0] = 0`.
2. For each element `nums[i]`, compute `prefix[i + 1] = prefix[i] + nums[i]`.
3. The sum of any subarray from index `left` to `right` inclusive is given by:
   $$\text{sumRange}(left, right) = prefix[right + 1] - prefix[left]$$
4. Execute this formula for every query and collect the results in an output array.

### Step-by-Step Algorithm:
1. Check for null or empty inputs: if `queries == null || queries.length == 0`, return an empty array `new int[0]`.
2. Let $n$ be the length of `nums`. If `nums == null || n == 0`, return an empty array `new int[0]`.
3. Create an integer array `prefix` of length $n + 1$.
4. Populate `prefix`: for $i = 0$ to $n - 1$, set `prefix[i + 1] = prefix[i] + nums[i]`.
5. Allocate an integer array `results` of length `queries.length`.
6. For each query $q = 0$ to `queries.length - 1`:
   - Retrieve `left = queries[q][0]` and `right = queries[q][1]`.
   - Calculate `results[q] = prefix[right + 1] - prefix[left]`.
7. Return `results`.

## Code

```java
public static int[] solve(int[] nums, int[][] queries) {
    if (queries == null || queries.length == 0) {
        return new int[0];
    }
    if (nums == null || nums.length == 0) {
        return new int[0];
    }

    int n = nums.length;
    int[] prefix = new int[n + 1];

    for (int i = 0; i < n; i = i + 1) {
        prefix[i + 1] = prefix[i] + nums[i];
    }

    int[] results = new int[queries.length];
    for (int q = 0; q < queries.length; q = q + 1) {
        int left = queries[q][0];
        int right = queries[q][1];
        results[q] = prefix[right + 1] - prefix[left];
    }

    return results;
}
```
