---
title: "Solution: Valid Parentheses"
date: 2024-01-03
problemUrl: "/problems/valid-parentheses/"
---

## Approach

Use a **Stack**.
- Iterate through the string.
- If it's an opening bracket `(`, `{`, `[`, push it onto the stack.
- If it's a closing bracket `)`, `}`, `]`:
    - Check if stack is empty (invalid).
    - Pop the top. If it doesn't match the closing bracket type, it's invalid.
- At the end, check if the stack is empty (valid).

### Complexity

- **Time Complexity**: O(n)
- **Space Complexity**: O(n)

## Code

```java
public class Solution {
    public boolean isValid(String s) {
        Stack<Character> stack = new Stack<>();
        
        for (char c : s.toCharArray()) {
            if (c == '(' || c == '{' || c == '[') {
                stack.push(c);
            } else {
                if (stack.isEmpty()) return false;
                char top = stack.pop();
                if (c == ')' && top != '(') return false;
                if (c == '}' && top != '{') return false;
                if (c == ']' && top != '[') return false;
            }
        }
        return stack.isEmpty();
    }
}
```
