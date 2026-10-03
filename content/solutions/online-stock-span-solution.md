---
title: "Online Stock Span - Solution"
date: 2026-10-03T11:20:00+05:30
problemUrl: "/problems/online-stock-span/"
weight: 24
---
<!-- All rights reserved to CSRGO DSA -->

## Explanation

For an array of daily stock prices, we want to find the span of each day. The span is the count of consecutive preceding days up to and including the current day where the price was less than or equal to the current day's price.



The naive approach checks all previous days linearly for each day, taking $O(n^2)$ time.
We can optimize this to $O(n)$ using a monotonic decreasing stack:
1. The stack stores pairs of `[price, span]`.
2. When a new day's price arrives:
   - Initialize `currentSpan = 1`.
   - While the stack is not empty and the price at the top of the stack is less than or equal to today's price, pop that entry and add its span to `currentSpan`.
   - Push `[currentPrice, currentSpan]` onto the stack.
3. Because each price is pushed onto the stack once and popped at most once, the total amortized time across all days is $O(n)$.

### Step-by-Step Algorithm:
1. Let `n = prices.length`. Allocate an integer array `spans` of length `n`.
2. Initialize an empty stack `stack` storing pairs of integers: `[price, span]`.
3. For each day `i` from `0` to `n - 1`:
   - Initialize `span = 1`.
   - While `!stack.isEmpty()` and `stack.peek()[0] <= prices[i]`:
     - Pop the top pair and set `span = span + top[1]`.
   - Push `new int[]{prices[i], span}` onto the stack.
   - Store `spans[i] = span`.
4. Return `spans`.

## Code

```java
public static int[] solve(int[] prices) {
    if (prices == null || prices.length == 0) {
        return new int[0];
    }

    int n = prices.length;
    int[] spans = new int[n];
    Deque<int[]> stack = new ArrayDeque<>();

    for (int i = 0; i < n; i = i + 1) {
        int span = 1;
        while (!stack.isEmpty() && stack.peek()[0] <= prices[i]) {
            int[] top = stack.pop();
            span = span + top[1];
        }
        stack.push(new int[]{prices[i], span});
        spans[i] = span;
    }

    return spans;
}
```
