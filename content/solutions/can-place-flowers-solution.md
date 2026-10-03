---
title: "Can Place Flowers - Solution"
problemUrl: "/problems/can-place-flowers/"
---
<!-- All rights reserved to CSRGO DSA -->

## Explanation

We greedily scan the flowerbed from left to right.

For each index `i`:
- Check if plot `i` is empty (`flowerbed[i] == 0`).
- Check if the left neighbor is empty or boundary (`i == 0 || flowerbed[i - 1] == 0`).
- Check if the right neighbor is empty or boundary (`i == flowerbed.length - 1 || flowerbed[i + 1] == 0`).

If all three conditions hold, we plant a flower by setting `flowerbed[i] = 1` and decrementing `n = n - 1`. If `n <= 0` at any point, we can return `true` immediately. If we exhaust the array with `n > 0`, return `false`.

### Step-by-Step Algorithm:
1. If `n <= 0`, return `true` immediately.
2. Iterate through index `i` from `0` to `flowerbed.length - 1`.
3. If `flowerbed[i] == 0`, verify `(i == 0 || flowerbed[i - 1] == 0)` and `(i == len - 1 || flowerbed[i + 1] == 0)`.
4. If both neighbors are valid, set `flowerbed[i] = 1` and decrement `n = n - 1`.
5. If `n <= 0`, return `true`.
6. Return `n <= 0`.

## Code

```java
public static boolean solve(int[] flowerbed, int n) {
    if (n <= 0) {
        return true;
    }

    int len = flowerbed.length;
    for (int i = 0; i < len; i = i + 1) {
        if (flowerbed[i] == 0) {
            boolean leftEmpty = (i == 0 || flowerbed[i - 1] == 0);
            boolean rightEmpty = (i == len - 1 || flowerbed[i + 1] == 0);

            if (leftEmpty && rightEmpty) {
                flowerbed[i] = 1;
                n = n - 1;
                if (n <= 0) {
                    return true;
                }
            }
        }
    }

    return n <= 0;
}
```
