---
title: "Maximum of Minimum for Every Window - Solution"
date: 2026-10-03T11:20:00+05:30
problemUrl: "/problems/maximum-of-minimum-for-every-window/"
weight: 23
---
<!-- All rights reserved to CSRGO DSA -->

## Explanation

For an integer array of length `n`, we want to calculate the maximum value among the minimum elements of all contiguous subarrays of size `k`, for each `k` from `1` to `n`.



A naive calculation evaluates every window of size $k$ for all $k$, which requires $O(n^2)$ time. Instead, we can invert the perspective:
1. Instead of asking "for a given window size, what is the minimum?", we ask: "for each element `arr[i]`, what is the maximum window size in which `arr[i]` is the minimum element?"
2. An element `arr[i]` remains the minimum as long as elements to its left and right are greater than or equal to `arr[i]`.
3. Using a monotonic stack:
   - Find the index of the previous strictly smaller element `prev[i]`.
   - Find the index of the next strictly smaller element `next[i]`.
   - The maximum window length where `arr[i]` is the minimum is `len = next[i] - prev[i] - 1`.
4. Then, `arr[i]` can serve as a candidate for window length `len`: `ans[len] = max(ans[len], arr[i])`.
5. Finally, if an element is a minimum for a window of size `len`, it can also serve for smaller window sizes. Thus, we propagate values backward from $n-1$ down to $1$: `ans[i] = max(ans[i], ans[i + 1])`.

### Step-by-Step Algorithm:
1. Let `n = arr.length`. Initialize arrays `prev` of size `n` with `-1` and `next` of size `n` with `n`.
2. Use a monotonic increasing stack to compute `prev`:
   - Iterate `i` from `0` to `n - 1`. Pop elements from stack while `arr[stack.peek()] >= arr[i]`.
   - If stack is not empty, `prev[i] = stack.peek()`. Push `i` to stack.
3. Clear stack and compute `next`:
   - Iterate `i` from `n - 1` down to `0`. Pop elements while `arr[stack.peek()] >= arr[i]`.
   - If stack is not empty, `next[i] = stack.peek()`. Push `i` to stack.
4. Initialize result array `ans` of size `n + 1` with `0`.
5. For each index `i` from `0` to `n - 1`:
   - Compute window size `len = next[i] - prev[i] - 1`.
   - Set `ans[len] = Math.max(ans[len], arr[i])`.
6. Propagate values from right to left:
   - Iterate `i` from `n - 1` down to `1`:
   - Set `ans[i] = Math.max(ans[i], ans[i + 1])`.
7. Construct output array `res` of size `n` where `res[i] = ans[i + 1]` for `i` from `0` to `n - 1`. Return `res`.

## Code

```java
public static int[] solve(int[] arr) {
    if (arr == null || arr.length == 0) {
        return new int[0];
    }

    int n = arr.length;
    int[] prev = new int[n];
    int[] next = new int[n];
    Arrays.fill(prev, -1);
    Arrays.fill(next, n);

    Deque<Integer> stack = new ArrayDeque<>();
    for (int i = 0; i < n; i = i + 1) {
        while (!stack.isEmpty() && arr[stack.peek()] >= arr[i]) {
            stack.pop();
        }
        if (!stack.isEmpty()) {
            prev[i] = stack.peek();
        }
        stack.push(i);
    }

    stack.clear();
    for (int i = n - 1; i >= 0; i = i - 1) {
        while (!stack.isEmpty() && arr[stack.peek()] >= arr[i]) {
            stack.pop();
        }
        if (!stack.isEmpty()) {
            next[i] = stack.peek();
        }
        stack.push(i);
    }

    int[] ans = new int[n + 1];
    for (int i = 0; i < n; i = i + 1) {
        int len = next[i] - prev[i] - 1;
        ans[len] = Math.max(ans[len], arr[i]);
    }

    for (int i = n - 1; i >= 1; i = i - 1) {
        ans[i] = Math.max(ans[i], ans[i + 1]);
    }

    int[] res = new int[n];
    for (int i = 0; i < n; i = i + 1) {
        res[i] = ans[i + 1];
    }
    return res;
}
```
