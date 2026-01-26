---
title: "Valid Parentheses - Solution"
problemUrl: "/problems/valid-parentheses/"
---

## Explanation

The intuition is to use a **stack** data structure. When we see an opening bracket, we push its expected closing bracket onto the stack. When we see a closing bracket, we check if it matches the top of the stack.

**Algorithm:**
1. Iterate through each character in the string
2. If it's an opening bracket, push the corresponding closing bracket onto the stack
3. If it's a closing bracket, check if the stack is empty or the top doesn't match - if so, return false
4. After processing all characters, the stack should be empty for a valid string

## Code

```java
class Solution {
    public boolean isValid(String s) {
        Stack<Character> stack = new Stack<>();
        for (char c : s.toCharArray()) {
            if (c == '(') stack.push(')');
            else if (c == '{') stack.push('}');
            else if (c == '[') stack.push(']');
            else if (stack.isEmpty() || stack.pop() != c) return false;
        }
        return stack.isEmpty();
    }
}
```
