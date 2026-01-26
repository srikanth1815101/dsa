---
title: "Contains Duplicate - Solution"
problemUrl: "/problems/contains-duplicate/"
---

## Explanation

The most efficient approach uses a **HashSet** to track elements we've seen. As we iterate through the array:
1. Check if the current element exists in the set
2. If yes, we found a duplicate—return true
3. If no, add the element to the set
4. If we finish without finding duplicates, return false

This gives us O(n) time complexity with O(1) average lookup time for the HashSet.

## Code

```java
class Solution {
    public boolean containsDuplicate(int[] nums) {
        Set<Integer> seen = new HashSet<>();
        for (int num : nums) {
            if (seen.contains(num)) return true;
            seen.add(num);
        }
        return false;
    }
}
```
