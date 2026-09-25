---
title: "Bar Chart - Solution"
problemUrl: "/problems/bar-chart/"
---
<!-- All rights reserved to CSRGO DSA -->

## Explanation

To render a vertical bar chart from top to bottom:

1. **Find Maximum Height**:
   Determine the maximum element in `arr`:
   $$\text{max} = \max(\text{arr})$$
   The chart will have `max` floors (rows), indexed from `floor = max` down to `floor = 1`.

2. **Render Floors Top-to-Bottom**:
   For each `floor` from `max` down to `1`:
   - Traverse each column $i$ from `0` to `arr.length - 1`:
     - If $\text{arr}[i] \ge \text{floor}$, append `*\t`.
     - Otherwise, append `\t`.
   - Append `\n` at the end of each floor row.

3. **Edge Cases**:
   - If the array is empty or $\text{max} \le 0$, return an empty string `""`.

### Complexity Analysis
- **Time Complexity**: $O(n \times \text{max})$, where $n$ is the length of `arr` and $\text{max}$ is the maximum value in `arr`.
- **Space Complexity**: $O(n \times \text{max})$ for constructing the string output.

---

## Code

```java
public static String solve(int[] arr) {
    if (arr == null || arr.length == 0) {
        return "";
    }

    int max = arr[0];
    for (int i = 1; i < arr.length; i = i + 1) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }

    if (max <= 0) {
        return "";
    }

    StringBuilder sb = new StringBuilder();
    for (int floor = max; floor >= 1; floor = floor - 1) {
        for (int i = 0; i < arr.length; i = i + 1) {
            if (arr[i] >= floor) {
                sb.append("*\t");
            } else {
                sb.append("\t");
            }
        }
        sb.append("\n");
    }

    return sb.toString();
}
```
