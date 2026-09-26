---
title: "Toggle Case - Solution"
problemUrl: "/problems/toggle-case/"
---
<!-- All rights reserved to CSRGO DSA -->

## Explanation

In the ASCII table:
- Uppercase letters `'A'` to `'Z'` have ASCII codes $65$ to $90$.
- Lowercase letters `'a'` to `'z'` have ASCII codes $97$ to $122$.
- The difference between corresponding uppercase and lowercase letters is exactly $32$ ($'a' - 'A' = 32$).

### Algorithm Steps
1. Create a `StringBuilder` initialized with the length of string `s`.
2. Iterate through each character `ch` of `s`:
   - If `ch >= 'a' && ch <= 'z'`:
     - Convert to uppercase: `ch = (char)(ch - 'a' + 'A')`.
   - Else if `ch >= 'A' && ch <= 'Z'`:
     - Convert to lowercase: `ch = (char)(ch - 'A' + 'a')`.
   - Append `ch` to the `StringBuilder`.
3. Return `sb.toString()`.

### Complexity Analysis
- **Time Complexity**: $O(n)$, iterating over the $n$ characters of the string once.
- **Space Complexity**: $O(n)$ to construct the new output string.

---

## Code

```java
public static String solve(String s) {
    if (s == null || s.length() == 0) {
        return "";
    }

    StringBuilder sb = new StringBuilder();

    for (int i = 0; i < s.length(); i++) {
        char ch = s.charAt(i);

        if (ch >= 'a' && ch <= 'z') {
            char upper = (char) (ch - 'a' + 'A');
            sb.append(upper);
        } else if (ch >= 'A' && ch <= 'Z') {
            char lower = (char) (ch - 'A' + 'a');
            sb.append(lower);
        } else {
            sb.append(ch);
        }
    }

    return sb.toString();
}
```
