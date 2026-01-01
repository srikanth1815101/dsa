---
title: "Solution: Two Sum"
date: 2024-01-01
problemUrl: "/problems/two-sum/"
---

## Approach

Use a **Hash Map** to store each number's value and its index as we iterate.
For each element `x`, calculate `complement = target - x`.
If `complement` is already in the map, we found our pair! Return `{map.get(complement), i}`.

### Complexity

- **Time Complexity**: O(n)
- **Space Complexity**: O(n)

## Code

```java
public class Solution {
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
