---
title: "Count Sort - Solution"
problemUrl: "/problems/count-sort/"
---
<!-- All rights reserved to CSRGO DSA -->

## Explanation

Counting Sort sorts an array in linear $O(n + k)$ time by avoiding pairwise element comparisons:

1. **Find Range**: Scan the array to locate the minimum (`min`) and maximum (`max`) values. The range of distinct numbers is `range = max - min + 1`.
2. **Frequency Table**: Create an array `freq` of size `range`. Iterate through `arr`, incrementing the count at offset index `arr[i] - min`.
3. **Prefix Sum (Positions)**: Convert the frequency array into prefix sums where `freq[i] = freq[i] + freq[i - 1]`. Each entry now designates the 1-based rightmost index where the corresponding value should land.
4. **Stable Output Construction**:
   - Traverse the original array `arr` backwards (from `n - 1` down to `0`).
   - For element `val = arr[i]`, its mapped index in the frequency table is `val - min`.
   - The destination index in the output array is `pos = freq[val - min] - 1`.
   - Place `ans[pos] = val`.
   - Decrement `freq[val - min] = freq[val - min] - 1`.
5. Traversing backwards ensures that elements with identical values preserve their original relative order, guaranteeing the algorithm is strictly stable.

### Step-by-Step Algorithm:
1. If `arr == null || arr.length <= 1`, return `arr`.
2. Find `min` and `max` in `arr`.
3. Initialize `int range = max - min + 1`.
4. Create `int[] freq = new int[range]`.
5. For each element `val` in `arr`, increment `freq[val - min] = freq[val - min] + 1`.
6. Compute prefix sums across `freq` from index `1` to `range - 1`:
   - `freq[i] = freq[i] + freq[i - 1]`.
7. Initialize `int[] ans = new int[arr.length]`.
8. Loop `i` from `arr.length - 1` down to `0`:
   - Let `int val = arr[i]`.
   - Compute `int pos = freq[val - min] - 1`.
   - Set `ans[pos] = val`.
   - Decrement `freq[val - min] = freq[val - min] - 1`.
9. Return `ans`.

## Code

```java
public static int[] solve(int[] arr) {
    if (arr == null || arr.length <= 1) {
        return arr;
    }

    int min = arr[0];
    int max = arr[0];
    for (int i = 1; i < arr.length; i = i + 1) {
        if (arr[i] < min) {
            min = arr[i];
        }
        if (arr[i] > max) {
            max = arr[i];
        }
    }

    int range = max - min + 1;
    int[] freq = new int[range];

    for (int i = 0; i < arr.length; i = i + 1) {
        int idx = arr[i] - min;
        freq[idx] = freq[idx] + 1;
    }

    for (int i = 1; i < range; i = i + 1) {
        freq[i] = freq[i] + freq[i - 1];
    }

    int[] ans = new int[arr.length];
    for (int i = arr.length - 1; i >= 0; i = i - 1) {
        int val = arr[i];
        int pos = freq[val - min] - 1;
        ans[pos] = val;
        freq[val - min] = freq[val - min] - 1;
    }

    return ans;
}
```
