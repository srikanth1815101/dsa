---
title: "Keypad Combinations - Solution"
problemUrl: "/problems/keypad-combinations/"
---
<!-- All rights reserved to CSRGO DSA -->

## Explanation

Keypad combination generation can be solved with recursion by breaking down the string digit by digit.

### Algorithm Steps
1. Define lookup table `codes`:
   `{".;", "abc", "def", "ghi", "jkl", "mno", "pqrs", "tu", "vwx", "yz"}`.
2. **Base Case**: If `str.length() == 0`, return a list with a single empty string `[""]`.
3. Extract `ch = str.charAt(0)` and remainder `rem = str.substring(1)`.
4. Recursively obtain combinations for remainder: `rres = solve(rem)`.
5. Obtain the code string for `ch`: `codeForCh = codes[ch - '0']`.
6. For each character `c` in `codeForCh`:
   - For each string `r` in `rres`:
     - Add `c + r` to the result list.
7. Return the result list.

### Complexity Analysis
- **Time Complexity**: $O(4^n \times n)$, where $n$ is length of `str` and digits map to at most 4 characters.
- **Space Complexity**: $O(4^n \times n)$ to hold the generated combinations.

---

## Code

```java
import java.util.ArrayList;
import java.util.List;

public static List<String> solve(String str) {
    String[] codes = {".;", "abc", "def", "ghi", "jkl", "mno", "pqrs", "tu", "vwx", "yz"};

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

    String codeForCh = codes[ch - '0'];
    for (int i = 0; i < codeForCh.length(); i = i + 1) {
        char chCode = codeForCh.charAt(i);
        for (int j = 0; j < rres.size(); j = j + 1) {
            myres.add(chCode + rres.get(j));
        }
    }

    return myres;
}
```
