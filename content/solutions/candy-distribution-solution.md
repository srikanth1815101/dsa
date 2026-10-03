---
title: "Candy Distribution - Solution"
date: 2026-10-03T11:20:00+05:30
problemUrl: "/problems/candy-distribution/"
weight: 39
---
<!-- All rights reserved to CSRGO DSA -->

## Explanation

Given an array of children's ratings, find the minimum total candies needed such that every child gets at least 1 candy, and any child with a higher rating than their immediate left or right neighbor gets strictly more candies than that neighbor.



The two neighbor constraints can be decoupled into two independent directional scans:
1. **Left-to-Right Pass:** Ensure each child has more candies than their left neighbor if their rating is higher:
   - If `ratings[i] > ratings[i - 1]`, then `candies[i] = candies[i - 1] + 1`.
2. **Right-to-Left Pass:** Ensure each child has more candies than their right neighbor if their rating is higher:
   - If `ratings[i] > ratings[i + 1]`, then `candies[i] = Math.max(candies[i], candies[i + 1] + 1)`.
3. Taking the maximum in the second pass simultaneously satisfies both left and right constraints while keeping the candy allocation strictly minimal.

### Step-by-Step Algorithm:
1. If `ratings` is null or empty, return 0.
2. Let `n = ratings.length`. Initialize an integer array `candies` of size `n` and fill every entry with `1`.
3. Perform the left-to-right pass:
   - For `i` from `1` to `n - 1`:
     - If `ratings[i] > ratings[i - 1]`:
       - `candies[i] = candies[i - 1] + 1`.
4. Perform the right-to-left pass:
   - For `i` from `n - 2` down to `0`:
     - If `ratings[i] > ratings[i + 1]`:
       - `candies[i] = Math.max(candies[i], candies[i + 1] + 1)`.
5. Sum up all values in `candies` using an accumulator `total = total + candies[i]`.
6. Return `total`.

## Code

```java
public static int solve(int[] ratings) {
    if (ratings == null || ratings.length == 0) {
        return 0;
    }

    int n = ratings.length;
    int[] candies = new int[n];
    Arrays.fill(candies, 1);

    for (int i = 1; i < n; i = i + 1) {
        if (ratings[i] > ratings[i - 1]) {
            candies[i] = candies[i - 1] + 1;
        }
    }

    for (int i = n - 2; i >= 0; i = i - 1) {
        if (ratings[i] > ratings[i + 1]) {
            candies[i] = Math.max(candies[i], candies[i + 1] + 1);
        }
    }

    int total = 0;
    for (int i = 0; i < n; i = i + 1) {
        total = total + candies[i];
    }

    return total;
}
```
