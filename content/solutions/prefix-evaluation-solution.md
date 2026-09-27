---
title: "Prefix Evaluation - Solution"
problemUrl: "/problems/prefix-evaluation/"
---
<!-- All rights reserved to CSRGO DSA -->

## Explanation

In prefix notation (Polish Notation), the operator appears before its operands. To evaluate a prefix expression efficiently in $O(n)$ time, we process the tokens or characters from right to left.

As we traverse from right to left:
1. When an operand is encountered, it is pushed onto an evaluation stack.
2. When an operator (`+`, `-`, `*`, `/`) is encountered, the top two operands are popped:
   - The first popped element `v1` is the left operand.
   - The second popped element `v2` is the right operand.
   - We compute `v1 <op> v2` and push the resulting value back onto the stack.
3. Once the entire expression is processed backwards, the remaining value on the stack is the final result.

### Step-by-Step Algorithm:
1. Initialize an empty integer stack `stack`.
2. Determine if `exp` contains spaces:
   - If spaces are present, split `exp` by whitespace into an array of tokens and traverse backwards from `tokens.length - 1` down to `0`.
   - Otherwise, traverse characters from `exp.length() - 1` down to `0`.
3. For each token:
   - If the token is an operator (`+`, `-`, `*`, `/`):
     - Pop `v1` (left operand) and `v2` (right operand) from `stack`.
     - Compute the result of `v1` and `v2` using the operator.
     - Push the result back onto `stack`.
   - Otherwise, parse the operand as an integer and push onto `stack`.
4. Return `stack.peek()`.

## Code

```java
public static int solve(String exp) {
    Stack<Integer> stack = new Stack<>();
    if (exp.contains(" ")) {
        String[] tokens = exp.trim().split("\\s+");
        for (int i = tokens.length - 1; i >= 0; i = i - 1) {
            String token = tokens[i];
            if (token.equals("+") || token.equals("-") || token.equals("*") || token.equals("/")) {
                int v1 = stack.pop();
                int v2 = stack.pop();
                stack.push(apply(v1, v2, token.charAt(0)));
            } else {
                stack.push(Integer.parseInt(token));
            }
        }
    } else {
        for (int i = exp.length() - 1; i >= 0; i = i - 1) {
            char ch = exp.charAt(i);
            if (ch == '+' || ch == '-' || ch == '*' || ch == '/') {
                int v1 = stack.pop();
                int v2 = stack.pop();
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
