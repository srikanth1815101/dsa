---
title: "Digit Frequency - Solution"
problemUrl: "/problems/digit-frequency/"
---
<!-- All rights reserved to CSRGO DSA -->

## Explanation

To find the frequency of a target digit `d` within an integer `n`, we iteratively extract the least significant digit using the modulo operator:

$$\text{rem} = n \pmod{10}$$

If $\text{rem} = d$, we increment our count. The number is then scaled down by dividing by 10:

$$n = \lfloor n / 10 \rfloor$$

This process continues until $n$ becomes $0$.

### Edge Cases
- When $n = 0$:
  - If $d = 0$, the frequency is `1` because the number zero consists of a single `0` digit.
  - If $d \ne 0$, the frequency is `0`.
- If negative values of $n$ are provided, taking the absolute value `Math.abs(n)` preserves proper remainder evaluation.

Since each iteration eliminates one base-10 digit, the loop executes at most $\lfloor \log_{10} n \rfloor + 1$ times, yielding $O(\log_{10} n)$ time complexity and $O(1)$ auxiliary space complexity.

### Step-by-Step Algorithm:
1. Handle the base case where $n = 0$: return `1` if $d = 0$, else return `0`.
2. Take the absolute value of $n$ to handle sign safety: `temp = Math.abs(n)`.
3. Initialize an accumulator variable `count = 0`.
4. While `temp > 0`:
   - Compute the last digit: `rem = (int) (temp % 10)`.
   - If `rem == d`, increment `count = count + 1`.
   - Truncate the last digit: `temp = temp / 10`.
5. Return `count`.

## Code

```java
public static int solve(long n, int d) {
    if (n == 0) {
        if (d == 0) {
            return 1;
        }
        return 0;
    }
    long temp = Math.abs(n);
    int count = 0;
    while (temp > 0) {
        int rem = (int) (temp % 10);
        if (rem == d) {
            count = count + 1;
        }
        temp = temp / 10;
    }
    return count;
}
```
