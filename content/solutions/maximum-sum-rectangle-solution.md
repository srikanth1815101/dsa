---
title: "Maximum Sum Rectangle - Solution"
problemUrl: "/problems/maximum-sum-rectangle/"
---
<!-- All rights reserved to CSRGO DSA -->

## Explanation

Finding the maximum sum rectangle in a 2D matrix in brute force requires checking all $O(R^2 C^2)$ submatrices, taking $O(R^2 C^2)$ time. Using **2D Kadane's Algorithm**, we can reduce this to $O(C^2 \times R)$ time.

### Algorithm Steps
1. **Fix Column Boundaries**:
   - Iterate over all possible left column boundaries `left` from $0$ to $C - 1$.
   - Initialize an accumulator array `temp` of size $R$ with all zeros.
2. **Expand Right Column**:
   - For each right column boundary `right` from `left` to $C - 1$:
     - Add the elements of column `right` to `temp`:
       $$\text{temp}[i] = \text{temp}[i] + \text{mat}[i][\text{right}]$$
     - `temp[i]` now holds the sum of elements in row $i$ between columns `left` and `right`.
3. **1D Kadane's Algorithm on `temp`**:
   - The problem of finding the best top and bottom row boundaries for the fixed column interval `[left, right]` is now identical to finding the maximum sum contiguous subarray in `temp`.
   - Run 1D Kadane's algorithm on `temp`:
     - Maintain `currentSum = 0` and `maxSubarray = Integer.MIN_VALUE`.
     - For each element in `temp`:
       $$\text{currentSum} = \max(\text{temp}[i], \text{currentSum} + \text{temp}[i])$$
       $$\text{maxSubarray} = \max(\text{maxSubarray}, \text{currentSum})$$
   - Update the global maximum sum:
     $$\text{globalMax} = \max(\text{globalMax}, \text{maxSubarray})$$
4. Return `globalMax`.

### Complexity Analysis
- **Time Complexity**: $O(C^2 \times R)$. There are $O(C^2)$ pairs of column boundaries, and for each pair, we update `temp` and run 1D Kadane's algorithm in $O(R)$ time.
- **Space Complexity**: $O(R)$ auxiliary memory to store the `temp` row-sum array.

---

## Code

```java
public static int solve(int[][] mat) {
    if (mat == null || mat.length == 0 || mat[0].length == 0) {
        return 0;
    }

    int R = mat.length;
    int C = mat[0].length;

    int globalMax = Integer.MIN_VALUE;

    for (int left = 0; left < C; left++) {
        int[] temp = new int[R];

        for (int right = left; right < C; right++) {
            for (int i = 0; i < R; i++) {
                temp[i] = temp[i] + mat[i][right];
            }

            int currentSum = temp[0];
            int maxSubarray = temp[0];

            for (int i = 1; i < R; i++) {
                if (currentSum + temp[i] > temp[i]) {
                    currentSum = currentSum + temp[i];
                } else {
                    currentSum = temp[i];
                }

                if (currentSum > maxSubarray) {
                    maxSubarray = currentSum;
                }
            }

            if (maxSubarray > globalMax) {
                globalMax = maxSubarray;
            }
        }
    }

    return globalMax;
}
```
