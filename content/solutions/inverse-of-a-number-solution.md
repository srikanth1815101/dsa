---
title: "Inverse of a Number - Solution"
problemUrl: "/problems/inverse-of-a-number/"
---

<!-- All rights reserved to CSRGO DSA -->

## Explanation

The inversion process treats digits and positions as interchangeable coordinates. 

To solve this, we iterate through the digits of the original number from right to left. For each digit, we note its value and its current position. 
- Let current position be `p` (starting from 1).
- Let current digit be `d`.
- In the inverse number, the digit `p` must be placed at position `d`.

To place digit `p` at position `d` mathematically, we add `p * 10^(d-1)` to our result.

For example, `n = 426135`:
1. Digit `5` at Pos `1`: Add `1 * 10^(5-1) = 10000` to result.
2. Digit `3` at Pos `2`: Add `2 * 10^(3-1) = 200` to result.
...and so on.

### Step-by-Step Algorithm:
1. Initialize `invertedResult` to `0` and `originalPos` to `1`.
2. While `n` is greater than `0`:
    - Extract the last digit `d` using `n % 10`.
    - Calculate the contribution to the inverse: `originalPos * Math.pow(10, d - 1)`.
    - Add this to `invertedResult`.
    - Update `n` by `n / 10` and increment `originalPos`.
3. Cast the result to `int` and return it.

## Code

```java
public static int solve(int n) {
    int invertedResult = 0;
    int originalPos = 1;
    
    while (n > 0) {
        int originalDigit = n % 10;
        int invertedPos = originalDigit;
        int invertedDigit = originalPos;
        
        // Place invertedDigit at invertedPos
        invertedResult = invertedResult + invertedDigit * (int) Math.pow(10, invertedPos - 1);
        
        n = n / 10;
        originalPos = originalPos + 1;
    }
    
    return invertedResult;
}
```
