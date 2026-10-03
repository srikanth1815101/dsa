---
date: 2026-10-01T01:09:00+05:30

title: "Pascal's Triangle - Solution"
problemUrl: "/problems/pascals-triangle/"
weight: 9
---
<!-- All rights reserved to CSRGO DSA -->

## Explanation

Pascal's triangle is a triangular array of binomial coefficients:
- The `r`-th row (0-indexed) contains `r + 1` elements.
- The first element (`c = 0`) and the last element (`c = r`) of every row are always `1`.
- Any interior element at row `r` and column `c` is the sum of the elements directly above it from the previous row:
  `triangle[r][c] = triangle[r - 1][c - 1] + triangle[r - 1][c]`

Constructing row by row using the previous row's computed values generates the full triangle in `O(numRows^2)` time and `O(numRows^2)` space.

### Step-by-Step Algorithm:
1. Create a result list `triangle` of type `List<List<Integer>>`.
2. Iterate `r` from `0` to `numRows - 1`:
   - Create a new row list `row`.
   - Add `1` at the beginning of `row`.
   - For `c` from `1` to `r - 1`:
     - Retrieve the previous row `prev = triangle.get(r - 1)`.
     - Calculate the sum: `val = prev.get(c - 1) + prev.get(c)`.
     - Add `val` to `row`.
   - If `r > 0`, add `1` at the end of `row`.
   - Add `row` to `triangle`.
3. Return `triangle`.

## Code

```java
public static List<List<Integer>> solve(int numRows) {
    List<List<Integer>> triangle = new ArrayList<>();

    for (int r = 0; r < numRows; r = r + 1) {
        List<Integer> row = new ArrayList<>();
        row.add(1);

        for (int c = 1; c < r; c = c + 1) {
            List<Integer> prev = triangle.get(r - 1);
            int val = prev.get(c - 1) + prev.get(c);
            row.add(val);
        }

        if (r > 0) {
            row.add(1);
        }

        triangle.add(row);
    }

    return triangle;
}
```
