---
title: "Subsets using Bitmask - Solution"
date: 2026-10-03T11:20:00+05:30
problemUrl: "/problems/subsets-using-bitmask/"
weight: 73
---
<!-- All rights reserved to CSRGO DSA -->

## Explanation

The problem asks for all $2^n$ subsets of an array of $n$ unique integers.

Every subset corresponds to an $n$-bit binary number (a **bitmask**) in the range $[0, 2^n - 1]$:
- If the $i^{th}$ bit of the bitmask is `1`, the element `nums[i]` is included in the current subset.
- If the $i^{th}$ bit is `0`, the element `nums[i]` is excluded.

For example, for `nums = [1, 2, 3]` ($n = 3$, $2^3 = 8$ subsets):
- `mask = 0` (`000`): `[]`
- `mask = 1` (`001`): `[1]`
- `mask = 2` (`010`): `[2]`
- `mask = 3` (`011`): `[1, 2]`
- `mask = 4` (`100`): `[3]`
- `mask = 5` (`101`): `[1, 3]`
- `mask = 6` (`110`): `[2, 3]`
- `mask = 7` (`111`): `[1, 2, 3]`

By iterating `mask` from `0` to `(1 << n) - 1` and checking each bit with `(mask & (1 << i)) != 0`, we construct each subset deterministically without recursion.

### Step-by-Step Algorithm:
1. Let $n$ be the length of `nums`.
2. Compute `totalSubsets = 1 << n`.
3. Initialize an empty list of lists `result`.
4. Iterate `mask` from `0` to `totalSubsets - 1`:
   - Initialize an empty list `subset`.
   - For `i` from `0` to $n - 1$:
     - If `(mask & (1 << i)) != 0`, append `nums[i]` to `subset`.
   - Append `subset` to `result`.
5. Return `result`.

## Code

```java
public static List<List<Integer>> solve(int[] nums) {
    List<List<Integer>> result = new ArrayList<>();
    int n = nums.length;
    int totalSubsets = 1 << n;

    for (int mask = 0; mask < totalSubsets; mask = mask + 1) {
        List<Integer> subset = new ArrayList<>();
        for (int i = 0; i < n; i = i + 1) {
            if ((mask & (1 << i)) != 0) {
                subset.add(nums[i]);
            }
        }
        result.add(subset);
    }

    return result;
}
```
