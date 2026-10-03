---
title: "Remove Adjacent Duplicates in String - Solution"
date: 2026-10-03T11:20:00+05:30
problemUrl: "/problems/remove-adjacent-duplicates-in-string/"
weight: 25
---
<!-- All rights reserved to CSRGO DSA -->

## Explanation

We want to repeatedly remove adjacent identical characters from a string until no adjacent identical characters remain.



A stack is ideal for this problem:
1. As we iterate through each character in the string, we compare it with the top of our stack.
2. If the current character matches the character at the top of the stack, a duplicate pair is formed. We pop the top character from the stack and discard the current character.
3. If they do not match or the stack is empty, we push the current character onto the stack.
4. Using a `StringBuilder` directly as a stack avoids the overhead of boxing and reversing, allowing $O(1)$ amortized push and pop operations.

### Step-by-Step Algorithm:
1. Check if the string `s` is null or empty. If so, return an empty string `""`.
2. Initialize a `StringBuilder` named `sb`.
3. Iterate through each character `c` in string `s` using index `i` from `0` to `s.length() - 1`:
   - Let `len = sb.length()`.
   - If `len > 0` and `sb.charAt(len - 1) == c`:
     - Delete the last character: `sb.deleteCharAt(len - 1)`.
   - Otherwise:
     - Append the character: `sb.append(c)`.
4. Return `sb.toString()`.

## Code

```java
public static String solve(String s) {
    if (s == null || s.length() == 0) {
        return "";
    }

    StringBuilder sb = new StringBuilder();
    for (int i = 0; i < s.length(); i = i + 1) {
        char c = s.charAt(i);
        int len = sb.length();
        if (len > 0 && sb.charAt(len - 1) == c) {
            sb.deleteCharAt(len - 1);
        } else {
            sb.append(c);
        }
    }

    return sb.toString();
}
```
