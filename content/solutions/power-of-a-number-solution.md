---
title: "Power of a Number - Solution"
problemUrl: "/problems/power-of-a-number/"
---

<!-- All rights reserved to CSRGO DSA -->

## Explanation

The power function $x^n$ can be broken down recursively. The base idea is that $x^n$ is just $x$ multiplied by $x^{n-1}$.

Recursive Steps:
1. **Base Case**: If $n$ is 0, the result is always 1 (since $x^0 = 1$ for any $x \neq 0$).
2. **Recursive Step**: To find $x^n$, we first calculate $x^{n-1}$ recursively and then multiply it by $x$ once more.

For example, $2^3$:
- To get $2^3$, find $2 \times 2^2$.
- To get $2^2$, find $2 \times 2^1$.
- To get $2^1$, find $2 \times 2^0$.
- Since $2^0 = 1$, we go back up: $2 \times 1 = 2$, then $2 \times 2 = 4$, then $2 \times 4 = 8$.

### Step-by-Step Algorithm:
1. Define a recursive function `solve(x, n)`.
2. Check the base case: If `n == 0`, return `1`.
3. If `n > 0`:
    - Recursively call `solve(x, n - 1)`.
    - Multiply the result of the recursive call by `x`.
    - Return the final product.
4. (Optional) For negative `n`, you would return `1.0 / solve(x, -n)`, but per basic constraints, $n \ge 0$.

## Code

```java
public static long solve(int x, int n) {
    if (n == 0) {
        return 1;
    }
    
    long prevPower = solve(x, n - 1);
    long currentPower = x * prevPower;
    
    return currentPower;
}
```
