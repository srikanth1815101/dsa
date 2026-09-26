---
title: "Combination Sum - Solution"
problemUrl: "/problems/combination-sum/"
---
<!-- All rights reserved to CSRGO DSA -->

## Explanation

Because elements can be reused an unlimited number of times, after choosing `candidates[i]`, the recursive call can choose `candidates[i]` again by passing the same index `i` as the next start index.

### Algorithm Steps
1. Sort `candidates` to enable early break pruning.
2. In `backtrack(start, candidates, remain, current, result)`:
   - If `remain == 0`, a valid combination is found: add a copy of `current` to `result`, then return.
   - Loop `i` from `start` to `candidates.length - 1`:
     - If `candidates[i] > remain`, break immediately (since elements are sorted, all subsequent elements will also exceed `remain`).
     - Add `candidates[i]` to `current`.
     - Recurse: `backtrack(i, candidates, remain - candidates[i], current, result)` (passing `i` allows reuse).
     - Backtrack: remove last element of `current`.
3. In `solve(candidates, target)`, sort the array, initialize the result list, invoke `backtrack`, and return `result`.

### Complexity Analysis
- **Time Complexity**: $O(N^{\frac{T}{M}})$, where $N$ is candidate count, $T$ is target, and $M$ is minimum candidate value.
- **Space Complexity**: $O(\frac{T}{M})$ maximum call stack depth.

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

        current.add(candidates[i]);
        backtrack(i, candidates, remain - candidates[i], current, result);
        current.remove(current.size() - 1);
    }
}
```
