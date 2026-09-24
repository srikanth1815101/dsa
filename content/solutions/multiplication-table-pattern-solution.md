---
title: "Multiplication Table Pattern - Solution"
problemUrl: "/problems/multiplication-table-pattern/"
---
<!-- All rights reserved to CSRGO DSA -->

## Explanation

The Multiplication Table generates the sequential multiples of an integer `n` multiplied by scalars from `1` to `10`.

Each row requires appending the base operand `n`, the literal string `" * "`, the current multiplier `i`, the string `" = "`, the product `n * i`, and a terminating newline `"\n"`.

Because the number of iterations is fixed at 10, the algorithm executes in constant time $O(1)$ and uses constant auxiliary memory $O(1)$ to assemble the output string.

### Step-by-Step Algorithm:
1. Initialize a `StringBuilder` to store the formatted table.
2. Run a loop with index `i` from `1` to `10`.
3. In each iteration, append `n`, `" * "`, `i`, `" = "`, and `n * i`.
4. Append a newline character `"\n"` at the end of each line.
5. Convert the `StringBuilder` to a `String` and return the result.

## Code

```java
public static String solve(int n) {
    StringBuilder sb = new StringBuilder();
    for (int i = 1; i <= 10; i = i + 1) {
        sb.append(n);
        sb.append(" * ");
        sb.append(i);
        sb.append(" = ");
        sb.append(n * i);
        sb.append("\n");
    }
    return sb.toString();
}
```
