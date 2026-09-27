---
title: "Prefix Evaluation"
date: 2026-09-27T10:10:00+05:30
difficulty: "Medium"
topics: ["Strings", "Stack", "Mathematics"]
companies: ["Amazon", "Microsoft", "Adobe"]
learningPath: "Advanced"

starterCode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/advanced/PrefixEvaluation/dsa"
engineeringMode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/advanced/PrefixEvaluation/engineering"

hints:
  - "Traverse the prefix expression from right to left using a stack."
  - "When an operator is encountered, pop the first two operands from the stack (first popped is left operand, second popped is right operand) and evaluate."

youtubeId: ""

solutionUrl: "/solutions/prefix-evaluation-solution/"

timeComplexity: "O(n)"
spaceComplexity: "O(n)"

examples:
  - input: "exp = \"- + 2 * 3 1 9\""
    output: "-4"
    explanation: "From right to left, 3 * 1 = 3, then 2 + 3 = 5, and finally 5 - 9 = -4."
  - input: "exp = \"-+2/*6483\""
    output: "2"
    explanation: "6 * 4 = 24, 24 / 8 = 3, 2 + 3 = 5, and 5 - 3 = 2."

constraints:
  - "1 <= exp.length() <= 10^5"
  - "exp represents a valid prefix arithmetic expression with integers and operators +, -, *, /."
  - "Division by zero will not occur during evaluation."

realWorld:
  - title: "LISP and Scheme Dialect Interpreters"
    description: "Functional languages like LISP evaluate prefix expressions (+ a b) directly in abstract syntax tree order."
  - title: "Compiler Pre-order Code Generators"
    description: "Compilers traversing syntax trees in pre-order evaluate operator nodes before their child operand subtrees."
  - title: "Mathematical Symbolic Computation Systems"
    description: "Algebra software (e.g. Mathematica, Maple) represents mathematical functions internally in prefix notation for recursive differentiation."
---
<!-- All rights reserved to CSRGO DSA -->

Given a string `exp` representing a prefix arithmetic expression (Polish Notation) containing operands and operators `+`, `-`, `*`, `/`, evaluate the expression and return its resulting integer value.

Operands can be single digits or space-separated multi-digit integers. When an operator is evaluated, integer division truncates toward zero.
