---
title: "Arrange Buildings - Solution"
problemUrl: "/problems/arrange-buildings/"
---
<!-- All rights reserved to CSRGO DSA -->

## Explanation

Because the building placement restrictions on Side A and Side B are completely independent, the problem decouples into two identical subproblems:

1. **Single Side Solution**:
   - For a single side of length `n`, let `buildings` be the valid ways ending with a Building (`B`) and `spaces` be the valid ways ending with a Space (`S`).
   - For `n = 1`: `buildings = 1`, `spaces = 1`.
   - For each subsequent position from `2` to `n`:
     - A building can only be placed after a space: `nextBuildings = spaces`.
     - A space can be placed after either a building or a space: `nextSpaces = buildings + spaces`.
   - Total valid arrangements for one side is `ways = buildings + spaces`.
2. **Combining Both Sides**:
   - Every valid arrangement on Side A can be combined with any valid arrangement on Side B.
   - Therefore, `totalWays = ways * ways`.
3. To prevent integer overflow during multiplication for larger values of `n`, calculations use 64-bit `long` integers.

### Step-by-Step Algorithm:
1. If `n <= 0`, return `0L`.
2. Initialize `long buildings = 1L` and `long spaces = 1L`.
3. Loop `i` from `2` to `n`:
   - Compute `long nextBuildings = spaces`.
   - Compute `long nextSpaces = buildings + spaces`.
   - Update `buildings = nextBuildings`.
   - Update `spaces = nextSpaces`.
4. Let `long singleSide = buildings + spaces`.
5. Return `singleSide * singleSide`.

## Code

```java
public static long solve(int n) {
    if (n <= 0) {
        return 0L;
    }

    long buildings = 1L;
    long spaces = 1L;

    for (int i = 2; i <= n; i = i + 1) {
        long nextBuildings = spaces;
        long nextSpaces = buildings + spaces;
        buildings = nextBuildings;
        spaces = nextSpaces;
    }

    long singleSide = buildings + spaces;
    return singleSide * singleSide;
}
```
