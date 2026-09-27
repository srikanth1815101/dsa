---
title: "Get Common Elements II - Solution"
problemUrl: "/problems/get-common-elements-ii/"
---
<!-- All rights reserved to CSRGO DSA -->

## Explanation

To find the multiset intersection of two integer arrays preserving frequency:
1. Construct a frequency map from the first array `a1` mapping each value to its count.
2. Traverse the second array `a2`.
3. For each value encountered, check whether its count in the frequency map is greater than `0`.
4. If positive:
   - Append the value to our result list.
   - Decrement the stored frequency for that value by `1`.
5. Return the resulting values as an integer array.

### Step-by-Step Algorithm:
1. Initialize a hash map `freq` to store integer frequencies.
2. Loop through `a1` from index `0` to `a1.length - 1`:
   - Increment the frequency of `a1[i]` in `freq`.
3. Initialize an empty list `result`.
4. Loop through `a2` from index `0` to `a2.length - 1`:
   - Retrieve `int count = freq.getOrDefault(a2[i], 0)`.
   - If `count > 0`:
     - Add `a2[i]` to `result`.
     - Update `freq.put(a2[i], count - 1)`.
5. Convert `result` into an array `res` of size `result.size()`.
6. Return `res`.

## Code

```java
public static int[] solve(int[] a1, int[] a2) {
    if (a1 == null || a2 == null || a1.length == 0 || a2.length == 0) {
        return new int[0];
    }

    Map<Integer, Integer> freq = new HashMap<>();
    for (int i = 0; i < a1.length; i = i + 1) {
        int count = freq.getOrDefault(a1[i], 0) + 1;
        freq.put(a1[i], count);
    }

    List<Integer> list = new ArrayList<>();
    for (int i = 0; i < a2.length; i = i + 1) {
        int count = freq.getOrDefault(a2[i], 0);
        if (count > 0) {
            list.add(a2[i]);
            freq.put(a2[i], count - 1);
        }
    }

    int[] result = new int[list.size()];
    for (int i = 0; i < list.size(); i = i + 1) {
        result[i] = list.get(i);
    }
    return result;
}
```

## Complexity Analysis

- **Time Complexity:** $O(n + m)$ where $n$ is `a1.length` and $m$ is `a2.length`. Hash map operations take average $O(1)$ time.
- **Space Complexity:** $O(n)$ auxiliary space to store counts of distinct values in `a1`.
