---
title: "Valid Parentheses - Solution"
problemUrl: "/problems/valid-parentheses/"
---
<!-- All rights reserved to CSRGO DSA -->

## Explanation

The problem exhibits **Last-In, First-Out (LIFO)** behavior: the most recently opened bracket must be the first one to be closed. A stack is the natural data structure.

### Algorithm Steps
1. Initialize a character stack `stack`.
2. Iterate through each character `c` of string `s`:
   - If `c` is an opening bracket (`'('`, `'{'`, or `'['`):
     - Push the corresponding expected closing bracket onto the stack:
       - For `'('`, push `')'`
       - For `'{'`, push `'}'`
       - For `'['`, push `']'`
   - Else (`c` is a closing bracket):
     - If the stack is empty (no open bracket available) or the top element does not match `c`, return `false`.
     - Otherwise, pop the matching bracket from the stack.
3. At the end of the string, return `stack.isEmpty()` to ensure no unclosed opening brackets remain.

### Complexity Analysis
- **Time Complexity**: $O(n)$, examining each character in string `s` exactly once with $O(1)$ stack operations.
- **Space Complexity**: $O(n)$, since in the worst case (e.g. `"((((("`) all characters are pushed to the stack.

---

## Code

```java
import java.util.ArrayDeque;
import java.util.Deque;

public static boolean solve(String s) {
    if (s == null || s.length() == 0) {
        return true;
    }

    Deque<Character> stack = new ArrayDeque<>();

    for (int i = 0; i < s.length(); i++) {
        char c = s.charAt(i);

        if (c == '(') {
            stack.push(')');
        } else if (c == '{') {
            stack.push('}');
        } else if (c == '[') {
            stack.push(']');
        } else {
            if (stack.isEmpty() || stack.pop() != c) {
                return false;
            }
        }
    }

    return stack.isEmpty();
}
```
