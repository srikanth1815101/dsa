---
title: "Longest Consecutive Sequence - Solution"
problemUrl: "/problems/longest-consecutive-sequence/"
---
<!-- All rights reserved to CSRGO DSA -->

## Explanation

To determine the length of the longest consecutive sequence in $O(n)$ time without sorting, we use a **Hash Set**:

1. **Hash Set Populating**:
   - Insert all elements of `nums` into a `HashSet`. This enables $O(1)$ average time lookups and automatically eliminates duplicate values.

2. **Identifying Sequence Beginnings**:
   - For each number `num` in the set, check if `set.contains(num - 1)`:
     - If `num - 1` is in the set, then `num` cannot be the start of a consecutive sequence (it would be counted as part of a sequence starting at an earlier value). We skip it.
     - If `num - 1` is NOT in the set, then `num` is guaranteed to be the start of a new consecutive chain.

3. **Counting Streak Length**:
   - Starting from `currentNum = num`, repeatedly check if `set.contains(currentNum + 1)`.
   - Increment `currentNum` and `currentStreak` until the chain ends.
   - Update `longestStreak = Math.max(longestStreak, currentStreak)`.

4. **Linear Time Guarantee**:
   - Although there is a nested loop, each number is visited at most twice (once in the outer iteration and once inside the inner `while` loop when extending its sequence). Therefore, the overall time complexity is strictly $O(n)$.

### Complexity Analysis
- **Time Complexity**: $O(n)$, traversing each unique element at most twice with $O(1)$ set lookups.
- **Space Complexity**: $O(n)$, required to store the distinct elements in the `HashSet`.

---

## Code

```java
public static int solve(int[] nums) {
    if (nums == null || nums.length == 0) {
        return 0;
    }

    Set<Integer> set = new HashSet<>();
    for (int i = 0; i < nums.length; i++) {
        set.add(nums[i]);
    }

    int longestStreak = 0;

    for (int num : set) {
        if (!set.contains(num - 1)) {
            int currentNum = num;
            int currentStreak = 1;

            while (set.contains(currentNum + 1)) {
                currentNum = currentNum + 1;
                currentStreak = currentStreak + 1;
            }

            if (currentStreak > longestStreak) {
                longestStreak = currentStreak;
            }
        }
    }

    return longestStreak;
}
```
