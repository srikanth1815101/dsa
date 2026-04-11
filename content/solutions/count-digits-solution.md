---
title: "Count Digits - Solution"
problemUrl: "/problems/count-digits/"
---

<!-- All rights reserved to CSRGO DSA -->

## Explanation

The problem asks us to count the total number of digits in a given non-negative integer `n`. The most common way to approach this is by repeatedly stripping the last digit from the number until it becomes zero.

Mathematically, dividing an integer by 10 removes its last digit. For example, `123 / 10` gives `12` in integer division. We can keep a counter and increment it every time we perform this division. 

A special case is when the input is `0`. Since `0` has one digit, we must handle it explicitly or ensure our loop logic accounts for it. One way is to check if `n` is `0` at the start. Another is to increment the counter and then perform the division until the number becomes zero.

### Step-by-Step Algorithm:
1. If the input `n` is `0`, return `1` immediately as zero is a single-digit number.
2. Initialize a variable `count` to `0` to keep track of the number of digits.
3. Start a loop that continues as long as `n` is greater than `0`.
4. Inside the loop, divide `n` by `10` to remove the last digit.
5. Increment the `count` variable by `1` in each iteration.
6. Once the loop terminates (when `n` becomes `0`), return the value of `count`.

## Code

```java
public static int solve(int n) {
    if (n == 0) {
        return 1;
    }
    
    int count = 0;
    while (n > 0) {
        n = n / 10;
        count = count + 1;
    }
    
    return count;
}
```
