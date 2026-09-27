---
title: "Celebrity Problem - Solution"
problemUrl: "/problems/celebrity-problem/"
---
<!-- All rights reserved to CSRGO DSA -->

## Explanation

The key insight is that querying whether person `A` knows person `B` immediately eliminates one of them:
- If `mat[A][B] == 1`, `A` knows `B`, so `A` cannot be a celebrity.
- If `mat[A][B] == 0`, `A` does not know `B`, so `B` cannot be a celebrity (since a celebrity must be known by everyone).

Using two pointers `i = 0` and `j = n - 1`, we compare person `i` and person `j`:
- If `mat[i][j] == 1`, eliminate `i` by advancing `i = i + 1`.
- Otherwise, eliminate `j` by decrementing `j = j - 1`.

When `i == j`, we have a single potential candidate `candidate = i`. We then verify the candidate in a second pass:
1. `candidate` must know no one (`mat[candidate][k] == 0` for all `k != candidate`).
2. Everyone else must know `candidate` (`mat[k][candidate] == 1` for all `k != candidate`).

If both conditions hold, `candidate` is the celebrity; otherwise, no celebrity exists.

### Step-by-Step Algorithm:
1. Initialize two pointers `i = 0` and `j = mat.length - 1`.
2. While `i < j`:
   - If `mat[i][j] == 1`, set `i = i + 1`.
   - Otherwise, set `j = j - 1`.
3. Let `candidate = i`.
4. Verify `candidate` by looping `k` from `0` to `mat.length - 1`:
   - If `k != candidate`:
     - If `mat[candidate][k] == 1` or `mat[k][candidate] == 0`, return `-1`.
5. Return `candidate`.

## Code

```java
public static int solve(int[][] mat) {
    int n = mat.length;
    int i = 0;
    int j = n - 1;
    while (i < j) {
        if (mat[i][j] == 1) {
            i = i + 1;
        } else {
            j = j - 1;
        }
    }
    int candidate = i;
    for (int k = 0; k < n; k = k + 1) {
        if (k != candidate) {
            if (mat[candidate][k] == 1 || mat[k][candidate] == 0) {
                return -1;
            }
        }
    }
    return candidate;
}
```
