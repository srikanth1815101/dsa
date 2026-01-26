---
title: "Two Sum - Solution"
problemUrl: "/problems/two-sum/"
---

## Explanation

The key insight is that for each number `x` in the array, we need to find if `target - x` exists. A brute force approach would check every pair, giving O(n²) time.

**Optimized Approach:** Use a HashMap to store each number and its index as we iterate. For each element, check if its complement (`target - current`) already exists in the map. If yes, we found our answer. If not, add the current number to the map.

This reduces the problem to a single pass through the array, achieving O(n) time complexity.

## Code

```java
class Solution {
    public int[] twoSum(int[] nums, int target) {
        Map<Integer, Integer> map = new HashMap<>();
        for (int i = 0; i < nums.length; i++) {
            int complement = target - nums[i];
            if (map.containsKey(complement)) {
                return new int[] { map.get(complement), i };
            }
            map.put(nums[i], i);
        }
        return new int[] {};
    }
}
```
