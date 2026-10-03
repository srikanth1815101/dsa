---
title: "Reduce Array Size to Half - Solution"
date: 2026-10-03T11:20:00+05:30
problemUrl: "/problems/reduce-array-size-to-half/"
weight: 64
---
<!-- All rights reserved to CSRGO DSA -->

## Explanation

To minimize the number of distinct integers removed from the array while ensuring that at least half of the total elements are deleted, we should greedily remove integers with the **highest frequencies** first.

1. Count the occurrences of each distinct integer using a hash map or frequency array.
2. Collect all frequencies and sort them in descending order.
3. Greedily accumulate frequencies from largest to smallest.
4. Keep track of how many distinct numbers are chosen.
5. As soon as the total accumulated count reaches or exceeds `(arr.length + 1) / 2` (at least half the array), stop and return the number of distinct integers chosen.

### Step-by-Step Algorithm:
1. Handle edge cases if `arr` is null or empty.
2. Construct a hash map `countMap` to record the occurrence frequency of each number in `arr`.
3. Extract all frequency values from `countMap` into a list `frequencies`.
4. Sort `frequencies` in descending order.
5. Calculate the target removal threshold `target = (arr.length + 1) / 2`.
6. Initialize `removed = 0` and `distinctCount = 0`.
7. Iterate through `frequencies`:
   - Add the current frequency to `removed`.
   - Increment `distinctCount`.
   - If `removed >= target`, break from the loop.
8. Return `distinctCount`.

## Code

```java
public static int solve(int[] arr) {
    if (arr == null || arr.length == 0) {
        return 0;
    }

    Map<Integer, Integer> countMap = new HashMap<>();
    for (int i = 0; i < arr.length; i = i + 1) {
        countMap.put(arr[i], countMap.getOrDefault(arr[i], 0) + 1);
    }

    List<Integer> frequencies = new ArrayList<>(countMap.values());
    Collections.sort(frequencies, Collections.reverseOrder());

    int removed = 0;
    int distinctCount = 0;
    int target = (arr.length + 1) / 2;

    for (int i = 0; i < frequencies.size(); i = i + 1) {
        removed = removed + frequencies.get(i);
        distinctCount = distinctCount + 1;
        if (removed >= target) {
            break;
        }
    }

    return distinctCount;
}
```
