---
title: "Armstrong Number - Solution"
problemUrl: "/problems/armstrong-number/"
---

<!-- All rights reserved to CSRGO DSA -->

## Explanation

To check if a number `n` is an Armstrong number, we need to know the number of digits `d` it contains. Then we calculate the sum of each digit raised to the power `d`.

Steps:
1. Count the digits by repeatedly dividing by 10.
2. Initialize a variable `sum` to 0.
3. For each digit in the number:
    - Extract the digit using `% 10`.
    - Calculate `digit^d` (digit raised to the power of total digits).
    - Add this to `sum`.
    - Move to the next digit using `/ 10`.
4. If `sum == n`, then the number is an Armstrong number.

Example for `1634` (4 digits):
- $1^4 = 1$
- $6^4 = 1296$
- $3^4 = 81$
- $4^4 = 256$
- Sum: $1 + 1296 + 81 + 256 = 1634$.

### Step-by-Step Algorithm:
1. If `n` is `0`, return `true` (since $0^1 = 0$).
2. Calculate the number of digits `count` in `n`.
3. Initialize `sum = 0` and `temp = n`.
4. While `temp` is greater than `0`:
    - Extract the last digit `rem = temp % 10`.
    - Calculate `rem` raised to the power of `count` using `Math.pow`.
    - Add the result to `sum`.
    - Update `temp = temp / 10`.
5. Compare `sum` with the original `n`. Return `true` if they are equal, otherwise `false`.

## Code

```java
public static boolean solve(int n) {
    if (n == 0) {
        return true;
    }
    
    int temp = n;
    int count = 0;
    while (temp > 0) {
        temp = temp / 10;
        count = count + 1;
    }
    
    temp = n;
    long sum = 0;
    while (temp > 0) {
        int rem = temp % 10;
        sum = sum + (long) Math.pow(rem, count);
        temp = temp / 10;
    }
    
    return sum == n;
}
```
