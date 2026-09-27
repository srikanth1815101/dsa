---
title: "Postfix Evaluation - Solution"
problemUrl: "/problems/postfix-evaluation/"
---
<!-- All rights reserved to CSRGO DSA -->

## Explanation

Postfix expressions (Reverse Polish Notation) eliminate the need for parentheses and operator precedence rules because operators immediately follow their respective operands.

To evaluate a postfix expression in $O(n)$ time:
1. We iterate from left to right through the tokens or characters of the expression.
2. When an operand is encountered, it is pushed onto an evaluation stack.
3. When an operator (`+`, `-`, `*`, `/`) is encountered, the top two operands are popped from the stack:
   - The first popped value `v2` is the right operand.
   - The second popped value `v1` is the left operand.
   - The operation `v1 <op> v2` is computed and the resulting value is pushed back onto the stack.
4. When the entire expression has been scanned, the single value remaining on the stack is the final result.

### Step-by-Step Algorithm:
1. Initialize an empty integer stack `stack`.
2. Determine if the expression contains spaces:
   - If spaces are present, split `exp` by whitespace into tokens.
   - Otherwise, treat each digit as an individual token and each operator as a token.
3. For each token:
   - If the token represents an operator (`+`, `-`, `*`, `/`):
     - Pop `v2` and `v1` from `stack`.
     - Compute the result of `v1` with `v2` using the operator.
     - Push the result onto `stack`.
   - Otherwise, parse the token as an integer and push onto `stack`.
4. Return `stack.peek()`.

## Code

```java
public static int solve(String exp) {
    Stack<Integer> stack = new Stack<>();
    if (exp.contains(" ")) {
        String[] tokens = exp.trim().split("\\s+");
        for (int i = 0; i < tokens.length; i = i + 1) {
            String token = tokens[i];
            if (token.equals("+") || token.equals("-") || token.equals("*") || token.equals("/")) {
                int v2 = stack.pop();
                int v1 = stack.pop();
                stack.push(apply(v1, v2, token.charAt(0)));
            } else {
                stack.push(Integer.parseInt(token));
            }
        }
    } else {
        for (int i = 0; i < exp.length(); i = i + 1) {
            char ch = exp.charAt(i);
            if (ch == '+' || ch == '-' || ch == '*' || ch == '/') {
                int v2 = stack.pop();
                int v1 = stack.pop();
                stack.push(apply(v1, v2, ch));
            } else {
                stack.push(ch - '0');
            }
        }
    }
    return stack.peek();
}

private static int apply(int v1, int v2, char op) {
    if (op == '+') {
        return v1 + v2;
    }
    if (op == '-') {
        return v1 - v2;
    }
    if (op == '*') {
        return v1 * v2;
    }
    if (op == '/') {
        return v1 / v2;
    }
    return 0;
}
```
