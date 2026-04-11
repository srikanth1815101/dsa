---
title: "Benjamin Bulbs - Solution"
problemUrl: "/problems/benjamin-bulbs/"
---

<!-- All rights reserved to CSRGO DSA -->

## Explanation

The Benjamin Bulbs problem is a classic mathematical puzzle. To determine the final state of a bulb at position `i`, we need to know how many times it was toggled.
- A bulb `i` is toggled by person `p` if and only if `p` is a divisor of `i`.
- If bulb `i` has an **even** number of divisors, it will be toggled an even number of times (OFF -> ON -> OFF), ending up **OFF**.
- If bulb `i` has an **odd** number of divisors, it ends up **ON**.

In number theory, only **perfect squares** have an odd number of divisors. This is because divisors usually come in pairs (e.g., for 12: (1,12), (2,6), (3,4)). For a perfect square like 16, one pair is (4,4), which only counts as one distinct divisor (`4`), resulting in an odd total.

Therefore, the bulbs that stay ON are those whose indices are perfect squares: 1, 4, 9, 16, 25, ... up to `n`.

### Step-by-Step Algorithm:
1. Initialize an empty list called `onBulbs`.
2. Start an iteration with `i = 1`.
3. While `i * i <= n`:
    - Calculate the square `s = i * i`.
    - Add `s` to the `onBulbs` list.
    - Increment `i`.
4. Return the `onBulbs` list.

## Code

```java
public static List<Integer> solve(int n) {
    List<Integer> onBulbs = new ArrayList<>();
    
    for (int i = 1; i * i <= n; i = i + 1) {
        onBulbs.add(i * i);
    }
    
    return onBulbs;
}
```
