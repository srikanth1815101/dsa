---
title: "Infix Conversions - Solution"
problemUrl: "/problems/infix-conversions/"
---
<!-- All rights reserved to CSRGO DSA -->

## Explanation

To simultaneously convert an infix expression into both postfix and prefix notations, we use three stacks:
1. `operators` stack for operator characters (`+`, `-`, `*`, `/`, `(`).
2. `postfix` stack for partially formed postfix strings.
3. `prefix` stack for partially formed prefix strings.

When scanning the string from left to right:
- If a letter operand is found, push it as a string to both `postfix` and `prefix` stacks.
- If an opening parenthesis `'('` is found, push it to `operators`.
- If a closing parenthesis `')'` is found, process operators until `'('` is popped.
- If an operator `ch` is found, pop and process operators from `operators` while the stack top has greater or equal precedence than `ch`.

To process an operator `op`:
- Pop `v2` and `v1` from `postfix`, then push `v1 + v2 + op` back to `postfix`.
- Pop `v2` and `v1` from `prefix`, then push `op + v1 + v2` back to `prefix`.

### Step-by-Step Algorithm:
1. Initialize `Stack<Character> operators`, `Stack<String> postfix`, and `Stack<String> prefix`.
2. Iterate through each character `ch` of `exp`:
   - If `ch` is whitespace, skip it.
   - If `ch` is a letter or digit, push `String.valueOf(ch)` to both `postfix` and `prefix`.
   - If `ch` is `'('`, push to `operators`.
   - If `ch` is `')'`, while `operators.peek() != '('`, process the top operator. Then pop `'('`.
   - If `ch` is an operator, while `!operators.isEmpty() && precedence(operators.peek()) >= precedence(ch)`, process the top operator. Then push `ch` to `operators`.
3. While `!operators.isEmpty()`, process the remaining operators.
4. Return a `String[]` containing `postfix.peek()` at index 0 and `prefix.peek()` at index 1.

## Code

```java
public static String[] solve(String exp) {
    Stack<Character> operators = new Stack<>();
    Stack<String> postfix = new Stack<>();
    Stack<String> prefix = new Stack<>();
    for (int i = 0; i < exp.length(); i = i + 1) {
        char ch = exp.charAt(i);
        if (ch == ' ') {
            continue;
        }
        if (Character.isLetterOrDigit(ch)) {
            postfix.push(String.valueOf(ch));
            prefix.push(String.valueOf(ch));
        } else if (ch == '(') {
            operators.push(ch);
        } else if (ch == ')') {
            while (!operators.isEmpty() && operators.peek() != '(') {
                process(operators, postfix, prefix);
            }
            if (!operators.isEmpty()) {
                operators.pop();
            }
        } else if (ch == '+' || ch == '-' || ch == '*' || ch == '/') {
            while (!operators.isEmpty() && precedence(operators.peek()) >= precedence(ch)) {
                process(operators, postfix, prefix);
            }
            operators.push(ch);
        }
    }
    while (!operators.isEmpty()) {
        process(operators, postfix, prefix);
    }
    return new String[]{postfix.peek(), prefix.peek()};
}

private static void process(Stack<Character> operators, Stack<String> postfix, Stack<String> prefix) {
    char op = operators.pop();
    String postV2 = postfix.pop();
    String postV1 = postfix.pop();
    postfix.push(postV1 + postV2 + op);

    String preV2 = prefix.pop();
    String preV1 = prefix.pop();
    prefix.push(op + preV1 + preV2);
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
```
