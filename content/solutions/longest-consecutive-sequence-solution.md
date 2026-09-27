---
title: "Longest Consecutive Sequence - Solution"
problemUrl: "/problems/longest-consecutive-sequence/"
---
<!-- All rights reserved to CSRGO DSA -->

## Explanation

To find the length of the longest consecutive sequence in $O(n)$ time:
1. Store all elements of the array in a `HashSet` for $O(1)$ average time lookups.
2. Iterate through each element in the set.
3. Check whether the element is the starting point of a sequence:
   - An element `num` is a starting point if and only if `set.contains(num - 1)` is `false`.
4. If `num` is the start of a sequence:
   - Check consecutively for `num + 1`, `num + 2`, etc., in the set while incrementing a current streak counter.
   - Update the maximum streak found so far.
5. Because each number is only visited as part of a streak expansion from its start point, each element is touched at most twice, guaranteeing $O(n)$ total time.

### Step-by-Step Algorithm:
1. If `nums.length == 0`, return `0`.
2. Initialize `Set<Integer> set = new HashSet<>()`.
3. Loop through `nums` from index `0` to `nums.length - 1` and add each `nums[i]` to `set`.
4. Initialize `int maxStreak = 0`.
5. For each integer `num` in `set`:
   - If `!set.contains(num - 1)`:
     - Initialize `int currentNum = num`.
     - Initialize `int currentStreak = 1`.
     - While `set.contains(currentNum + 1)`:
       - Update `currentNum = currentNum + 1`.
       - Update `currentStreak = currentStreak + 1`.
     - Update `maxStreak = Math.max(maxStreak, currentStreak)`.
6. Return `maxStreak`.

## Code

```java
public static int solve(int[] nums) {
    if (nums == null || nums.length == 0) {
        return 0;
    }

    Set<Integer> set = new HashSet<>();
    for (int i = 0; i < nums.length; i = i + 1) {
        set.add(nums[i]);
    }

    int maxStreak = 0;
    for (int num : set) {
        if (!set.contains(num - 1)) {
            int currentNum = num;
            int currentStreak = 1;

            while (set.contains(currentNum + 1)) {
                currentNum = currentNum + 1;
                currentStreak = currentStreak + 1;
            }

            maxStreak = Math.max(maxStreak, currentStreak);
        }
    }

    return maxStreak;
}
```

## Complexity Analysis

- **Time Complexity:** $O(n)$ because each unique number is visited once during set insertion and at most once during sequence expansion loops.
- **Space Complexity:** $O(n)$ auxiliary memory used by the hash set to store distinct numbers.
