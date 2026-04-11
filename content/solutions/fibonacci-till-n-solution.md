---
title: "Fibonacci Till N - Solution"
problemUrl: "/problems/fibonacci-till-n/"
---
<!-- All rights reserved to CSRGO DSA -->

## Explanation

To generate the Fibonacci sequence up to length `n`, we iteratively build the series starting from base numbers.

A straightforward optimal approach uses standard iteration with variables tracking the last two values computed. Since we must return `n` values, we instantiate an `ArrayList`, add the base cases `0` and `1` (accounting safely for inputs where `n` is small), and perform a loop maintaining a sliding calculation sum. This computes cleanly in exactly $O(N)$ operations with matching $O(N)$ space allocation for the accumulated sequence list.

### Step-by-Step Algorithm:
1. Handle the boundary minimum case: If `n <= 0`, return an empty list immediately.
2. If `n == 1`, return `[0]`.
3. Otherwise, pre-populate the result list with `0` and `1`.
4. Initialize a simple loop from `2` up to `n-1`.
5. On each iteration, fetch the last two items, calculate their sum, and push the new sum into the result list.
6. Return the finalized list holding precisely `n` items.

## Code

```java
public static List<Integer> solve(int n) {
    List<Integer> fib = new ArrayList<>();
    if (n <= 0) return fib;
    
    fib.add(0);
    if (n == 1) return fib;
    
    fib.add(1);
    
    for (int i = 2; i < n; i++) {
        int nextValue = fib.get(i - 1) + fib.get(i - 2);
        fib.add(nextValue);
    }
    
    return fib;
}
```
