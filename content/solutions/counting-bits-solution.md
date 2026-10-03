---
title: "Counting Bits - Solution"
date: 2026-10-03T11:20:00+05:30
problemUrl: "/problems/counting-bits/"
weight: 70
---
<!-- All rights reserved to CSRGO DSA -->

## Explanation

The problem asks for an array `ans` of size `n + 1` where `ans[i]` contains the count of set bits (1s) in the binary representation of `i`, for all $0 \le i \le n$. We need to compute this efficiently in $\mathcal{O}(n)$ time.

Rather than counting bits independently for every number using $\mathcal{O}(n \log n)$ time, we can observe an optimal substructure relationship suitable for **Dynamic Programming**:
- Right shifting an integer `i` by 1 bit (`i >> 1`) removes its least significant bit.
- The number of set bits in `i` is simply the number of set bits in `i >> 1`, plus `1` if `i` is odd (`i & 1`), or `0` if `i` is even.

Thus, the transition equation is:
$$\text{ans}[i] = \text{ans}[i \gg 1] + (i \ \& \ 1)$$

Since $i \gg 1 < i$, the answer for the subproblem $i \gg 1$ is already known by the time we reach $i$.

### Step-by-Step Algorithm:
1. Allocate an integer array `ans` of size `n + 1`.
2. Initialize `ans[0] = 0` as the base case.
3. Iterate `i` from `1` up to `n`:
   - Compute `ans[i] = ans[i >> 1] + (i & 1)`.
4. Return `ans`.

## Code

```java
public static int[] solve(int n) {
    int[] ans = new int[n + 1];

    for (int i = 1; i <= n; i = i + 1) {
        ans[i] = ans[i >> 1] + (i & 1);
    }

    return ans;
}
```
