---
title: "Activity Selection - Solution"
date: 2026-10-03T11:20:00+05:30
problemUrl: "/problems/activity-selection/"
weight: 35
---
<!-- All rights reserved to CSRGO DSA -->

## Explanation

We are given $N$ activities with their starting and finishing times. The goal is to select the largest mutually compatible subset of activities, where an activity can begin immediately as another finishes ($start \ge end$).



The standard greedy choice for interval scheduling is to always choose the activity that **finishes earliest**:
1. By picking the activity with the earliest finish time, we leave the maximum amount of remaining time available for subsequent activities.
2. Pair each start time with its corresponding finish time and sort the activities in ascending order of their end times.
3. Select the first activity in the sorted order.
4. For every subsequent activity, if its start time is greater than or equal to the finish time of the last selected activity, select it and update the last finish time.

### Step-by-Step Algorithm:
1. If `start` or `end` is null or empty, return 0.
2. Create a 2D integer array `activities` of size `n x 2` where `activities[i][0] = start[i]` and `activities[i][1] = end[i]`.
3. Sort `activities` in ascending order of end time: `(a, b) -> Integer.compare(a[1], b[1])`.
4. Initialize `count = 1` and `lastEnd = activities[0][1]`.
5. Iterate through the remaining activities from index `1` to `n - 1`:
   - If `activities[i][0] >= lastEnd`:
     - Increment `count = count + 1`.
     - Update `lastEnd = activities[i][1]`.
6. Return `count`.

## Code

```java
public static int solve(int[] start, int[] end) {
    if (start == null || end == null || start.length == 0) {
        return 0;
    }

    int n = start.length;
    int[][] activities = new int[n][2];
    for (int i = 0; i < n; i = i + 1) {
        activities[i][0] = start[i];
        activities[i][1] = end[i];
    }

    Arrays.sort(activities, (a, b) -> Integer.compare(a[1], b[1]));

    int count = 1;
    int lastEnd = activities[0][1];

    for (int i = 1; i < n; i = i + 1) {
        if (activities[i][0] >= lastEnd) {
            count = count + 1;
            lastEnd = activities[i][1];
        }
    }

    return count;
}
```
