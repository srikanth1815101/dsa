---
date: 2026-10-01T01:20:00+05:30

title: "Partition Linked List - Solution"
problemUrl: "/problems/partition-linked-list/"
weight: 20
---
<!-- All rights reserved to CSRGO DSA -->

## Explanation

To partition a linked list while preserving the original relative order within each partition, we maintain two separate pointer chains:
1. `lessHead` and `lessTail`: for all nodes with values strictly less than `x`.
2. `greaterHead` and `greaterTail`: for all nodes with values greater than or equal to `x`.

We iterate through the original list from head to tail. Each node is appended to the appropriate chain based on its value. After traversing all elements:
- We attach the end of the `less` list to the head of the `greater` list.
- We set the `next` pointer of `greaterTail` to `null` to avoid cycles.

This stable partitioning process runs in `O(n)` time and requires `O(n)` space (or `O(1)` auxiliary space when manipulating raw linked list nodes directly).

### Step-by-Step Algorithm:
1. If `arr == null` or `arr.length <= 1`, return `arr`.
2. Create two integer lists: `lessList` and `greaterList`.
3. Iterate through each value `val` in `arr`:
   - If `val < x`, add `val` to `lessList`.
   - Otherwise, add `val` to `greaterList`.
4. Create a result array `res` of length `arr.length`.
5. Populate `res` first with elements of `lessList`, then with elements of `greaterList`.
6. Return `res`.

## Code

```java
public static int[] solve(int[] arr, int x) {
    if (arr == null || arr.length <= 1) {
        return arr;
    }

    int n = arr.length;
    int[] res = new int[n];
    int idx = 0;

    for (int i = 0; i < n; i = i + 1) {
        if (arr[i] < x) {
            res[idx] = arr[i];
            idx = idx + 1;
        }
    }

    for (int i = 0; i < n; i = i + 1) {
        if (arr[i] >= x) {
            res[idx] = arr[i];
            idx = idx + 1;
        }
    }

    return res;
}
```
