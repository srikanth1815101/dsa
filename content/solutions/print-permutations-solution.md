---
title: "Print Permutations - Solution"
problemUrl: "/problems/print-permutations/"
---
<!-- All rights reserved to CSRGO DSA -->

## Explanation

Generating all permutations of a string of length $n$ requires placing each unused character at the current position, then recursively permuting the remaining $n - 1$ characters.

### Algorithm Steps
1. Define a helper recursive function `generate(ques, ans, result)`:
   - **Base Case**: If `ques.length() == 0`, add `ans` to `result` and return.
   - For `i = 0` to `ques.length() - 1`:
     - Select `ch = ques.charAt(i)`.
     - Construct remaining string: `rem = ques.substring(0, i) + ques.substring(i + 1)`.
     - Recursively call `generate(rem, ans + ch, result)`.
2. In `solve(str)`:
   - If `str == null`, return empty list.
   - Initialize `result = new ArrayList<>()`.
   - Call `generate(str, "", result)`.
   - Return `result`.

### Complexity Analysis
- **Time Complexity**: $O(n! \times n)$, because there are $n!$ permutations and constructing each string takes $O(n)$ time.
- **Space Complexity**: $O(n)$ call stack depth.

---

## Code

```java
import java.util.ArrayList;
import java.util.List;

public static List<String> solve(String str) {
    List<String> result = new ArrayList<>();
    if (str == null) {
        return result;
    }
    generate(str, "", result);
    return result;
}

private static void generate(String ques, String ans, List<String> result) {
    if (ques.length() == 0) {
        result.add(ans);
        return;
    }

    for (int i = 0; i < ques.length(); i = i + 1) {
        char ch = ques.charAt(i);
        String qlpart = ques.substring(0, i);
        String qrpart = ques.substring(i + 1);
        String rem = qlpart + qrpart;
        generate(rem, ans + ch, result);
    }
}
```
