---
title: "Subsets of Array - Solution"
problemUrl: "/problems/subsets-of-array/"
---
<!-- All rights reserved to CSRGO DSA -->

## Explanation

For an array of length $n$, each element can either be **included** (1) or **excluded** (0), yielding:

$$2^n \text{ subsets}$$

We use **bit manipulation** to generate all subsets in lexicographical binary order:

1. **Iterate Counter**:
   Let `limit = 1 << n` ($2^n$). Iterate $i$ from `0` to `limit - 1`.
2. **Decode Bits from Right to Left**:
   Initialize `temp = i`. For index $j$ running from $n - 1$ down to `0`:
   - Compute bit: `rem = temp % 2`.
   - Update `temp = temp / 2`.
   - If `rem == 0`, element $j$ is absent; record `"-"`.
   - If `rem == 1`, element $j$ is present; record `String.valueOf(arr[j])`.
3. **Format Row**:
   Append each column separated by a tab (`\t`), concluding each subset with a newline (`\n`).

### Complexity Analysis
- **Time Complexity**: $O(n \times 2^n)$, generating $2^n$ subsets with $O(n)$ work per subset.
- **Space Complexity**: $O(n \times 2^n)$ for the accumulated output string.

---

## Code

```java
public static String solve(int[] arr) {
    if (arr == null || arr.length == 0) {
        return "";
    }

    int n = arr.length;
    int limit = 1 << n;
    StringBuilder sb = new StringBuilder();

    for (int i = 0; i < limit; i = i + 1) {
        int temp = i;
        String[] row = new String[n];

        for (int j = n - 1; j >= 0; j = j - 1) {
            int rem = temp % 2;
            temp = temp / 2;

            if (rem == 0) {
                row[j] = "-";
            } else {
                row[j] = String.valueOf(arr[j]);
            }
        }

        for (int j = 0; j < n; j = j + 1) {
            sb.append(row[j]);
            if (j < n - 1) {
                sb.append("\t");
            }
        }
        sb.append("\n");
    }

    return sb.toString();
}
```
