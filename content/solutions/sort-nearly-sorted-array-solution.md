---
title: "Sort Nearly Sorted Array - Solution"
problemUrl: "/problems/sort-nearly-sorted-array/"
---
<!-- All rights reserved to CSRGO DSA -->

## Explanation

In a nearly sorted (or $k$-sorted) array, each element is displaced at most $k$ positions from its final index. Therefore, the smallest element of the entire array must reside within the first $k + 1$ elements.
1. Insert the first $k + 1$ elements of the array into a min-heap.
2. The root of this min-heap is guaranteed to be the overall minimum element, which belongs at index `0`.
3. Extract this minimum element and place it at the current placement index.
4. Add the next incoming element from the array into the min-heap.
5. Repeat this extract-and-insert procedure until all elements from the array have been processed.
6. Finally, empty any remaining elements from the min-heap into the array.

### Step-by-Step Algorithm:
1. If `arr == null || arr.length == 0`, return `arr`.
2. Initialize `int[] result = new int[arr.length]`.
3. Initialize `PriorityQueue<Integer> minHeap = new PriorityQueue<>()`.
4. Determine initial window size `int limit = Math.min(arr.length, k + 1)`.
5. Add the first `limit` elements from `arr` into `minHeap`.
6. Initialize `int index = 0`.
7. Loop `i` from `limit` to `arr.length - 1`:
   - Set `result[index] = minHeap.poll()`.
   - Update `index = index + 1`.
   - Add `arr[i]` into `minHeap`.
8. While `!minHeap.isEmpty()`:
   - Set `result[index] = minHeap.poll()`.
   - Update `index = index + 1`.
9. Return `result`.

## Code

```java
public static int[] solve(int[] arr, int k) {
    if (arr == null || arr.length == 0) {
        return new int[0];
    }

    int[] result = new int[arr.length];
    PriorityQueue<Integer> minHeap = new PriorityQueue<>();

    int limit = Math.min(arr.length, k + 1);
    for (int i = 0; i < limit; i = i + 1) {
        minHeap.add(arr[i]);
    }

    int index = 0;
    for (int i = limit; i < arr.length; i = i + 1) {
        result[index] = minHeap.poll();
        index = index + 1;
        minHeap.add(arr[i]);
    }

    while (!minHeap.isEmpty()) {
        result[index] = minHeap.poll();
        index = index + 1;
    }

    return result;
}
```

## Complexity Analysis

- **Time Complexity:** $O(n \log k)$ because the min-heap holds at most $k + 1$ elements, making each push and poll operation take $O(\log k)$ time across all $n$ elements.
- **Space Complexity:** $O(k)$ auxiliary space for the min-heap holding at most $k + 1$ elements.
