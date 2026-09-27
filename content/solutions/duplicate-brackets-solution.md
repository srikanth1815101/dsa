---
title: "Duplicate Brackets - Solution"
problemUrl: "/problems/duplicate-brackets/"
---
<!-- All rights reserved to CSRGO DSA -->

## Explanation

To determine if an expression has redundant brackets, we can iterate through the characters of the string using a stack. 

Whenever we encounter any character that is not a closing parenthesis `')'`, we push it onto the stack. When we encounter a closing parenthesis `')'`, we inspect the top element of the stack. If the top element is already an opening parenthesis `'('`, it means no characters or operators were placed inside this bracket pair, indicating redundant parentheses. Otherwise, we pop all elements until the matching `'('` is popped.

If the iteration completes across all characters without finding duplicate brackets, we return false.

### Step-by-Step Algorithm:
1. Initialize an empty character stack.
2. Iterate through each character `ch` in the string `s`.
3. If `ch` is `')'`, check the top of the stack:
   - If the top element is `'('`, duplicate brackets exist, so return `true`.
   - Otherwise, pop elements from the stack until `'('` is popped.
4. If `ch` is not `')'`, push `ch` onto the stack.
5. If the loop finishes without detecting duplicates, return `false`.

## Code

```java
public static boolean solve(String s) {
    Stack<Character> stack = new Stack<>();
    for (int i = 0; i < s.length(); i = i + 1) {
        char ch = s.charAt(i);
        if (ch == ' ') {
            continue;
        }
        if (ch == ')') {
            if (stack.isEmpty() || stack.peek() == '(') {
                return true;
            }
            while (!stack.isEmpty() && stack.peek() != '(') {
                stack.pop();
            }
            if (!stack.isEmpty()) {
                stack.pop();
            }
        } else {
            stack.push(ch);
        }
    }
    return false;
}
```
