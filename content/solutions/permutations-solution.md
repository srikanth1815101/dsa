---
title: "Permutations - Solution"
problemUrl: "/problems/permutations/"
---

## Explanation

We use **backtracking** to build permutations one element at a time. At each step, we choose an unused element, add it to the current permutation, and recursively build the rest.

**Algorithm:**
1. Use a boolean array to track which elements are used
2. When path length equals array length, we have a complete permutation
3. For each unused element, add it to path, mark as used, and recurse
4. After recursion, backtrack by removing from path and marking as unused

## Code

```java
class Solution {
    public List<List<Integer>> permute(int[] nums) {
        List<List<Integer>> result = new ArrayList<>();
        backtrack(nums, new ArrayList<>(), new boolean[nums.length], result);
        return result;
    }
    
    private void backtrack(int[] nums, List<Integer> path, 
                          boolean[] used, List<List<Integer>> result) {
        if (path.size() == nums.length) {
            result.add(new ArrayList<>(path));
            return;
        }
        
        for (int i = 0; i < nums.length; i++) {
            if (used[i]) continue;
            
            used[i] = true;
            path.add(nums[i]);
            backtrack(nums, path, used, result);
            path.remove(path.size() - 1);
            used[i] = false;
        }
    }
}
```
