---
title: "Furthest Building You Can Reach - Solution"
date: 2026-10-03T11:20:00+05:30
problemUrl: "/problems/furthest-building-you-can-reach/"
weight: 63
---
<!-- All rights reserved to CSRGO DSA -->

## Explanation

Ladders can cover any vertical jump regardless of how tall it is, whereas bricks are consumed in direct proportion to the jump height. Therefore, optimal resource utilization dictates that **ladders should be saved for the largest vertical climbs**, while bricks should handle the smaller climbs.

We can achieve this greedily using a **Min-Heap**:
1. Iterate building by building. Whenever a climb is required ($heights[i + 1] > heights[i]$), assume tentatively that a ladder will be used for this climb by pushing the difference `diff` into a min-heap.
2. If the count of climbs in the min-heap exceeds the number of available `ladders`:
   - The smallest climb currently in the heap is extracted.
   - We must cover this smallest climb using `bricks` instead of a ladder.
   - Deduct `smallestClimb` from `bricks`.
3. If at any point the remaining `bricks` become negative, we can no longer make the jump to building $i + 1$. The furthest reachable building is $i$.
4. If we successfully traverse the entire array without exhausting bricks, the answer is $n - 1$.

### Step-by-Step Algorithm:
1. Initialize a min-heap `PriorityQueue<Integer> pq`.
2. Loop through each building index `i` from $0$ to $heights.length - 2$:
   - Calculate `diff = heights[i + 1] - heights[i]`.
   - If `diff > 0`:
     - Add `diff` to `pq`.
     - If `pq.size() > ladders`:
       - Extract the minimum climb `smallest = pq.poll()`.
       - Update `bricks = bricks - smallest`.
       - If `bricks < 0`, return `i`.
3. If the loop completes, return `heights.length - 1`.

## Code

```java
public static int solve(int[] heights, int bricks, int ladders) {
    if (heights == null || heights.length <= 1) {
        return 0;
    }

    PriorityQueue<Integer> pq = new PriorityQueue<>();

    for (int i = 0; i < heights.length - 1; i = i + 1) {
        int diff = heights[i + 1] - heights[i];
        if (diff > 0) {
            pq.offer(diff);
            if (pq.size() > ladders) {
                int smallestClimb = pq.poll();
                bricks = bricks - smallestClimb;
                if (bricks < 0) {
                    return i;
                }
            }
        }
    }

    return heights.length - 1;
}
```
