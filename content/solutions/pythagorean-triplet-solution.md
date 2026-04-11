---
title: "Pythagorean Triplet - Solution"
problemUrl: "/problems/pythagorean-triplet/"
---

<!-- All rights reserved to CSRGO DSA -->

## Explanation

To determine if three numbers `a`, `b`, and `c` form a Pythagorean Triplet, we first need to identify which of the three is the largest. In a right-angled triangle, this largest side is the hypotenuse.

According to the Pythagorean theorem: `a² + b² = c²`, where `c` is the hypotenuse.

Since the input numbers can be in any order, we must:
1. Find the maximum of the three numbers.
2. Check if the square of the maximum equals the sum of the squares of the other two.

For example, with `3, 5, 4`:
- Max is `5`.
- `3² + 4² = 9 + 16 = 25`.
- `5² = 25`.
- Result is `true`.

Note: Use `long` for calculating squares if the inputs are large to avoid integer overflow.

### Step-by-Step Algorithm:
1. Find the maximum of `a`, `b`, and `c`.
2. Case 1: If `a` is the maximum, check if `b*b + c*c == a*a`.
3. Case 2: If `b` is the maximum, check if `a*a + c*c == b*b`.
4. Case 3: If `c` is the maximum, check if `a*a + b*b == c*c`.
5. Return `true` if any of these conditions are met, otherwise return `false`.

## Code

```java
public static boolean solve(int a, int b, int c) {
    long la = a;
    long lb = b;
    long lc = c;
    
    long max = la;
    if (lb > max) {
        max = lb;
    }
    if (lc > max) {
        max = lc;
    }
    
    if (max == la) {
        return (lb * lb + lc * lc) == (la * la);
    } else if (max == lb) {
        return (la * la + lc * lc) == (lb * lb);
    } else {
        return (la * la + lb * lb) == (lc * lc);
    }
}
```
