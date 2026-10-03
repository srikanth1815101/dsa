---
title: "Next Smaller Element - Solution"
problemUrl: "/problems/next-smaller-element/"
---
<!-- All rights reserved to CSRGO DSA -->

## Explanation

We can solve this problem in linear time using a monotonic stack.

By iterating through the array from right to left, we maintain a stack containing elements in strictly increasing order from top to bottom. For each element `nums[i]`:
1. We pop elements from the stack that are greater than or equal to `nums[i]` because they cannot serve as a smaller element for `nums[i]` or any element to its left.
2. If the stack is non-empty, its top element is the next smaller element for `nums[i]`. If empty, no smaller element exists, so we assign `-1`.
3. We push `nums[i]` onto the stack for subsequent elements to the left.

Every element is pushed and popped at most once, resulting in an optimal `O(n)` time complexity.

### Step-by-Step Algorithm:
1. Initialize an array `ans` of the same length as `nums`.
2. Initialize an empty monotonic stack of integers.
3. Iterate from index `i = nums.length - 1` down to `0`.
4. While the stack is not empty and `stack.peek() >= nums[i]`, pop elements from the stack.
5. If the stack is empty, set `ans[i] = -1`; otherwise set `ans[i] = stack.peek()`.
6. Push `nums[i]` onto the stack.
7. Return the `ans` array.

## Code

```java
public static int[] solve(int[] nums) {
    int n = nums.length;
    int[] ans = new int[n];
    Deque<Integer> stack = new ArrayDeque<>();

    for (int i = n - 1; i >= 0; i = i - 1) {
        while (!stack.isEmpty() && stack.peek() >= nums[i]) {
            stack.pop();
        }
        if (stack.isEmpty()) {
            ans[i] = -1;
        } else {
            ans[i] = stack.peek();
        }
        stack.push(nums[i]);
    }

    return ans;
}
```
