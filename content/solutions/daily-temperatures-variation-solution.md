---
title: "Daily Temperatures (Variation) - Solution"
problemUrl: "/problems/daily-temperatures-variation/"
---
<!-- All rights reserved to CSRGO DSA -->

## Explanation

In the linear Daily Temperatures problem, we use a monotonic decreasing stack from left to right. Because this variation features a circular temperature array, a warmer day for `temperatures[i]` may appear before index `i` in the original array.

To handle circularity without duplicating the array in memory, we simulate traversing the array twice by running a loop from `0` to `2 * n - 1`, accessing elements using `temperatures[i % n]`.
1. We maintain a stack storing original indices.
2. While the current temperature `temperatures[i % n]` is strictly greater than `temperatures[stack.peek()]`, we pop the index `prevIndex = stack.pop()` and record the wait time as `i - prevIndex`.
3. In the first pass (`i < n`), we push `i` onto the stack so its next warmer day can be found in the current or subsequent pass.
4. Any index remaining in the stack has no warmer day in the circular array, remaining `0`.

Each index is pushed at most once and popped at most once, yielding optimal `O(n)` time.

### Step-by-Step Algorithm:
1. Initialize an integer `n = temperatures.length` and result array `ans` of size `n` filled with `0`.
2. Initialize an empty monotonic stack to store indices.
3. Loop `i` from `0` up to `2 * n - 1`.
4. Let `currTemp = temperatures[i % n]`.
5. While the stack is not empty and `currTemp > temperatures[stack.peek()]`, pop `idx = stack.pop()` and set `ans[idx] = i - idx`.
6. If `i < n`, push `i` onto the stack.
7. Return `ans`.

## Code

```java
public static int[] solve(int[] temperatures) {
    int n = temperatures.length;
    int[] ans = new int[n];
    Deque<Integer> stack = new ArrayDeque<>();

    for (int i = 0; i < 2 * n; i = i + 1) {
        int curr = temperatures[i % n];
        while (!stack.isEmpty() && curr > temperatures[stack.peek()]) {
            int idx = stack.pop();
            ans[idx] = i - idx;
        }
        if (i < n) {
            stack.push(i);
        }
    }

    return ans;
}
```
