---
title: "Next Greater Element - Solution"
problemUrl: "/problems/next-greater-element/"
---
<!-- All rights reserved to CSRGO DSA -->

## Explanation

To determine the next greater element for each index in linear time, we can use a monotonic stack by traversing the array from right to left.

The monotonic stack stores elements encountered to the right in strictly decreasing order from top to bottom. For each element `arr[i]`, we pop all elements from the stack that are less than or equal to `arr[i]`, because `arr[i]` shadows them for all elements to its left. 

After popping, if the stack is non-empty, the top of the stack is the nearest element to the right strictly greater than `arr[i]`. If the stack is empty, no greater element exists to the right, so we assign `-1`. We then push `arr[i]` onto the stack and continue.

Each element is pushed and popped at most once, guaranteeing an optimal $O(n)$ time complexity.

### Step-by-Step Algorithm:
1. Initialize an array `result` of size equal to `arr.length`.
2. Initialize an empty integer stack.
3. Traverse the array backwards from `i = arr.length - 1` down to `0`:
   - While the stack is not empty and the top of the stack is less than or equal to `arr[i]`, pop the stack.
   - If the stack is empty, set `result[i] = -1`.
   - Otherwise, set `result[i] = stack.peek()`.
   - Push `arr[i]` onto the stack.
4. Return `result`.

## Code

```java
public static int[] solve(int[] arr) {
    int n = arr.length;
    int[] result = new int[n];
    Stack<Integer> stack = new Stack<>();
    for (int i = n - 1; i >= 0; i = i - 1) {
        while (!stack.isEmpty() && stack.peek() <= arr[i]) {
            stack.pop();
        }
        if (stack.isEmpty()) {
            result[i] = -1;
        } else {
            result[i] = stack.peek();
        }
        stack.push(arr[i]);
    }
    return result;
}
```
