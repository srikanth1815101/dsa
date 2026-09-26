---
title: "Non Overlapping Intervals - Solution"
problemUrl: "/problems/non-overlapping-intervals/"
---
<!-- All rights reserved to CSRGO DSA -->

## Explanation

Minimizing the number of removed intervals is mathematically equivalent to **maximizing the number of non-overlapping intervals retained**. This is the classic **Interval Scheduling Problem**, which is solved optimally using a **Greedy Algorithm**:

1. **Greedy Choice Criterion**:
   - To leave as much available time as possible for future intervals, we should always favor intervals that finish earliest.
   - Therefore, we sort the intervals in ascending order by their **end times** $end_i$:
     $$\text{intervals.sort by } end_i$$

2. **Linear Greedy Scan**:
   - Keep track of the end time of the last retained interval: `prevEnd = intervals[0][1]`.
   - Maintain a counter `removed = 0`.
   - Iterate through the remaining intervals from index 1 to $n-1$:
     - **Conflict**: If $\text{intervals}[i][0] < \text{prevEnd}$, the interval starts before the previous interval finishes. We must remove this interval to avoid an overlap:
       $$\text{removed} = \text{removed} + 1$$
     - **No Conflict**: If $\text{intervals}[i][0] \ge \text{prevEnd}$, the interval can be safely accommodated. We update:
       $$\text{prevEnd} = \text{intervals}[i][1]$$

3. **Return**:
   - Return `removed`.

### Complexity Analysis
- **Time Complexity**: $O(n \log n)$, dominated by sorting $n$ intervals. The subsequent linear pass runs in $O(n)$ time.
- **Space Complexity**: $O(1)$ auxiliary space (ignoring sorting recursion stack).

---

## Code

```java
public static int solve(int[][] intervals) {
    if (intervals == null || intervals.length <= 1) {
        return 0;
    }

    Arrays.sort(intervals, (a, b) -> Integer.compare(a[1], b[1]));

    int removed = 0;
    int prevEnd = intervals[0][1];

    for (int i = 1; i < intervals.length; i++) {
        if (intervals[i][0] < prevEnd) {
            removed = removed + 1;
        } else {
            prevEnd = intervals[i][1];
        }
    }

    return removed;
}
```
