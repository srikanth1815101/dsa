---
title: "Sum of Subarray Minimums - Solution"
problemUrl: "/problems/sum-of-subarray-minimums/"
---
<!-- All rights reserved to CSRGO DSA -->

## Explanation

Instead of computing the minimum for each subarray in `O(n^2)` time, we determine how many subarrays have `arr[i]` as their minimum value.

For each index `i`:
1. Find the distance `left[i]` to the previous strictly smaller element (`arr[j] < arr[i]` with `j < i`). The element `arr[i]` is the minimum for any subarray starting in the range `(j, i]`.
2. Find the distance `right[i]` to the next smaller or equal element (`arr[k] <= arr[i]` with `k > i`).
Using strictly smaller on the left and smaller or equal on the right avoids duplicate counting when identical values exist.

The number of subarrays where `arr[i]` is the minimum is `left[i] * right[i]`. The total sum is:
`sum((long) arr[i] * left[i] * right[i]) % (10^9 + 7)`.

Using monotonic stacks, both `left` and `right` arrays can be computed in `O(n)` time.

### Step-by-Step Algorithm:
1. Initialize constant `MOD = 1000000007` and arrays `left` and `right` of size `n`.
2. Use a monotonic stack storing indices to compute `left[i]`: the number of elements to the left strictly greater than `arr[i]`, plus 1.
3. Clear the stack and compute `right[i]`: the number of elements to the right greater than or equal to `arr[i]`, plus 1.
4. Initialize `totalSum = 0` as a 64-bit `long`.
5. For each index `i`, compute contribution `(long) arr[i] * left[i] * right[i]` and add to `totalSum` modulo `MOD`.
6. Return `(int) totalSum`.

## Code

```java
public static int solve(int[] arr) {
    int n = arr.length;
    long mod = 1000000007L;
    int[] left = new int[n];
    int[] right = new int[n];
    Deque<Integer> stack = new ArrayDeque<>();

    for (int i = 0; i < n; i = i + 1) {
        while (!stack.isEmpty() && arr[stack.peek()] > arr[i]) {
            stack.pop();
        }
        if (stack.isEmpty()) {
            left[i] = i + 1;
        } else {
            left[i] = i - stack.peek();
        }
        stack.push(i);
    }

    stack.clear();

    for (int i = n - 1; i >= 0; i = i - 1) {
        while (!stack.isEmpty() && arr[stack.peek()] >= arr[i]) {
            stack.pop();
        }
        if (stack.isEmpty()) {
            right[i] = n - i;
        } else {
            right[i] = stack.peek() - i;
        }
        stack.push(i);
    }

    long total = 0;
    for (int i = 0; i < n; i = i + 1) {
        long contribution = (long) arr[i] * left[i] * right[i];
        total = (total + contribution) % mod;
    }

    return (int) total;
}
```
