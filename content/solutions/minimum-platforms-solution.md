---
title: "Minimum Platforms - Solution"
date: 2026-10-03T11:20:00+05:30
problemUrl: "/problems/minimum-platforms/"
weight: 37
---
<!-- All rights reserved to CSRGO DSA -->

## Explanation

We need to determine the maximum number of overlapping intervals between arrival and departure times of trains to establish how many platforms are needed simultaneously.



We do not need to keep track of which specific train departs; we only care about the count of active trains present at any moment:
1. Sort both the `arr` array and the `dep` array independently in non-decreasing order.
2. Maintain two pointers: `i` for arrivals and `j` for departures.
3. Compare the current arrival time `arr[i]` with the current departure time `dep[j]`:
   - If `arr[i] <= dep[j]`: A train arrives before (or at the same time as) the earliest departing train. This requires a platform: increment the current count `platforms = platforms + 1` and advance `i = i + 1`.
   - Else (`arr[i] > dep[j]`): A train departs, freeing up a platform: decrement `platforms = platforms - 1` and advance `j = j + 1`.
4. Keep track of the maximum platform count reached during this two-pointer sweep.

### Step-by-Step Algorithm:
1. Check if `arr` or `dep` is null or empty. If so, return 0.
2. Sort `arr` in ascending order.
3. Sort `dep` in ascending order.
4. Initialize `i = 0`, `j = 0`, `currentPlatforms = 0`, and `maxPlatforms = 0`.
5. While `i < arr.length` and `j < dep.length`:
   - If `arr[i] <= dep[j]`:
     - `currentPlatforms = currentPlatforms + 1`.
     - `maxPlatforms = Math.max(maxPlatforms, currentPlatforms)`.
     - `i = i + 1`.
   - Else:
     - `currentPlatforms = currentPlatforms - 1`.
     - `j = j + 1`.
6. Return `maxPlatforms`.

## Code

```java
public static int solve(int[] arr, int[] dep) {
    if (arr == null || dep == null || arr.length == 0) {
        return 0;
    }

    Arrays.sort(arr);
    Arrays.sort(dep);

    int n = arr.length;
    int i = 0;
    int j = 0;
    int currentPlatforms = 0;
    int maxPlatforms = 0;

    while (i < n && j < n) {
        if (arr[i] <= dep[j]) {
            currentPlatforms = currentPlatforms + 1;
            maxPlatforms = Math.max(maxPlatforms, currentPlatforms);
            i = i + 1;
        } else {
            currentPlatforms = currentPlatforms - 1;
            j = j + 1;
        }
    }

    return maxPlatforms;
}
```
