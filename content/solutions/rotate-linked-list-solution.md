---
date: 2026-10-01T01:19:00+05:30

title: "Rotate Linked List - Solution"
problemUrl: "/problems/rotate-linked-list/"
weight: 19
---
<!-- All rights reserved to CSRGO DSA -->

## Explanation

Rotating a linked list of length `n` to the right by `k` steps is equivalent to rotating it by `k % n` steps, because rotating `n` times produces the original list.

1. If the list is empty, has a single node, or `k % n == 0`, no rotation is required.
2. The last `k % n` nodes will become the new front of the list, and the remaining nodes will follow.
3. Form a temporary circular list by connecting the tail node to the original head.
4. Move `n - (k % n) - 1` steps from the head to find the new tail node.
5. The node immediately after the new tail becomes the new head.
6. Break the circular connection by setting the new tail's `next` pointer to `null`.

This achieves the rotation in `O(n)` time and `O(1)` auxiliary space.

### Step-by-Step Algorithm:
1. If `arr == null` or `arr.length <= 1`, return `arr`.
2. Compute `n = arr.length`.
3. Normalize `k = k % n`.
4. If `k == 0`, return `arr`.
5. Create a result array `res` of length `n`.
6. For each index `i` from `0` to `n - 1`:
   - Calculate new position: `newIdx = (i + k) % n`.
   - Assign `res[newIdx] = arr[i]`.
7. Return `res`.

## Code

```java
public static int[] solve(int[] arr, int k) {
    if (arr == null || arr.length <= 1) {
        return arr;
    }

    int n = arr.length;
    k = k % n;
    if (k == 0) {
        return arr;
    }

    int[] res = new int[n];
    for (int i = 0; i < n; i = i + 1) {
        int newIdx = (i + k) % n;
        res[newIdx] = arr[i];
    }

    return res;
}
```
