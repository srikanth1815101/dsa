---
title: "Postfix Evaluation"
date: 2026-09-27T10:09:00+05:30
difficulty: "Medium"
topics: ["Strings", "Stack", "Mathematics"]
companies: ["Amazon", "Microsoft", "Adobe"]
learningPath: "Advanced"

starterCode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/advanced/PostfixEvaluation/dsa"
engineeringMode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/advanced/PostfixEvaluation/engineering"

hints:
  - "Scan the expression from left to right using a stack to hold operands."
  - "When an operator is encountered, pop the top two values, apply the operator with the first popped as the right operand, and push the result back."

youtubeId: ""

solutionUrl: "/solutions/postfix-evaluation-solution/"

timeComplexity: "O(n)"
spaceComplexity: "O(n)"

examples:
  - input: "exp = \"2 3 1 * + 9 -\""
    output: "-4"
    explanation: "3 * 1 = 3, then 2 + 3 = 5, then 5 - 9 = -4."
  - input: "exp = \"264*8/+3-\""
    output: "2"
    explanation: "6 * 4 = 24, 24 / 8 = 3, 2 + 3 = 5, and 5 - 3 = 2."

constraints:
  - "1 <= exp.length() <= 10^5"
  - "exp represents a valid postfix arithmetic expression with integers and operators +, -, *, /."
  - "Division by zero will not occur during evaluation."

realWorld:
  - title: "PostScript Page Description Language"
    description: "Laser printers parse PostScript graphics programs utilizing a stack-based postfix execution pipeline."
  - title: "Reverse Polish Notation (RPN) Calculators"
    description: "Hewlett-Packard scientific and financial calculators evaluate complex user formulas without parentheses using RPN."
  - title: "Virtual Machine Bytecode Interpretation"
    description: "Stack-based runtime environments like JVM and Ethereum Virtual Machine (EVM) evaluate instruction streams sequentially in postfix order."
---
<!-- All rights reserved to CSRGO DSA -->

Given a string `exp` representing a postfix arithmetic expression (Reverse Polish Notation) containing operands and operators `+`, `-`, `*`, `/`, evaluate the expression and return its resulting integer value.

Operands can be single digits or space-separated multi-digit integers. When an operator is evaluated, integer division truncates toward zero.
