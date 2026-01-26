---
title: "Combination Sum - Solution"
problemUrl: "/problems/combination-sum/"
---

## Explanation

This is a classic **backtracking** problem. We explore all possible combinations by recursively adding candidates to our current path.

**Key insight:** Since we can reuse elements, when we recurse, we don't move to the next index—we stay at the current index. To avoid duplicates, we never go back to previous indices.

**Algorithm:**
1. Start with an empty combination and full target
2. For each candidate from current index onwards:
   - If it equals remaining target, we found a valid combination
   - If it's less than remaining, add it and recurse with reduced target
   - Backtrack by removing the last added element

## Code

```java
class Solution {
    public List<List<Integer>> combinationSum(int[] candidates, int target) {
        List<List<Integer>> result = new ArrayList<>();
        backtrack(candidates, target, 0, new ArrayList<>(), result);
        return result;
    }
    
    private void backtrack(int[] candidates, int remain, int start, 
                          List<Integer> path, List<List<Integer>> result) {
        if (remain == 0) {
            result.add(new ArrayList<>(path));
            return;
        }
        if (remain < 0) return;
        
        for (int i = start; i < candidates.length; i++) {
            path.add(candidates[i]);
            backtrack(candidates, remain - candidates[i], i, path, result);
            path.remove(path.size() - 1);
        }
    }
}
```
