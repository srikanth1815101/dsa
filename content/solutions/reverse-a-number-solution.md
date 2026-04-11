---
title: "Reverse a Number - Solution"
problemUrl: "/problems/reverse-a-number/"
---

<!-- All rights reserved to CSRGO DSA -->

## Explanation

To reverse a number, we process it digit by digit from right to left. We can extract the last digit using the modulo operator (`% 10`) and then remove it using integer division (`/ 10`).

As we extract each digit, we build the reversed number by multiplying our existing reversed result by 10 (to shift digits to the left) and adding the newly extracted digit.

For example, if `n = 123`:
1. Extract `3`: `rev = 0 * 10 + 3 = 3`
2. Extract `2`: `rev = 3 * 10 + 2 = 32`
3. Extract `1`: `rev = 32 * 10 + 1 = 321`

### Step-by-Step Algorithm:
1. Initialize a variable `reversedNum` to `0`.
2. While the input number `n` is greater than `0`:
    - Identify the last digit of `n` using `n % 10`.
    - Update `reversedNum` by calculating `reversedNum * 10 + lastDigit`.
    - Update `n` by dividing it by `10` to strip the last digit.
3. Once the loop finishes, return the `reversedNum`.

## Code

```java
public static int solve(int n) {
    int reversedNum = 0;
    
    while (n > 0) {
        int lastDigit = n % 10;
        reversedNum = (reversedNum * 10) + lastDigit;
        n = n / 10;
    }
    
    return reversedNum;
}
```
