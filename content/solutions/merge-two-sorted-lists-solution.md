---
title: "Merge Two Sorted Lists - Solution"
problemUrl: "/problems/merge-two-sorted-lists/"
---
<!-- All rights reserved to CSRGO DSA -->

## Explanation

To merge two sorted linked lists into a single sorted list:
1. Initialize two pointers `i = 0` and `j = 0` to traverse the elements of `l1` and `l2`.
2. Construct a result array with capacity equal to the total length `l1.length + l2.length`.
3. Compare the current elements at `l1[i]` and `l2[j]`.
4. Append the smaller element into the result array and advance its corresponding pointer.
5. If one list is exhausted, append all remaining elements from the other list.
6. Return the merged array.

### Step-by-Step Algorithm:
1. Allocate an array `result` of size `l1.length + l2.length`.
2. Maintain indices `i = 0`, `j = 0`, and `k = 0`.
3. While `i < l1.length` and `j < l2.length`:
   - If `l1[i] <= l2[j]`, assign `result[k] = l1[i]` and increment `i`.
   - Else, assign `result[k] = l2[j]` and increment `j`.
   - Increment `k`.
4. While `i < l1.length`, assign `result[k] = l1[i]`, increment `i` and `k`.
5. While `j < l2.length`, assign `result[k] = l2[j]`, increment `j` and `k`.
6. Return `result`.

## Code

```java
public static int[] solve(int[] l1, int[] l2) {
    int[] result = new int[l1.length + l2.length];
    int i = 0;
    int j = 0;
    int k = 0;

    while (i < l1.length && j < l2.length) {
        if (l1[i] <= l2[j]) {
            result[k] = l1[i];
            i = i + 1;
        } else {
            result[k] = l2[j];
            j = j + 1;
        }
        k = k + 1;
    }

    while (i < l1.length) {
        result[k] = l1[i];
        i = i + 1;
        k = k + 1;
    }

    while (j < l2.length) {
        result[k] = l2[j];
        j = j + 1;
        k = k + 1;
    }

    return result;
}
```
