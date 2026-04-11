---
title: "GCD and LCM - Solution"
problemUrl: "/problems/gcd-and-lcm/"
---

<!-- All rights reserved to CSRGO DSA -->

## Explanation

The most efficient way to find the GCD is the **Euclidean Algorithm**. It relies on the principle that the GCD of two numbers also divides their difference. Specifically, `GCD(a, b) = GCD(b, a % b)`. We repeat this until the remainder is zero.

Once the GCD is found, the LCM can be calculated using the mathematical relationship:
`n1 * n2 = GCD(n1, n2) * LCM(n1, n2)`

Thus, `LCM(n1, n2) = (n1 * n2) / GCD(n1, n2)`. 

Note: When multiplying `n1` and `n2`, the result might exceed the range of an `int` (up to 2 billion). It is safer to use `long` for the product calculation before dividing by the GCD.

### Step-by-Step Algorithm:
1. Store initial values of `n1` and `n2` in `temp1` and `temp2`.
2. While `temp1 % temp2` is not `0`:
    - Calculate remainder `rem = temp1 % temp2`.
    - Update `temp1 = temp2`.
    - Update `temp2 = rem`.
3. The final value of `temp2` is the **GCD**.
4. Calculate **LCM** using the formula: `(n1 * n2) / GCD`.
5. Return both results.

## Code

```java
public static long[] solve(int n1, int n2) {
    long on1 = n1;
    long on2 = n2;
    
    while (n1 % n2 != 0) {
        int rem = n1 % n2;
        n1 = n2;
        n2 = rem;
    }
    
    long gcd = n2;
    long lcm = (on1 * on2) / gcd;
    
    return new long[] {gcd, lcm};
}
```
