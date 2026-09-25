---
title: "Two Sum - Solution"
problemUrl: "/problems/two-sum/"
---
<!-- All rights reserved to CSRGO DSA -->

## Explanation

The optimal way to solve the **Two Sum** problem is using a **Hash Map** in a single pass:

1. **Complement Concept**:
   For any element $x$ at index $i$, we require an element $y$ such that:
   $$x + y = \text{target} \implies y = \text{target} - x$$
   The value $y$ is called the **complement** of $x$.

2. **One-Pass Hash Map**:
   - Maintain a map `map` mapping each observed value to its index.
   - For each element `nums[i]`:
     - Calculate $\text{complement} = \text{target} - \text{nums}[i]$.
     - Check if `complement` is already present in `map`:
       - If present, we have found our pair: return `[map.get(complement), i]`.
       - If not present, insert `nums[i]` with its index `i` into `map`: `map.put(nums[i], i)`.
   - By checking for the complement *before* adding the current element, we guarantee that an element cannot pair with itself.

3. **Fallback**:
   If no such pair sums to `target` by the end of the traversal, return `[-1, -1]`.

### Complexity Analysis
- **Time Complexity**: $O(n)$, since each hash map lookup and insertion runs in average $O(1)$ time across $n$ elements.
- **Space Complexity**: $O(n)$, to store up to $n$ entries in the hash map.

---

## Code

```java
public static int[] solve(int[] nums, int target) {
    if (nums == null || nums.length < 2) {
        return new int[]{-1, -1};
    }

    Map<Integer, Integer> map = new HashMap<>();

    for (int i = 0; i < nums.length; i++) {
        int complement = target - nums[i];

        if (map.containsKey(complement)) {
            return new int[]{map.get(complement), i};
        }

        map.put(nums[i], i);
    }

    return new int[]{-1, -1};
}
```
