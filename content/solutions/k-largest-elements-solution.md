---
title: "K Largest Elements - Solution"
problemUrl: "/problems/k-largest-elements/"
---
<!-- All rights reserved to CSRGO DSA -->

## Explanation

To find the $k$ largest elements in an array:
1. Maintain a min-heap (`PriorityQueue<Integer>`) of capacity $k$.
2. For each number in the array:
   - If the heap contains fewer than $k$ elements, add the number directly.
   - Otherwise, if the current number is strictly greater than the minimum element in the heap (`pq.peek()`), remove the min element and add the current number.
3. After processing all elements, the min-heap contains the $k$ largest values.
4. Extract elements one by one into an array of size $k$ to yield them in sorted ascending order.

### Step-by-Step Algorithm:
1. If `arr == null || k <= 0`, return `new int[0]`.
2. Initialize a min-heap `PriorityQueue<Integer> minHeap = new PriorityQueue<>()`.
3. Loop through `arr` from index `0` to `k - 1` and add `arr[i]` to `minHeap`.
4. Loop through `arr` from index `k` to `arr.length - 1`:
   - If `arr[i] > minHeap.peek()`:
     - Remove the root: `minHeap.poll()`.
     - Insert `arr[i]`: `minHeap.add(arr[i])`.
5. Initialize an array `result` of length `k`.
6. Loop from index `0` to `k - 1`:
   - Set `result[i] = minHeap.poll()`.
7. Return `result`.

## Code

```java
public static int[] solve(int[] arr, int k) {
    if (arr == null || k <= 0 || arr.length < k) {
        return new int[0];
    }

    PriorityQueue<Integer> minHeap = new PriorityQueue<>();
    for (int i = 0; i < k; i = i + 1) {
        minHeap.add(arr[i]);
    }

    for (int i = k; i < arr.length; i = i + 1) {
        if (arr[i] > minHeap.peek()) {
            minHeap.poll();
            minHeap.add(arr[i]);
        }
    }

    int[] result = new int[k];
    for (int i = 0; i < k; i = i + 1) {
        result[i] = minHeap.poll();
    }
    return result;
}
```

## Complexity Analysis

- **Time Complexity:** $O(n \log k)$ where $n$ is the number of elements in `arr`. Each insertion and deletion in a heap of size $k$ takes $O(\log k)$ time.
- **Space Complexity:** $O(k)$ auxiliary space to maintain the min-heap of size $k$.
