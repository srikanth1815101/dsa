---
title: "Remove Primes from ArrayList - Solution"
problemUrl: "/problems/remove-primes-from-arraylist/"
---
<!-- All rights reserved to CSRGO DSA -->

## Explanation

Removing elements from a dynamic array list while iterating forwards causes indices to shift left, skipping the adjacent element.

### Reverse Iteration
By iterating backwards from `list.size() - 1` down to `0`:
1. Elements that are shifted left by `remove(i)` are at indices $> i$, which have already been evaluated.
2. The index $i - 1$ to be evaluated in the next iteration remains unaffected by the deletion.

### Primality Testing ($O(\sqrt{V})$)
A number $v$ is prime if $v > 1$ and has no divisors between $2$ and $\lfloor\sqrt{v}\rfloor$:
- If $v \le 1$, return `false`.
- For $d = 2, 3, \dots$ while $d \times d \le v$:
  - If $v \% d == 0$, return `false`.
- If no divisor is found, return `true`.

### Complexity Analysis
- **Time Complexity**: $O(n \times \sqrt{M} + n^2)$, where $n$ is the list size and $M$ is the maximum integer value. The $n^2$ factor accounts for worst-case array list element shifting on removal.
- **Space Complexity**: $O(1)$ auxiliary memory since mutations are performed directly in-place.

---

## Code

```java
import java.util.ArrayList;

public static ArrayList<Integer> solve(ArrayList<Integer> list) {
    if (list == null || list.size() == 0) {
        return list;
    }

    for (int i = list.size() - 1; i >= 0; i--) {
        int val = list.get(i);
        if (isPrime(val)) {
            list.remove(i);
        }
    }

    return list;
}

private static boolean isPrime(int val) {
    if (val <= 1) {
        return false;
    }

    for (int d = 2; (long) d * d <= val; d++) {
        if (val % d == 0) {
            return false;
        }
    }

    return true;
}
```
