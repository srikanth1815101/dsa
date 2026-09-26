---
title: "Equilibrium Index - Solution"
problemUrl: "/problems/equilibrium-index/"
---
<!-- All rights reserved to CSRGO DSA -->

## Explanation

The **Equilibrium Index** (or Pivot Index) is an index $i$ such that:
$$\sum_{j=0}^{i-1} \text{nums}[j] = \sum_{k=i+1}^{n-1} \text{nums}[k]$$

Instead of computing the sums from scratch for each candidate index in $O(n^2)$ time, we use a **Running Prefix Sum approach**:

1. **Calculate Total Sum**:
   - Compute the grand total sum of the entire array:
     $$\text{totalSum} = \sum_{i=0}^{n-1} \text{nums}[i]$$

2. **Single Pass Comparison**:
   - Maintain a running scalar variable `leftSum = 0`.
   - Iterate through each index $i$ from $0$ to $n-1$:
     - The sum of elements strictly to the right of index $i$ is:
       $$\text{rightSum} = \text{totalSum} - \text{leftSum} - \text{nums}[i]$$
     - If $\text{leftSum} == \text{rightSum}$, we have found the equilibrium point. Because we iterate from left to right, the first match encountered is guaranteed to be the leftmost equilibrium index. Return $i$.
     - Increment `leftSum`:
       $$\text{leftSum} = \text{leftSum} + \text{nums}[i]$$

3. **Fallback**:
   - If the loop finishes without finding an equilibrium index, return `-1`.

### Complexity Analysis
- **Time Complexity**: $O(n)$, requiring two linear passes over the array of size $n$.
- **Space Complexity**: $O(1)$, using only scalar sum tracking variables.

---

## Code

```java
public static int solve(int[] nums) {
    if (nums == null || nums.length == 0) {
        return -1;
    }

    int totalSum = 0;
    for (int i = 0; i < nums.length; i++) {
        totalSum = totalSum + nums[i];
    }

    int leftSum = 0;
    for (int i = 0; i < nums.length; i++) {
        int rightSum = totalSum - leftSum - nums[i];

        if (leftSum == rightSum) {
            return i;
        }

        leftSum = leftSum + nums[i];
    }

    return -1;
}
```
