---
title: "Span of Array - Solution"
problemUrl: "/problems/span-of-array/"
---
<!-- All rights reserved to CSRGO DSA -->

## Explanation

The **span** of an array is defined as:

$$\text{span} = \max(\text{arr}) - \min(\text{arr})$$

Instead of sorting the array in $O(n \log n)$ time, we find both the maximum and minimum elements in a single linear pass of $O(n)$ time:

1. **Initialization**:
   Set both `max` and `min` to the first element `arr[0]`.
2. **Linear Scan**:
   Iterate through indices from `1` to `arr.length - 1`:
   - If `arr[i] > max`, update `max = arr[i]`.
   - If `arr[i] < min`, update `min = arr[i]`.
3. **Compute Span**:
   Return `max - min`.

### Complexity Analysis
- **Time Complexity**: $O(n)$, since we inspect each element of the array exactly once.
- **Space Complexity**: $O(1)$, using only two scalar tracking variables.

---

## Code

```java
public static int solve(int[] arr) {
    if (arr == null || arr.length == 0) {
        return 0;
    }

    int max = arr[0];
    int min = arr[0];

    for (int i = 1; i < arr.length; i = i + 1) {
        if (arr[i] > max) {
            max = arr[i];
        }
        if (arr[i] < min) {
            min = arr[i];
        }
    }

    return max - min;
}
```
