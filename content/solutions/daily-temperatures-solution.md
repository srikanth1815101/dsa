---
title: "Daily Temperatures - Solution"
problemUrl: "/problems/daily-temperatures/"
---
<!-- All rights reserved to CSRGO DSA -->

## Explanation

To find the number of days until the next warmer temperature in linear time, we use a monotonic stack that holds indices of days with strictly decreasing temperatures.

As we iterate through the days from index `0` to `n - 1`:
- While the stack is not empty and the current day's temperature `temperatures[i]` is strictly greater than the temperature at the index stored at the top of the stack (`temperatures[stack.peek()]`), we pop that index `prevIndex`.
- The wait time for `prevIndex` is `i - prevIndex`, so we assign `answer[prevIndex] = i - prevIndex`.
- After resolving all cooler days, we push the current index `i` onto the stack.

Days that never encounter a warmer day remain with their default value of `0`. Each index is pushed and popped at most once, providing optimal $O(n)$ time complexity.

### Step-by-Step Algorithm:
1. Initialize an integer array `answer` of size `temperatures.length`.
2. Initialize an empty stack `stack` to store indices.
3. For each index `i` from `0` to `temperatures.length - 1`:
   - While `!stack.isEmpty()` and `temperatures[i] > temperatures[stack.peek()]`:
     - Pop `prevIndex = stack.pop()`.
     - Assign `answer[prevIndex] = i - prevIndex`.
   - Push `i` onto `stack`.
4. Return `answer`.

## Code

```java
public static int[] solve(int[] temperatures) {
    int n = temperatures.length;
    int[] answer = new int[n];
    Stack<Integer> stack = new Stack<>();
    for (int i = 0; i < n; i = i + 1) {
        while (!stack.isEmpty() && temperatures[i] > temperatures[stack.peek()]) {
            int prevIndex = stack.pop();
            answer[prevIndex] = i - prevIndex;
        }
        stack.push(i);
    }
    return answer;
}
```
