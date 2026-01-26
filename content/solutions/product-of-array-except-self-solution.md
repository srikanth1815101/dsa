---
title: "Product of Array Except Self - Solution"
problemUrl: "/problems/product-of-array-except-self/"
---

## Explanation

The key insight is that for each position `i`, the answer is the **product of all elements to the left** multiplied by the **product of all elements to the right**.

**Algorithm:**
1. First pass (left to right): Compute prefix products and store in result
2. Second pass (right to left): Multiply each position by the suffix product
3. We keep a running suffix product variable to achieve O(1) extra space

This avoids division and handles zeros naturally.

## Code

```java
class Solution {
    public int[] productExceptSelf(int[] nums) {
        int n = nums.length;
        int[] result = new int[n];
        
        // Left pass: prefix products
        result[0] = 1;
        for (int i = 1; i < n; i++) {
            result[i] = result[i - 1] * nums[i - 1];
        }
        
        // Right pass: multiply by suffix products
        int suffix = 1;
        for (int i = n - 1; i >= 0; i--) {
            result[i] *= suffix;
            suffix *= nums[i];
        }
        
        return result;
    }
}
```
