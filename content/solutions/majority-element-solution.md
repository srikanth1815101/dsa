---
title: "Majority Element - Solution"
problemUrl: "/problems/majority-element/"
---
<!-- All rights reserved to CSRGO DSA -->

## Explanation

The optimal approach to find the majority element (which appears $> \lfloor n / 2 \rfloor$ times) in $O(n)$ time and $O(1)$ space is the **Boyer-Moore Voting Algorithm**:

1. **Intuition**:
   - Because the majority element accounts for more than half of the elements in the array, paired cancellations between differing elements will always leave the majority element standing.

2. **Algorithm Execution**:
   - Maintain two variables: `candidate` and `count` (initialized to 0).
   - Iterate through each element `nums[i]`:
     - If `count == 0`, assign $\text{candidate} = \text{nums}[i]$.
     - If $\text{nums}[i] == \text{candidate}$, increment `count` by 1.
     - Otherwise, decrement `count` by 1.
   - At the end of the loop, `candidate` is guaranteed to be the majority element because its frequency strictly exceeds $n / 2$.

### Complexity Analysis
- **Time Complexity**: $O(n)$, executing a single linear scan through the array.
- **Space Complexity**: $O(1)$, maintaining only two scalar variables.

---

## Code

```java
public static int solve(int[] nums) {
    int candidate = 0;
    int count = 0;

    for (int i = 0; i < nums.length; i++) {
        if (count == 0) {
            candidate = nums[i];
        }

        if (nums[i] == candidate) {
            count = count + 1;
        } else {
            count = count - 1;
        }
    }

    return candidate;
}
```
