---
title: "Design Parking System - Solution"
problemUrl: "/problems/design-parking-system/"
---
<!-- All rights reserved to CSRGO DSA -->

## Explanation

We store the available parking counts in an array `slots` of size 3:
- `slots[0]` for big cars (`carType == 1`)
- `slots[1]` for medium cars (`carType == 2`)
- `slots[2]` for small cars (`carType == 3`)

For each car request `carType[i]`:
- Identify the slot index `idx = carType[i] - 1`.
- If `slots[idx] > 0`:
  - Decrement `slots[idx] = slots[idx] - 1`.
  - Record `result[i] = true`.
- Otherwise:
  - Record `result[i] = false`.

Each car arrival takes `O(1)` time and the auxiliary space is `O(1)`.

### Step-by-Step Algorithm:
1. Initialize an array `slots = new int[]{big, medium, small}`.
2. Initialize result boolean array `result = new boolean[carType.length]`.
3. For each car index `i` from `0` to `carType.length - 1`:
4. Let `idx = carType[i] - 1`.
5. If `slots[idx] > 0`, decrement `slots[idx] = slots[idx] - 1` and set `result[i] = true`.
6. Else set `result[i] = false`.
7. Return `result`.

## Code

```java
public static boolean[] solve(int big, int medium, int small, int[] carType) {
    int[] slots = new int[]{big, medium, small};
    int n = carType.length;
    boolean[] result = new boolean[n];

    for (int i = 0; i < n; i = i + 1) {
        int idx = carType[i] - 1;
        if (slots[idx] > 0) {
            slots[idx] = slots[idx] - 1;
            result[i] = true;
        } else {
            result[i] = false;
        }
    }

    return result;
}
```
