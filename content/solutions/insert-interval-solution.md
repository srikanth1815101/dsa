---
title: "Insert Interval - Solution"
problemUrl: "/problems/insert-interval/"
---
<!-- All rights reserved to CSRGO DSA -->

## Explanation

Since the original intervals are already mutually disjoint and sorted by their starting values, we can insert and merge `newInterval` in a single **linear pass ($O(n)$ time)** without sorting:

### Three-Phase Strategy

1. **Phase 1: Preceding Intervals**:
   - Add all intervals that end strictly before `newInterval` begins ($\text{intervals}[i][1] < \text{newInterval}[0]$).
   - These intervals cannot possibly overlap with `newInterval`.

2. **Phase 2: Overlapping Intervals**:
   - As long as the current interval starts before or at the end of `newInterval` ($\text{intervals}[i][0] \le \text{newInterval}[1]$), it overlaps with `newInterval`.
   - Expand `newInterval` to encompass the overlapping interval:
     $$\text{newInterval}[0] = \min(\text{newInterval}[0], \, \text{intervals}[i][0])$$
     $$\text{newInterval}[1] = \max(\text{newInterval}[1], \, \text{intervals}[i][1])$$
   - When no more overlapping intervals remain, append the expanded `newInterval` to the result list.

3. **Phase 3: Succeeding Intervals**:
   - Add all remaining intervals from index $i$ to the end of the array.
   - These intervals start strictly after `newInterval` ends and require no alteration.

4. **Return**:
   - Convert the dynamic list to a 2D integer array and return.

### Complexity Analysis
- **Time Complexity**: $O(n)$, since each interval in the input is inspected at most once.
- **Space Complexity**: $O(n)$, required to construct the resulting non-overlapping list.

---

## Code

```java
public static int[][] solve(int[][] intervals, int[] newInterval) {
    List<int[]> result = new ArrayList<>();
    int i = 0;
    int n = (intervals == null) ? 0 : intervals.length;

    while (i < n && intervals[i][1] < newInterval[0]) {
        result.add(intervals[i]);
        i = i + 1;
    }

    while (i < n && intervals[i][0] <= newInterval[1]) {
        newInterval[0] = Math.min(newInterval[0], intervals[i][0]);
        newInterval[1] = Math.max(newInterval[1], intervals[i][1]);
        i = i + 1;
    }
    result.add(newInterval);

    while (i < n) {
        result.add(intervals[i]);
        i = i + 1;
    }

    return result.toArray(new int[result.size()][]);
}
```
