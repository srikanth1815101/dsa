---
title: "Digits of a Number - Solution"
problemUrl: "/problems/digits-of-a-number/"
---

<!-- All rights reserved to CSRGO DSA -->

## Explanation

To extract the digits of a number from left to right, we can follow a few approaches. The most straightforward mathematical way is to find the total number of digits first, then use power-of-10 divisions to peel them off from the left.

Alternatively, we can use a list to store digits extracted from the right (using `% 10` and `/ 10`) and then reverse the list. This avoids calculating powers and is generally cleaner. 

For an input like `123`, we first get `3`, then `2`, then `1`. After reversing, we get `[1, 2, 3]`. If the number is `0`, we should return a list containing just `[0]`.

### Step-by-Step Algorithm:
1. Initialize an empty list named `digits` to store the individual numbers.
2. If the input `n` is `0`, add `0` to the list and return it.
3. While `n` is greater than `0`:
    - Find the last digit using `n % 10`.
    - Add this digit to the `digits` list.
    - Remove the last digit from `n` by performing `n = n / 10`.
4. Since we extracted digits from right to left, reverse the `digits` list to get the correct order.
5. Return the list.

## Code

```java
public static List<Integer> solve(int n) {
    List<Integer> digits = new ArrayList<>();
    if (n == 0) {
        digits.add(0);
        return digits;
    }
    
    while (n > 0) {
        int lastDigit = n % 10;
        digits.add(lastDigit);
        n = n / 10;
    }
    
    Collections.reverse(digits);
    return digits;
}
```
