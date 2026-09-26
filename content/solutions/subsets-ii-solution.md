---
title: "Subsets II - Solution"
problemUrl: "/problems/subsets-ii/"
---
<!-- All rights reserved to CSRGO DSA -->

## Explanation

When duplicate elements are present in `nums`, simply taking the power set produces duplicate subsets (for example, choosing the first `2` vs the second `2`).

To avoid duplicates:
1. Sort `nums` so that duplicate numbers are grouped consecutively.
2. In the backtracking loop, if `nums[i] == nums[i - 1]` and `i > start`, skip `nums[i]` because the subset prefix has already explored this value at this level.

### Algorithm Steps
1. Sort `nums` in non-decreasing order using `Arrays.sort(nums)`.
2. Define `backtrack(start, nums, current, result)`:
   - Add a copy of `current` to `result`.
   - Loop `i` from `start` to `nums.length - 1`:
     - If `i > start && nums[i] == nums[i - 1]`, `continue` to avoid duplicate tree branches.
     - Add `nums[i]` to `current`.
     - Recurse: `backtrack(i + 1, nums, current, result)`.
     - Backtrack: remove last element of `current`.
3. In `solve(nums)`:
   - If `nums == null`, return empty list.
   - Initialize `result = new ArrayList<>()`.
   - Call `backtrack(0, nums, new ArrayList<>(), result)`.
   - Return `result`.

### Complexity Analysis
- **Time Complexity**: $O(2^n \times n)$, bounded by total subset generation and copy operations.
- **Space Complexity**: $O(n)$ recursion call stack space.

---

## Code

```java
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

public static List<List<Integer>> solve(int[] nums) {
    List<List<Integer>> result = new ArrayList<>();
    if (nums == null) {
        return result;
    }

    Arrays.sort(nums);
    backtrack(0, nums, new ArrayList<>(), result);
    return result;
}

private static void backtrack(int start, int[] nums, List<Integer> current, List<List<Integer>> result) {
    result.add(new ArrayList<>(current));

    for (int i = start; i < nums.length; i = i + 1) {
        if (i > start && nums[i] == nums[i - 1]) {
            continue;
        }

        current.add(nums[i]);
        backtrack(i + 1, nums, current, result);
        current.remove(current.size() - 1);
    }
}
```
