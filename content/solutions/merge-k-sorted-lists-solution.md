---
title: "Merge K Sorted Lists - Solution"
problemUrl: "/problems/merge-k-sorted-lists/"
---
<!-- All rights reserved to CSRGO DSA -->

## Explanation

To merge $k$ pre-sorted arrays into a single unified sorted array:
1. Use a min-heap to keep track of the smallest currently available element among all active lists.
2. Each element in the min-heap stores:
   - `val`: the value of the array element.
   - `listIndex`: the index of the array in `lists`.
   - `elemIndex`: the position of the element inside that array.
3. Initially, insert the first element of each non-empty list into the min-heap.
4. Extract the minimum element from the min-heap and append its value to the output array.
5. If the list from which the minimum element came has remaining elements, push its next element into the min-heap.
6. Repeat until the min-heap is completely empty.

### Step-by-Step Algorithm:
1. If `lists == null || lists.length == 0`, return `new int[0]`.
2. Count the total number of elements `totalElements` across all lists.
3. Initialize an array `result` of length `totalElements`.
4. Initialize a min-heap storing tuples `(val, listIndex, elemIndex)` ordered by `val`.
5. For each list `i` from `0` to `lists.length - 1`:
   - If `lists[i].length > 0`, insert `(lists[i][0], i, 0)` into the min-heap.
6. Initialize `int writeIdx = 0`.
7. While the min-heap is not empty:
   - Poll entry `(val, listIndex, elemIndex)`.
   - Set `result[writeIdx] = val`.
   - Update `writeIdx = writeIdx + 1`.
   - If `elemIndex + 1 < lists[listIndex].length`:
     - Insert `(lists[listIndex][elemIndex + 1], listIndex, elemIndex + 1)` into the min-heap.
8. Return `result`.

## Code

```java
public static int[] solve(int[][] lists) {
    if (lists == null || lists.length == 0) {
        return new int[0];
    }

    int totalElements = 0;
    for (int i = 0; i < lists.length; i = i + 1) {
        if (lists[i] != null) {
            totalElements = totalElements + lists[i].length;
        }
    }

    if (totalElements == 0) {
        return new int[0];
    }

    PriorityQueue<int[]> minHeap = new PriorityQueue<>((a, b) -> Integer.compare(a[0], b[0]));

    for (int i = 0; i < lists.length; i = i + 1) {
        if (lists[i] != null && lists[i].length > 0) {
            minHeap.add(new int[]{lists[i][0], i, 0});
        }
    }

    int[] result = new int[totalElements];
    int writeIdx = 0;

    while (!minHeap.isEmpty()) {
        int[] top = minHeap.poll();
        int val = top[0];
        int listIdx = top[1];
        int elemIdx = top[2];

        result[writeIdx] = val;
        writeIdx = writeIdx + 1;

        if (elemIdx + 1 < lists[listIdx].length) {
            minHeap.add(new int[]{lists[listIdx][elemIdx + 1], listIdx, elemIdx + 1});
        }
    }

    return result;
}
```

## Complexity Analysis

- **Time Complexity:** $O(N \log k)$ where $N$ is the total number of elements across all lists and $k$ is the number of lists. The heap size never exceeds $k$, so each insertion and extraction operation costs $O(\log k)$.
- **Space Complexity:** $O(k)$ auxiliary space for the min-heap storing at most $k$ entries at any point.
