---
title: "Rotate Array - Solution"
problemUrl: "/problems/rotate-array/"
---
<!-- All rights reserved to CSRGO DSA -->

## Explanation

The optimal $O(1)$ space and $O(n)$ time approach is the famous **Three-Reversal Algorithm**:

### 1. Normalize $k$
Because rotating an array of size $n$ by $n$ steps results in the original array:
$$k = k \pmod n$$
If $k < 0$, rotating left by $|k|$ is equivalent to rotating right by:
$$k = k + n$$

### 2. Three Reversals
To rotate the array right by $k$ positions:
1. **Reverse Part 1**: Reverse the first $n - k$ elements from index `0` to `n - k - 1`.
2. **Reverse Part 2**: Reverse the remaining $k$ elements from index `n - k` to `n - 1`.
3. **Reverse Full Array**: Reverse all elements from index `0` to `n - 1`.

### Complexity Analysis
- **Time Complexity**: $O(n)$, since each element is swapped twice across the three reversal stages.
- **Space Complexity**: $O(1)$, rotating entirely in-place.

---

## Code

```java
public static void reverse(int[] arr, int left, int right) {
    while (left < right) {
        int temp = arr[left];
        arr[left] = arr[right];
        arr[right] = temp;

        left = left + 1;
        right = right - 1;
    }
}

public static int[] solve(int[] arr, int k) {
    if (arr == null || arr.length <= 1) {
        return arr;
    }

    int n = arr.length;
    k = k % n;
    if (k < 0) {
        k = k + n;
    }

    if (k == 0) {
        return arr;
    }

    reverse(arr, 0, n - k - 1);
    reverse(arr, n - k, n - 1);
    reverse(arr, 0, n - 1);

    return arr;
}
```
