---
title: "Combination Sum II - Solution"
problemUrl: "/problems/combination-sum-ii/"
---
<!-- All rights reserved to CSRGO DSA -->

## Explanation

Combination Sum II differs from Combination Sum in two ways:
1. Each number may only be used **once** per combination $\implies$ recurse with `i + 1`.
2. The candidates array contains **duplicates**, but the solution set must not $\implies$ skip duplicates at the same recursive level when `i > start && candidates[i] == candidates[i - 1]`.

### Algorithm Steps
1. Sort `candidates` in ascending order.
2. In `backtrack(start, candidates, remain, current, result)`:
   - If `remain == 0`, add a copy of `current` to `result` and return.
   - Loop `i` from `start` to `candidates.length - 1`:
     - If `candidates[i] > remain`, `break` (array is sorted, remaining elements are too large).
     - If `i > start && candidates[i] == candidates[i - 1]`, `continue` (skip duplicate choices at this level).
     - Add `candidates[i]` to `current`.
     - Recurse: `backtrack(i + 1, candidates, remain - candidates[i], current, result)`.
     - Backtrack: remove last element of `current`.
3. In `solve(candidates, target)`, sort the candidates, invoke `backtrack`, and return `result`.

### Complexity Analysis
- **Time Complexity**: $O(2^n)$, because in the worst case every element is either included or excluded.
- **Space Complexity**: $O(n)$ recursion call stack space.

---

## Code

```java
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

public static List<List<Integer>> solve(int[] candidates, int target) {
    List<List<Integer>> result = new ArrayList<>();
    if (candidates == null || candidates.length == 0) {
        return result;
    }

    Arrays.sort(candidates);
    backtrack(0, candidates, target, new ArrayList<>(), result);
    return result;
}

private static void backtrack(int start, int[] candidates, int remain, List<Integer> current, List<List<Integer>> result) {
    if (remain == 0) {
        result.add(new ArrayList<>(current));
        return;
    }

    for (int i = start; i < candidates.length; i = i + 1) {
        if (candidates[i] > remain) {
            break;
        }
        if (i > start && candidates[i] == candidates[i - 1]) {
            continue;
        }

        current.add(candidates[i]);
        backtrack(i + 1, candidates, remain - candidates[i], current, result);
        current.remove(current.size() - 1);
    }
}
```
