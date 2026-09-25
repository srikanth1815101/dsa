---
title: "Any Base Multiplication - Solution"
problemUrl: "/problems/any-base-multiplication/"
---
<!-- All rights reserved to CSRGO DSA -->

## Explanation

To multiply two base-$b$ numbers $n_1$ and $n_2$, we simulate standard manual multiplication by decomposing the problem into:
1. **Single-digit base-$b$ multiplication**: Multiply $n_1$ by each individual digit of $n_2$.
2. **Partial product accumulation**: Shift the single-digit product by powers of 10 and add it to the running sum using base-$b$ addition.

### Step 1: Multiply Number by Single Digit in Base $b$
Iterate through digits $d_1$ of $n_1$:
$$\text{prod} = (d_1 \times d_2) + \text{carry}$$
$$\text{carry} = \lfloor \text{prod} / b \rfloor$$
$$\text{rem} = \text{prod} \pmod{b}$$
Accumulate $\text{rem} \times \text{power}$ and update $\text{power} = \text{power} \times 10$.

### Step 2: Base-$b$ Addition
Add column-by-column with carry:
$$\text{sum} = d_1 + d_2 + \text{carry}$$
$$\text{carry} = \lfloor \text{sum} / b \rfloor, \quad \text{rem} = \text{sum} \pmod{b}$$

### Step 3: Main Multiplication Loop
Extract each digit $d_2$ of $n_2$, compute single-digit product, multiply by positional alignment multiplier, and add to the running total.

### Complexity Analysis
- **Time Complexity**: $O(\log_{10} n_1 \times \log_{10} n_2)$, since each digit of $n_2$ iterates across all digits of $n_1$ and executes addition.
- **Space Complexity**: $O(1)$, using constant auxiliary space.

---

## Code

```java
public static long getProductWithSingleDigit(long n1, long d2, int b) {
    long ans = 0;
    long carry = 0;
    long power = 1;

    while (n1 > 0 || carry > 0) {
        long d1 = n1 % 10;
        n1 = n1 / 10;

        long prod = (d1 * d2) + carry;
        carry = prod / b;
        long rem = prod % b;

        ans = ans + (rem * power);
        power = power * 10;
    }

    return ans;
}

public static long getSum(long n1, long n2, int b) {
    long ans = 0;
    long carry = 0;
    long power = 1;

    while (n1 > 0 || n2 > 0 || carry > 0) {
        long d1 = n1 % 10;
        long d2 = n2 % 10;
        n1 = n1 / 10;
        n2 = n2 / 10;

        long sum = d1 + d2 + carry;
        carry = sum / b;
        long rem = sum % b;

        ans = ans + (rem * power);
        power = power * 10;
    }

    return ans;
}

public static long solve(long n1, long n2, int b) {
    long ans = 0;
    long power = 1;

    while (n2 > 0) {
        long d2 = n2 % 10;
        n2 = n2 / 10;

        long singleProd = getProductWithSingleDigit(n1, d2, b);
        ans = getSum(ans, singleProd * power, b);
        power = power * 10;
    }

    return ans;
}
```
