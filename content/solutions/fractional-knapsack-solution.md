---
title: "Fractional Knapsack - Solution"
date: 2026-10-03T11:20:00+05:30
problemUrl: "/problems/fractional-knapsack/"
weight: 36
---
<!-- All rights reserved to CSRGO DSA -->

## Explanation

Given $N$ items with positive weights and values, and a maximum knapsack weight capacity $W$, maximize total value by selecting whole items or fractions of items.



Because items can be divided into arbitrary fractions, this problem exhibits the greedy choice property:
1. To obtain the maximum total value per unit of capacity consumed, items with the highest value-to-weight ratio `val / wt` must be prioritized.
2. Sort all items in descending order of their `val / wt` ratio.
3. Process items in this sorted order:
   - If the current item's weight is less than or equal to the remaining capacity, take the entire item and decrease the remaining capacity.
   - If the item's weight exceeds the remaining capacity, take a fraction equal to `remainingCapacity / item.wt`, multiply it by the item's value, add it to the total, and terminate since capacity is fully exhausted.

### Step-by-Step Algorithm:
1. Check if `val`, `wt` are null, empty, or `capacity == 0`. If so, return `0.0`.
2. Encapsulate each item into an object storing `val`, `wt`, and ratio `(double) val / wt`.
3. Sort items in descending order of ratio: `(a, b) -> Double.compare(b.ratio, a.ratio)`.
4. Initialize `totalVal = 0.0` and `remCap = (double) capacity`.
5. For each item in sorted order:
   - If `remCap == 0`, break.
   - If `item.wt <= remCap`:
     - `totalVal = totalVal + item.val`.
     - `remCap = remCap - item.wt`.
   - Else:
     - `totalVal = totalVal + item.val * (remCap / item.wt)`.
     - `remCap = 0.0`.
     - Break.
6. Return `totalVal`.

## Code

```java
static class Item {
    int val;
    int wt;
    double ratio;

    Item(int val, int wt) {
        this.val = val;
        this.wt = wt;
        this.ratio = (double) val / wt;
    }
}

public static double solve(int[] val, int[] wt, int capacity) {
    if (val == null || wt == null || val.length == 0 || capacity <= 0) {
        return 0.0;
    }

    int n = val.length;
    Item[] items = new Item[n];
    for (int i = 0; i < n; i = i + 1) {
        items[i] = new Item(val[i], wt[i]);
    }

    Arrays.sort(items, (a, b) -> Double.compare(b.ratio, a.ratio));

    double totalVal = 0.0;
    double remCap = capacity;

    for (int i = 0; i < n; i = i + 1) {
        if (remCap <= 0.0) {
            break;
        }

        if (items[i].wt <= remCap) {
            totalVal = totalVal + items[i].val;
            remCap = remCap - items[i].wt;
        } else {
            totalVal = totalVal + items[i].val * (remCap / items[i].wt);
            remCap = 0.0;
            break;
        }
    }

    return totalVal;
}
```
