---
title: "Connect Ropes with Minimum Cost - Solution"
date: 2026-10-03T11:20:00+05:30
problemUrl: "/problems/connect-ropes-with-minimum-cost/"
weight: 33
---
<!-- All rights reserved to CSRGO DSA -->

## Explanation

We are given an array of rope lengths. Every time two ropes of lengths $x$ and $y$ are connected, it incurs a cost of $x + y$, and leaves behind a single rope of length $x + y$. The objective is to minimize the total cost to connect all ropes into a single rope.



This problem is an application of Huffman Coding / greedy optimization:
1. Whenever two ropes are combined, their lengths contribute not only to the current operation's cost, but also to every future merge that involves the resulting rope.
2. Therefore, shorter ropes should participate in more merges, while longer ropes should participate in fewer merges.
3. At every step, we greedily pick the two shortest available ropes, combine them, add their combined sum to the total cost, and insert the new rope back into the pool.
4. A Min-Heap (PriorityQueue) efficiently provides the two smallest elements in $O(\log N)$ time.

### Step-by-Step Algorithm:
1. Check if the input array is null or has length less than or equal to 1. If so, return 0 because no connections are needed.
2. Initialize a min-heap `PriorityQueue<Integer> pq`.
3. Add all rope lengths into `pq`.
4. Initialize `totalCost = 0`.
5. While `pq.size() > 1`:
   - Poll the smallest rope `first = pq.poll()`.
   - Poll the second smallest rope `second = pq.poll()`.
   - Compute `combined = first + second`.
   - Accumulate cost: `totalCost = totalCost + combined`.
   - Insert `combined` back into `pq`.
6. Return `totalCost`.

## Code

```java
public static int solve(int[] arr) {
    if (arr == null || arr.length <= 1) {
        return 0;
    }

    PriorityQueue<Integer> pq = new PriorityQueue<>();
    for (int i = 0; i < arr.length; i = i + 1) {
        pq.offer(arr[i]);
    }

    int totalCost = 0;
    while (pq.size() > 1) {
        int first = pq.poll();
        int second = pq.poll();
        int combined = first + second;
        totalCost = totalCost + combined;
        pq.offer(combined);
    }

    return totalCost;
}
```
