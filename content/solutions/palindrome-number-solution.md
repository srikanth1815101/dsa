---
title: "Palindrome Number - Solution"
problemUrl: "/problems/palindrome-number/"
---

<!-- All rights reserved to CSRGO DSA -->

## Explanation

To determine if a number is a palindrome without converting it to a string, we can reverse the integer mathematically and check if the result equals the original number.

Important Considerations:
1. **Negative Numbers**: Any negative number is not a palindrome (e.g., `-121` reversed is `121-`).
2. **Trailing Zeros**: Numbers ending in zero (like `10`, `100`) are not palindromes unless the number itself is `0`.

Mathematical Approach:
- Initialize `reversed = 0`.
- Store the original number `n` in `temp`.
- While `temp > 0`:
    - Extract the last digit: `rem = temp % 10`.
    - Update `reversed`: `reversed = reversed * 10 + rem`.
    - Update `temp`: `temp = temp / 10`.
- Finally, check if `reversed == n`.

### Step-by-Step Algorithm:
1. If `n < 0`, return `false`.
2. If `n != 0` and `n % 10 == 0`, return `false`.
3. Initialize `originalNum = n` and `reversedNum = 0`.
4. While `n > 0`:
    - Get the last digit: `digit = n % 10`.
    - Add to reversed: `reversedNum = reversedNum * 10 + digit`.
    - Remove last digit from `n`: `n = n / 10`.
5. Compare `reversedNum` with `originalNum`.
6. Return `true` if they are equal, else `false`.

## Code

```java
public static boolean solve(int n) {
    if (n < 0) {
        return false;
    }
    
    if (n != 0 && n % 10 == 0) {
        return false;
    }
    
    int original = n;
    int reversed = 0;
    
    while (n > 0) {
        int lastDigit = n % 10;
        reversed = reversed * 10 + lastDigit;
        n = n / 10;
    }
    
    return reversed == original;
}
```
