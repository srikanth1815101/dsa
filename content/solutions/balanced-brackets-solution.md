---
title: "Balanced Brackets - Solution"
problemUrl: "/problems/balanced-brackets/"
---
<!-- All rights reserved to CSRGO DSA -->

## Explanation

To verify whether brackets in an expression are properly nested and matched, a stack provides the ideal Last-In-First-Out mechanism.

As we traverse through the string, whenever an opening bracket (`'('`, `'{'`, or `'['`) appears, we push it onto the stack. When a closing bracket (`')'`, `'}'`, or `']'`) appears, we verify that the stack is non-empty and that the bracket on top matches the current closing bracket. If it does not match or if the stack is already empty, the expression is unbalanced. Any other characters (operands, operators, spaces) are ignored.

At the conclusion of the string traversal, if the stack is completely empty, every opening bracket was matched properly.

### Step-by-Step Algorithm:
1. Initialize an empty stack of characters.
2. Iterate through each character `ch` in the string `s`.
3. If `ch` is `'('`, `'{'`, or `'['`, push it onto the stack.
4. If `ch` is `')'`, `'}'`, or `']'`:
   - If the stack is empty, return `false`.
   - Pop the top character `top`.
   - Check if `top` matches `ch` (i.e. `'('` with `')'`, `'{'` with `'}'`, `'['` with `']'`). If not, return `false`.
5. After processing all characters, return `true` if the stack is empty, otherwise return `false`.

## Code

```java
public static boolean solve(String s) {
    Stack<Character> stack = new Stack<>();
    for (int i = 0; i < s.length(); i = i + 1) {
        char ch = s.charAt(i);
        if (ch == '(' || ch == '{' || ch == '[') {
            stack.push(ch);
        } else if (ch == ')') {
            if (stack.isEmpty() || stack.pop() != '(') {
                return false;
            }
        } else if (ch == '}') {
            if (stack.isEmpty() || stack.pop() != '{') {
                return false;
            }
        } else if (ch == ']') {
            if (stack.isEmpty() || stack.pop() != '[') {
                return false;
            }
        }
    }
    return stack.isEmpty();
}
```
