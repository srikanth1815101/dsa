---
title: "Count Binary Strings - Solution"
problemUrl: "/problems/count-binary-strings/"
---
<!-- All rights reserved to CSRGO DSA -->

## Explanation

To count binary strings of length `n` with no consecutive `0`s, we decompose the state based on the ending bit:

1. **State Definition**:
   - `zeros`: number of valid strings of current length ending with `0`.
   - `ones`: number of valid strings of current length ending with `1`.
2. **Base Case**: For length `1`, there is one string ending in `0` (`"0"`) and one string ending in `1` (`"1"`). Thus, `zeros = 1` and `ones = 1`.
3. **Transitions for Length $k + 1$**:
   - We can append a `'0'` only to strings that ended in `'1'` (to avoid `'00'`). Therefore, `newZeros = ones`.
   - We can append a `'1'` to strings ending in either `'0'` or `'1'`. Therefore, `newOnes = zeros + ones`.
4. After extending up to length `n`, the total valid strings is `zeros + ones` in $O(n)$ time and $O(1)$ auxiliary space.

### Step-by-Step Algorithm:
1. If `n <= 0`, return `0`.
2. If `n == 1`, return `2`.
3. Initialize `int zeros = 1` and `int ones = 1`.
4. Loop `i` from `2` to `n`:
   - Compute `int nextZeros = ones`.
   - Compute `int nextOnes = zeros + ones`.
   - Update `zeros = nextZeros`.
   - Update `ones = nextOnes`.
5. Return `zeros + ones`.

## Code

```java
public static int solve(int n) {
    if (n <= 0) {
        return 0;
    }
    if (n == 1) {
        return 2;
    }

    int zeros = 1;
    int ones = 1;

    for (int i = 2; i <= n; i = i + 1) {
        int nextZeros = ones;
        int nextOnes = zeros + ones;
        zeros = nextZeros;
        ones = nextOnes;
    }

    return zeros + ones;
}
```
