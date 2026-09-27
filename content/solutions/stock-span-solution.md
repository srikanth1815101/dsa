---
title: "Stock Span - Solution"
problemUrl: "/problems/stock-span/"
---
<!-- All rights reserved to CSRGO DSA -->

## Explanation

The stock span on day `i` equals `i - j`, where `j` is the index of the nearest day to the left whose price is strictly greater than `prices[i]`. If no such day exists, all days from index `0` through `i` have prices less than or equal to `prices[i]`, yielding a span of `i + 1`.

To compute this efficiently for every day in linear time, we maintain a monotonic stack that holds indices of days with strictly decreasing prices.

For each index `i`, we pop indices from the stack as long as the price at the stack's top index is less than or equal to `prices[i]`. Once the loop terminates:
- If the stack is empty, every previous day had a lower or equal price, so `span[i] = i + 1`.
- If the stack is non-empty, the index at the top represents the closest higher price to the left, so `span[i] = i - stack.peek()`.

Finally, we push index `i` onto the stack and proceed.

### Step-by-Step Algorithm:
1. Initialize an integer array `span` of size equal to `prices.length`.
2. Initialize an empty stack to store indices.
3. For each index `i` from `0` up to `prices.length - 1`:
   - While the stack is not empty and `prices[stack.peek()] <= prices[i]`, pop the top index from the stack.
   - If the stack is empty, set `span[i] = i + 1`.
   - Otherwise, set `span[i] = i - stack.peek()`.
   - Push `i` onto the stack.
4. Return `span`.

## Code

```java
public static int[] solve(int[] prices) {
    int n = prices.length;
    int[] span = new int[n];
    Stack<Integer> stack = new Stack<>();
    for (int i = 0; i < n; i = i + 1) {
        while (!stack.isEmpty() && prices[stack.peek()] <= prices[i]) {
            stack.pop();
        }
        if (stack.isEmpty()) {
            span[i] = i + 1;
        } else {
            span[i] = i - stack.peek();
        }
        stack.push(i);
    }
    return span;
}
```
