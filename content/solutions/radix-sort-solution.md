---
title: "Radix Sort - Solution"
problemUrl: "/problems/radix-sort/"
---
<!-- All rights reserved to CSRGO DSA -->

## Explanation

Radix Sort processes non-negative integers digit by digit, from the least significant digit (LSD) to the most significant digit (MSD):

1. **Find Maximum**: Locate the maximum element `max` in `arr`. The number of digits in `max` determines the number of counting sort passes required.
2. **Exponent Iteration**: Initialize `exp = 1` (representing units place). In each iteration, multiply `exp = exp * 10` while `max / exp > 0`.
3. **Stable Digit Counting Sort**:
   - For a given `exp`, extract the current digit of `arr[i]` using `(arr[i] / exp) % 10`.
   - Maintain a frequency array `count` of size `10` (digits 0 through 9).
   - Convert `count` into prefix sums to establish boundary positions.
   - Build the sorted temporary output `output` by traversing `arr` backwards to preserve stability.
   - Copy `output` back into `arr`.
4. After processing all digit positions, the entire array is fully sorted in $O(d \cdot (n + b))$ time where $d$ is the number of digits and $b = 10$ is the base.

### Step-by-Step Algorithm:
1. If `arr == null || arr.length <= 1`, return `arr`.
2. Find `max` in `arr`.
3. For `int exp = 1; max / exp > 0; exp = exp * 10`:
   - Call `countSortByDigit(arr, exp)`.
4. In `countSortByDigit(arr, exp)`:
   - Create `int[] output = new int[arr.length]` and `int[] count = new int[10]`.
   - For each number in `arr`, extract `digit = (arr[i] / exp) % 10` and increment `count[digit] = count[digit] + 1`.
   - Transform `count` into prefix sums for `i` from `1` to `9`:
     - `count[i] = count[i] + count[i - 1]`.
   - Loop `i` backwards from `arr.length - 1` down to `0`:
     - Determine `digit = (arr[i] / exp) % 10`.
     - Place `output[count[digit] - 1] = arr[i]`.
     - Decrement `count[digit] = count[digit] - 1`.
   - Copy `output` back into `arr`.
5. Return `arr`.

## Code

```java
public static int[] solve(int[] arr) {
    if (arr == null || arr.length <= 1) {
        return arr;
    }

    int max = arr[0];
    for (int i = 1; i < arr.length; i = i + 1) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }

    for (int exp = 1; max / exp > 0; exp = exp * 10) {
        countSortByDigit(arr, exp);
    }

    return arr;
}

private static void countSortByDigit(int[] arr, int exp) {
    int n = arr.length;
    int[] output = new int[n];
    int[] count = new int[10];

    for (int i = 0; i < n; i = i + 1) {
        int digit = (arr[i] / exp) % 10;
        count[digit] = count[digit] + 1;
    }

    for (int i = 1; i < 10; i = i + 1) {
        count[i] = count[i] + count[i - 1];
    }

    for (int i = n - 1; i >= 0; i = i - 1) {
        int digit = (arr[i] / exp) % 10;
        output[count[digit] - 1] = arr[i];
        count[digit] = count[digit] - 1;
    }

    for (int i = 0; i < n; i = i + 1) {
        arr[i] = output[i];
    }
}
```
