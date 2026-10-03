---
title: "K Closest Points to Origin - Solution"
date: 2026-10-03T11:20:00+05:30
problemUrl: "/problems/k-closest-points-to-origin/"
weight: 60
---
<!-- All rights reserved to CSRGO DSA -->

## Explanation

The Euclidean distance of a point $(x, y)$ from the origin is $\sqrt{x^2 + y^2}$. Because the square root function is monotonically increasing, comparing squared Euclidean distances $x^2 + y^2$ preserves the relative ordering of distances without precision loss.

To find the $k$ smallest elements in a stream or collection of size $N$, we maintain a **Max-Heap of size $k$**:
1. Insert points into the max-heap, ordered by squared distance descending.
2. Whenever the heap size exceeds $k$, remove the root (which represents the point currently furthest from the origin among the elements in the heap).
3. After processing all $N$ points, the heap retains the $k$ closest points to the origin.

To ensure deterministic canonical ordering, the extracted points are sorted by their coordinates before returning.

### Step-by-Step Algorithm:
1. Create a `PriorityQueue<int[]>` configured as a max-heap where element $A$ is placed before $B$ if $x_A^2 + y_A^2 > x_B^2 + y_B^2$.
2. Iterate through each point $p$ in `points`:
   - Offer $p$ into the max-heap.
   - If `maxHeap.size() > k`, poll the maximum element.
3. Allocate a 2D integer array `result` of size $k \times 2$.
4. Extract all $k$ points from the heap into `result`.
5. Sort `result` by $x$-coordinate ascending, then by $y$-coordinate ascending.
6. Return `result`.

## Code

```java
public static int[][] solve(int[][] points, int k) {
    if (points == null || points.length == 0 || k <= 0) {
        return new int[0][0];
    }

    PriorityQueue<int[]> maxHeap = new PriorityQueue<>(new Comparator<int[]>() {
        @Override
        public int compare(int[] a, int[] b) {
            int d1 = a[0] * a[0] + a[1] * a[1];
            int d2 = b[0] * b[0] + b[1] * b[1];
            return Integer.compare(d2, d1);
        }
    });

    for (int i = 0; i < points.length; i = i + 1) {
        maxHeap.offer(points[i]);
        if (maxHeap.size() > k) {
            maxHeap.poll();
        }
    }

    int[][] result = new int[k][2];
    for (int i = 0; i < k; i = i + 1) {
        result[i] = maxHeap.poll();
    }

    Arrays.sort(result, new Comparator<int[]>() {
        @Override
        public int compare(int[] a, int[] b) {
            if (a[0] != b[0]) {
                return Integer.compare(a[0], b[0]);
            }
            return Integer.compare(a[1], b[1]);
        }
    });

    return result;
}
```
