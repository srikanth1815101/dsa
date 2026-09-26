---
title: "Merge Intervals - Solution"
problemUrl: "/problems/merge-intervals/"
---
<!-- All rights reserved to CSRGO DSA -->

## Explanation

To merge overlapping intervals, we sort the intervals by their start times and greedily coalesce overlapping segments:

1. **Sort by Start Coordinates**:
   - By sorting intervals based on their starting values $start_i$, any intervals that could potentially overlap are placed sequentially next to each other.

2. **Sequential Merge**:
   - Initialize a dynamic list `merged` and add the first interval `current = intervals[0]`.
   - Iterate through the remaining intervals from index 1 to $n-1$:
     - Let the next interval be `next = intervals[i]`.
     - **Overlap Condition**:
       If `next[0] <= current[1]`, the intervals overlap (or touch at an endpoint). We merge them by expanding the end time of the current interval:
       $$\text{current}[1] = \max(\text{current}[1], \, \text{next}[1])$$
     - **Disjoint Condition**:
       If `next[0] > current[1]`, the intervals are completely disjoint. We add `next` to `merged` and set `current = next`.

3. **Convert to Array**:
   - Convert the merged list into a 2D integer array and return.

### Complexity Analysis
- **Time Complexity**: $O(n \log n)$, dominated by sorting the $n$ intervals. The subsequent linear scan runs in $O(n)$ time.
- **Space Complexity**: $O(n)$, required to store the merged output intervals and sorting call stack.

---

## Code

```java
public static int[][] solve(int[][] intervals) {
    if (intervals == null || intervals.length <= 1) {
        return intervals;
    }

    Arrays.sort(intervals, (a, b) -> Integer.compare(a[0], b[0]));

    List<int[]> merged = new ArrayList<>();
    int[] current = intervals[0];
    merged.add(current);

    for (int i = 1; i < intervals.length; i++) {
        int[] next = intervals[i];

        if (next[0] <= current[1]) {
            current[1] = Math.max(current[1], next[1]);
        } else {
            current = next;
            merged.add(current);
        }
    }

    return merged.toArray(new int[merged.size()][]);
}
```
