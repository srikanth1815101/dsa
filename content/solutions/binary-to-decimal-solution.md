---
title: "Binary to Decimal - Solution"
problemUrl: "/problems/binary-to-decimal/"
---

<!-- All rights reserved to CSRGO DSA -->

## Explanation

Converting binary to decimal involves weighting each binary digit (bit) by its corresponding power of 2 based on its position.

### Algorithm:
1. Extract digits of the binary number from right to left using the modulo operator `% 10`.
2. Multiply each extracted digit by $2^p$, where $p$ is the position of the digit (starting from 0).
3. Sum these values to get the decimal equivalent.
4. Move to the next digit using integer division `/ 10` and increment $p$.

Example for `n = 110`:
1. Digit `0`: $0 \times 2^0 = 0$. Sum = 0.
2. Digit `1`: $1 \times 2^1 = 2$. Sum = 2.
3. Digit `1`: $1 \times 2^2 = 4$. Sum = 6.
Final result: `6`.

### Step-by-Step Algorithm:
1. Initialize `decimalResult = 0` and `powerOfTwo = 1`.
2. While `n > 0`:
    - Extract last digit: `lastBit = n % 10`.
    - Update result: `decimalResult = decimalResult + lastBit * powerOfTwo`.
    - Move to next digit: `n = n / 10`.
    - Update power: `powerOfTwo = powerOfTwo * 2`.
3. Return `decimalResult`.

## Code

```java
public static int solve(long n) {
    int decimal = 0;
    int weight = 1;
    
    while (n > 0) {
        long lastBit = n % 10;
        n = n / 10;
        
        decimal = decimal + (int) (lastBit * weight);
        weight = weight * 2;
    }
    
    return decimal;
}
```
