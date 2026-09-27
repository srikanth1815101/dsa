---
title: "Friends Pairing - Solution"
problemUrl: "/problems/friends-pairing/"
---
<!-- All rights reserved to CSRGO DSA -->

## Explanation

For `n` friends, each person can either remain single or pair up with one other friend.

Consider the $n$-th person:
1. If the $n$-th person remains single, the remaining $n - 1$ friends can be paired in $f(n - 1)$ ways.
2. If the $n$-th person pairs up, they have $(n - 1)$ choices of partners. The remaining $n - 2$ friends can then be paired in $f(n - 2)$ ways, yielding $(n - 1) \times f(n - 2)$ ways.

Combining both independent possibilities yields the linear recurrence:
$$f(n) = f(n - 1) + (n - 1) \times f(n - 2)$$

Using two variables to store previous states allows computing the result in $O(n)$ time and $O(1)$ space.

### Step-by-Step Algorithm:
1. If `n <= 0`, return `0L`.
2. If `n <= 2`, return `(long) n`.
3. Initialize `prev2 = 1L` and `prev1 = 2L`.
4. Loop `i` from `3` up to `n`:
   - Calculate `current = prev1 + (long) (i - 1) * prev2`.
   - Shift `prev2 = prev1` and `prev1 = current`.
5. Return `prev1`.

## Code

```java
public static long solve(int n) {
    if (n <= 0) {
        return 0L;
    }
    if (n <= 2) {
        return (long) n;
    }

    long prev2 = 1L;
    long prev1 = 2L;

    for (int i = 3; i <= n; i = i + 1) {
        long current = prev1 + (long) (i - 1) * prev2;
        prev2 = prev1;
        prev1 = current;
    }

    return prev1;
}
```
