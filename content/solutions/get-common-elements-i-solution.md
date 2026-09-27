---
title: "Get Common Elements I - Solution"
problemUrl: "/problems/get-common-elements-i/"
---
<!-- All rights reserved to CSRGO DSA -->

## Explanation

To find the common elements between arrays `a1` and `a2` where each common element is emitted once in the order of `a2`:
1. Insert all unique values of array `a1` into a `HashSet`.
2. Iterate through each value in `a2`.
3. If the value exists in the set:
   - Add it to our result list.
   - Remove it from the set immediately so subsequent duplicates in `a2` are not processed again.
4. Convert the collected list to an integer array and return it.

### Step-by-Step Algorithm:
1. Initialize a hash set `set` to store integers.
2. Loop through `a1` from index `0` to `a1.length - 1` and add each element `a1[i]` to `set`.
3. Initialize an empty integer list `result`.
4. Loop through `a2` from index `0` to `a2.length - 1`:
   - If `set.contains(a2[i])`:
     - Add `a2[i]` to `result`.
     - Remove `a2[i]` from `set`.
5. Convert `result` into an array `res` of size `result.size()`.
6. Return `res`.

## Code

```java
public static int[] solve(int[] a1, int[] a2) {
    if (a1 == null || a2 == null || a1.length == 0 || a2.length == 0) {
        return new int[0];
    }

    Set<Integer> set = new HashSet<>();
    for (int i = 0; i < a1.length; i = i + 1) {
        set.add(a1[i]);
    }

    List<Integer> list = new ArrayList<>();
    for (int i = 0; i < a2.length; i = i + 1) {
        if (set.contains(a2[i])) {
            list.add(a2[i]);
            set.remove(a2[i]);
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

- **Time Complexity:** $O(n + m)$ where $n$ is the length of `a1` and $m$ is the length of `a2`. Insertion and removal operations in the hash set operate in average $O(1)$ time.
- **Space Complexity:** $O(n)$ auxiliary space to store unique elements of `a1` in the hash set.
