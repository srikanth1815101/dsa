---
title: "Subsets - Solution"
problemUrl: "/problems/subsets/"
---
<!-- All rights reserved to CSRGO DSA -->

## Explanation

Generating all subsets of an array of $n$ distinct elements can be performed using backtracking.

### Algorithm Steps
1. Define a helper function `backtrack(start, nums, current, result)`:
   - Add a copy of `current` to `result`.
   - Loop `i` from `start` to `nums.length - 1`:
     - Add `nums[i]` to `current`.
     - Recurse: `backtrack(i + 1, nums, current, result)`.
     - Backtrack: remove last element of `current`.
2. In `solve(nums)`:
   - Initialize `result = new ArrayList<>()`.
   - Call `backtrack(0, nums, new ArrayList<>(), result)`.
   - Return `result`.

### Complexity Analysis
- **Time Complexity**: $O(2^n \times n)$, because there are $2^n$ subsets and each copy takes $O(n)$ time.
- **Space Complexity**: $O(n)$ call stack depth and subset tracking buffer.

---

## Code

```java
import java.util.ArrayList;
import java.util.List;

public static List<List<Integer>> solve(int[] nums) {
    List<List<Integer>> result = new ArrayList<>();
    if (nums == null) {
        return result;
    }
    backtrack(0, nums, new ArrayList<>(), result);
    return result;
}

private static void backtrack(int start, int[] nums, List<Integer> current, List<List<Integer>> result) {
    result.add(new ArrayList<>(current));

    for (int i = start; i < nums.length; i = i + 1) {
        current.add(nums[i]);
        backtrack(i + 1, nums, current, result);
        current.remove(current.size() - 1);
    }
}
```
