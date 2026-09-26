---
title: "Product of Array Except Self - Solution"
problemUrl: "/problems/product-of-array-except-self/"
---
<!-- All rights reserved to CSRGO DSA -->

## Explanation

The problem asks for the product of all elements except `nums[i]` in $O(n)$ time **without using division**.

For any index $i$, the required product can be decomposed into two distinct parts:
$$\text{answer}[i] = (\text{product of elements to the left of } i) \times (\text{product of elements to the right of } i)$$

### Prefix and Suffix Product Strategy ($O(1)$ Extra Space)

1. **Prefix Pass**:
   - Construct the output array `ans` of length $n$.
   - Set $\text{ans}[0] = 1$ because there are no elements to the left of index 0.
   - For every subsequent index $i$ from 1 to $n-1$:
     $$\text{ans}[i] = \text{ans}[i - 1] \times \text{nums}[i - 1]$$
     Now `ans[i]` stores the product of all elements to the left of index $i$.

2. **Suffix Pass**:
   - Maintain a scalar accumulator `right = 1` representing the running product of elements to the right.
   - Iterate backwards from $n-1$ down to 0:
     - Multiply `ans[i]` by `right`:
       $$\text{ans}[i] = \text{ans}[i] \times \text{right}$$
     - Update `right` by multiplying it with the current element:
       $$\text{right} = \text{right} \times \text{nums}[i]$$

3. **Return**:
   - Return `ans`. The result array itself does not count as extra auxiliary space.

### Complexity Analysis
- **Time Complexity**: $O(n)$, making two linear passes over the array of size $n$.
- **Space Complexity**: $O(1)$ auxiliary space, since we reuse the output array for intermediate prefix values and use only a single variable `right`.

---

## Code

```java
public static int[] solve(int[] nums) {
    if (nums == null || nums.length == 0) {
        return new int[]{};
    }

    int n = nums.length;
    int[] ans = new int[n];

    ans[0] = 1;
    for (int i = 1; i < n; i++) {
        ans[i] = ans[i - 1] * nums[i - 1];
    }

    int right = 1;
    for (int i = n - 1; i >= 0; i--) {
        ans[i] = ans[i] * right;
        right = right * nums[i];
    }

    return ans;
}
```
