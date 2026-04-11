---
title: "Decimal to Binary - Solution"
problemUrl: "/problems/decimal-to-binary/"
---

<!-- All rights reserved to CSRGO DSA -->

## Explanation

Converting a decimal number to binary involves the "Division by 2" algorithm. 

### Algorithm:
1. Divide the number by 2 and note the remainder.
2. Update the number by taking the quotient.
3. Repeat until the quotient becomes 0.
4. The binary representation is formed by the remainders in the order they were generated (from right to left).

To build the result numerically (as a long):
- We use a variable `multiplier` starting at 1.
- For each remainder `rem`, we add `rem * multiplier` to our result.
- Multiply `multiplier` by 10 in each step to place the next binary digit in the next decimal position.

Example for `n = 6`:
1. `6 % 2 = 0`. Result = `0 * 1 = 0`. `n = 3`, `mult = 10`.
2. `3 % 2 = 1`. Result = `0 + 1 * 10 = 10`. `n = 1`, `mult = 100`.
3. `1 % 2 = 1`. Result = `10 + 1 * 100 = 110`. `n = 0`, `mult = 1000`.
Final result: `110`.

### Step-by-Step Algorithm:
1. Handle `n == 0` as a special case and return `0`.
2. Initialize `binaryResult = 0` and `placeValue = 1`.
3. While `n > 0`:
    - Calculate remainder: `rem = n % 2`.
    - Update number: `n = n / 2`.
    - Update result: `binaryResult = binaryResult + rem * placeValue`.
    - Update place value: `placeValue = placeValue * 10`.
4. Return `binaryResult`.

## Code

```java
public static long solve(int n) {
    if (n == 0) {
        return 0;
    }
    
    long binary = 0;
    long power = 1;
    
    while (n > 0) {
        int rem = n % 2;
        n = n / 2;
        
        binary = binary + rem * power;
        power = power * 10;
    }
    
    return binary;
}
```
