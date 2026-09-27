---
title: "Merge Overlapping Intervals - Solution"
problemUrl: "/problems/merge-overlapping-intervals/"
---
<!-- All rights reserved to CSRGO DSA -->

## Explanation

To merge overlapping intervals, sorting the intervals by their start times ensures that overlapping intervals appear consecutively.

Once sorted:
1. We initialize a list to store merged intervals and insert the first interval.
2. For each subsequent interval `current`:
   - Let `last` be the most recently added interval in the merged list.
   - If `current[0] <= last[1]`, the intervals overlap. We extend `last[1]` to `Math.max(last[1], current[1])`.
   - Otherwise, the intervals do not overlap, so we append `current` as a new entry.
3. Finally, we convert the merged list into a 2D integer array and return it.

### Step-by-Step Algorithm:
1. If `intervals` has fewer than 2 elements, return `intervals`.
2. Sort `intervals` in ascending order based on start time `a[0]`.
3. Create a `List<int[]>` named `merged`.
4. Add the first interval `intervals[0]` to `merged`.
5. For each interval from index `1` to `intervals.length - 1`:
   - Retrieve `last = merged.get(merged.size() - 1)`.
   - If `intervals[i][0] <= last[1]`:
     - Update `last[1] = Math.max(last[1], intervals[i][1])`.
   - Else:
     - Add `intervals[i]` to `merged`.
6. Return `merged.toArray(new int[merged.size()][])`.

## Code

```java
public static int[][] solve(int[][] intervals) {
    if (intervals == null || intervals.length <= 1) {
        return intervals;
    }
    Arrays.sort(intervals, (a, b) -> Integer.compare(a[0], b[0]));
    List<int[]> merged = new ArrayList<>();
    merged.add(new int[]{intervals[0][0], intervals[0][1]});
    for (int i = 1; i < intervals.length; i = i + 1) {
        int[] last = merged.get(merged.size() - 1);
        int[] curr = intervals[i];
        if (curr[0] <= last[1]) {
            last[1] = Math.max(last[1], curr[1]);
        } else {
            merged.add(new int[]{curr[0], curr[1]});
        }
    }
    return merged.toArray(new int[merged.size()][]);
}
```
