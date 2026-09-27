---
title: "Infix Evaluation - Solution"
problemUrl: "/problems/infix-evaluation/"
---
<!-- All rights reserved to CSRGO DSA -->

## Explanation

To evaluate an infix arithmetic expression, we use Dijkstra's two-stack Shunting-Yard variation with an operands stack and an operators stack.

We scan the expression from left to right:
1. Digits are parsed into multi-digit integer operands and pushed onto the operands stack.
2. Opening parentheses `'('` are pushed onto the operators stack.
3. Closing parentheses `')'` trigger evaluations of all operators in the operators stack until the matching `'('` is encountered and popped.
4. When an operator is encountered, we pop and evaluate operators of higher or equal precedence from the operators stack before pushing the current operator.
5. After scanning the expression, any remaining operators in the operators stack are evaluated.

### Step-by-Step Algorithm:
1. Initialize an integer stack `operands` and a character stack `operators`.
2. Define a precedence helper function returning 2 for `*` and `/`, 1 for `+` and `-`, and 0 otherwise.
3. Iterate index `i` through the string `exp`:
   - If character is a digit, extract the full integer and push to `operands`.
   - If character is `'('`, push to `operators`.
   - If character is `')'`, while `operators.peek() != '('`, evaluate the top operator with two popped operands. Then pop `'('`.
   - If character is an operator (`+`, `-`, `*`, `/`), while `!operators.isEmpty() && precedence(operators.peek()) >= precedence(ch)`, evaluate. Then push `ch` to `operators`.
4. While `!operators.isEmpty()`, evaluate remaining operations.
5. Return `operands.peek()`.

## Code

```java
public static int solve(String exp) {
    Stack<Integer> operands = new Stack<>();
    Stack<Character> operators = new Stack<>();
    int i = 0;
    while (i < exp.length()) {
        char ch = exp.charAt(i);
        if (ch == ' ') {
            i = i + 1;
            continue;
        }
        if (Character.isDigit(ch)) {
            int val = 0;
            while (i < exp.length() && Character.isDigit(exp.charAt(i))) {
                val = val * 10 + (exp.charAt(i) - '0');
                i = i + 1;
            }
            operands.push(val);
        } else if (ch == '(') {
            operators.push(ch);
            i = i + 1;
        } else if (ch == ')') {
            while (!operators.isEmpty() && operators.peek() != '(') {
                char op = operators.pop();
                int v2 = operands.pop();
                int v1 = operands.pop();
                operands.push(applyOp(v1, v2, op));
            }
            if (!operators.isEmpty()) {
                operators.pop();
            }
            i = i + 1;
        } else if (ch == '+' || ch == '-' || ch == '*' || ch == '/') {
            while (!operators.isEmpty() && precedence(operators.peek()) >= precedence(ch)) {
                char op = operators.pop();
                int v2 = operands.pop();
                int v1 = operands.pop();
                operands.push(applyOp(v1, v2, op));
            }
            operators.push(ch);
            i = i + 1;
        } else {
            i = i + 1;
        }
    }
    while (!operators.isEmpty()) {
        char op = operators.pop();
        int v2 = operands.pop();
        int v1 = operands.pop();
        operands.push(applyOp(v1, v2, op));
    }
    return operands.peek();
}

private static int precedence(char op) {
    if (op == '+' || op == '-') {
        return 1;
    }
    if (op == '*' || op == '/') {
        return 2;
    }
    return 0;
}

private static int applyOp(int a, int b, char op) {
    if (op == '+') {
        return a + b;
    }
    if (op == '-') {
        return a - b;
    }
    if (op == '*') {
        return a * b;
    }
    if (op == '/') {
        return a / b;
    }
    return 0;
}
```
