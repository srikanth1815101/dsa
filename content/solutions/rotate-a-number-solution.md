---
title: "Rotate a Number - Solution"
problemUrl: "/problems/rotate-a-number/"
---

<!-- All rights reserved to CSRGO DSA -->

## Explanation

Rotating a number involves splitting it into two parts and then recombining them in the reverse order. 

First, we determine the number of digits `d` in `n`. We then normalize `k` because a rotation of `d` or multiples of `d` results in the same number. 
1. `k = k % d` brings it within range.
2. If `k` is negative, rotating left by `|k|` is equivalent to rotating right by `d + k`.

Once we have a positive right-rotation count `k`:
- The number is split into a "divisor" (`10^k`) and a "multiplier" (`10^(d-k)`).
- The quotient `q = n / 10^k` and remainder `r = n % 10^k`.
- The rotated number is `r * 10^(d-k) + q`.

### Step-by-Step Algorithm:
1. Count the number of digits `len` in `n`.
2. Normalize `k = k % len`.
3. If `k < 0`, convert it to positive right rotation: `k = k + len`.
4. Create a divisor equal to `10^k`.
5. Create a multiplier equal to `10^(len-k)`.
6. Calculate the quotient `q = n / divisor` and the remainder `r = n % divisor`.
7. The result is `r * multiplier + q`.

## Code

```java
public static int solve(int n, int k) {
    int temp = n;
    int len = 0;
    while (temp > 0) {
        temp = temp / 10;
        len = len + 1;
    }
    
    k = k % len;
    if (k < 0) {
        k = k + len;
    }
    
    int div = 1;
    int mult = 1;
    for (int i = 1; i <= len; i = i + 1) {
        if (i <= k) {
            div = div * 10;
        } else {
            mult = mult * 10;
        }
    }
    
    int q = n / div;
    int r = n % div;
    
    return (r * mult) + q;
}
```
