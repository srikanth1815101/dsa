---
title: "Any Base to Any Base - Solution"
problemUrl: "/problems/any-base-to-any-base/"
---
<!-- All rights reserved to CSRGO DSA -->

## Explanation

Converting directly between two arbitrary bases $b_1$ and $b_2$ can be simplified by using **decimal (base 10)** as a bridge:

$$\text{Base } b_1 \xrightarrow{\text{Step 1}} \text{Base 10 (Decimal)} \xrightarrow{\text{Step 2}} \text{Base } b_2$$

### Step 1: Base $b_1$ to Decimal
1. Extract each digit from the right using modulo 10: $\text{rem} = n \pmod{10}$.
2. Multiply by positional weight $b_1^k$ and accumulate: $\text{dec} = \text{dec} + (\text{rem} \times \text{power})$.
3. Update $\text{power} = \text{power} \times b_1$ and $n = \lfloor n / 10 \rfloor$.

### Step 2: Decimal to Base $b_2$
1. Extract remainder using modulo $b_2$: $\text{rem} = \text{dec} \pmod{b_2}$.
2. Accumulate into base-$b_2$ positional form: $\text{ans} = \text{ans} + (\text{rem} \times \text{power})$.
3. Update $\text{power} = \text{power} \times 10$ and $\text{dec} = \lfloor \text{dec} / b_2 \rfloor$.

### Complexity Analysis
- **Time Complexity**: $O(\log_{10} n + \log_{b_2} \text{dec})$, proportional to the number of digits in the source and target bases.
- **Space Complexity**: $O(1)$, using only scalar variables.

---

## Code

```java
public static int toDecimal(long n, int b) {
    long ans = 0;
    long power = 1;

    while (n > 0) {
        long rem = n % 10;
        n = n / 10;
        ans = ans + (rem * power);
        power = power * b;
    }

    return (int) ans;
}

public static long toAnyBase(int n, int b) {
    long ans = 0;
    long power = 1;

    while (n > 0) {
        int rem = n % b;
        n = n / b;
        ans = ans + (rem * power);
        power = power * 10;
    }

    return ans;
}

public static long solve(long n, int b1, int b2) {
    if (b1 == b2) {
        return n;
    }
    int decimalValue = toDecimal(n, b1);
    return toAnyBase(decimalValue, b2);
}
```
