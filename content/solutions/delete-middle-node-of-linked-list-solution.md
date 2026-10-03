---
title: "Delete Middle Node of Linked List - Solution"
date: 2026-10-03T11:20:00+05:30
problemUrl: "/problems/delete-middle-node-of-linked-list/"
weight: 22
---
<!-- All rights reserved to CSRGO DSA -->

## Explanation

Given a linked list represented by an array of values, delete the middle node located at index `⌊n / 2⌋` and return the modified list. If the list contains only one node, deleting it leaves an empty list.



In a linked list traversal, the classic fast and slow pointer technique allows locating the middle node in a single pass:
1. A slow pointer advances by one node while a fast pointer advances by two nodes.
2. By maintaining a predecessor pointer or advancing `fast` ahead by two steps before starting `slow`, `slow` stops directly at the node preceding the middle node when `fast` reaches the end.
3. In array representation, the middle index is directly `n / 2`. We can construct a new array of length `n - 1` copying all elements except the one at index `n / 2`.

### Step-by-Step Algorithm:
1. Obtain the length of the input array `n`.
2. If `n <= 1`, deleting the only node results in an empty list; return an empty array `new int[0]`.
3. Compute the middle index `mid = n / 2`.
4. Allocate a new integer array `ans` of size `n - 1`.
5. Iterate through the input array with an index pointer `writeIdx`:
   - For every index `i` from `0` to `n - 1`, if `i != mid`, copy `arr[i]` into `ans[writeIdx]` and increment `writeIdx`.
6. Return `ans`.

## Code

```java
public static int[] solve(int[] arr) {
    if (arr == null || arr.length <= 1) {
        return new int[0];
    }

    int n = arr.length;
    int mid = n / 2;
    int[] ans = new int[n - 1];
    int writeIdx = 0;

    for (int i = 0; i < n; i = i + 1) {
        if (i != mid) {
            ans[writeIdx] = arr[i];
            writeIdx = writeIdx + 1;
        }
    }

    return ans;
}
```
