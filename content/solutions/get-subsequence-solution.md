---
title: "Get Subsequence - Solution"
problemUrl: "/problems/get-subsequence/"
---
<!-- All rights reserved to CSRGO DSA -->

## Explanation

Every character in string `str` has two choices:
1. It is **excluded** from the subsequence.
2. It is **included** in the subsequence.

For a string of length $n$, there are $2^n$ subsequences.

### Algorithm Steps
1. **Base Case**: If `str.length() == 0`, return a list containing a single empty string `[""]`.
2. Extract the first character `ch = str.charAt(0)`.
3. Extract the remaining string `rem = str.substring(1)`.
4. Recursively get all subsequences of `rem`: `rres = solve(rem)`.
5. Create a new result list `myres`.
6. For every string `s` in `rres`, add `"" + s` (excluding `ch`).
7. For every string `s` in `rres`, add `ch + s` (including `ch`).
8. Return `myres`.

### Complexity Analysis
- **Time Complexity**: $O(2^n \times n)$, because there are $2^n$ subsequences each taking $O(n)$ time to copy.
- **Space Complexity**: $O(2^n \times n)$ to store all generated subsequences.

---

## Code

```java
import java.util.ArrayList;
import java.util.List;

public static List<String> solve(String str) {
    if (str == null) {
        return new ArrayList<>();
    }
    if (str.length() == 0) {
        List<String> baseResult = new ArrayList<>();
        baseResult.add("");
        return baseResult;
    }

    char ch = str.charAt(0);
    String rem = str.substring(1);
    List<String> rres = solve(rem);

    List<String> myres = new ArrayList<>();
    for (int i = 0; i < rres.size(); i = i + 1) {
        myres.add("" + rres.get(i));
    }
    for (int i = 0; i < rres.size(); i = i + 1) {
        myres.add(ch + rres.get(i));
    }

    return myres;
}
```
