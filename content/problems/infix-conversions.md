---
title: "Infix Conversions"
date: 2026-09-27T10:08:00+05:30
difficulty: "Medium"
topics: ["Strings", "Stack", "Mathematics"]
companies: ["Amazon", "Microsoft", "Adobe"]
learningPath: "Advanced"

starterCode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/advanced/InfixConversions/dsa"
engineeringMode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/advanced/InfixConversions/engineering"

hints:
  - "Maintain an operator stack alongside two string stacks: one for postfix subexpressions and one for prefix subexpressions."
  - "Whenever an operator is popped, pop two operands from both stacks and construct postfix as (v1 + v2 + op) and prefix as (op + v1 + v2)."

youtubeId: ""

solutionUrl: "/solutions/infix-conversions-solution/"

timeComplexity: "O(n)"
spaceComplexity: "O(n)"

examples:
  - input: "exp = \"a + b * c\""
    output: "[\"abc*+\", \"+a*bc\"]"
    explanation: "Multiplication has higher precedence than addition, giving postfix abc*+ and prefix +a*bc."
  - input: "exp = \"(a + b) * c\""
    output: "[\"ab+c*\", \"*+abc\"]"
    explanation: "Parentheses group (a + b) first, producing postfix ab+c* and prefix *+abc."

constraints:
  - "1 <= exp.length() <= 10^5"
  - "exp contains lowercase English letters (operands), operators +, -, *, /, parentheses (), and whitespace."
  - "The given expression is always syntactically valid with properly matching parentheses."

realWorld:
  - title: "Compiler Code Generation"
    description: "Compilers convert infix mathematical source code into postfix Polish notation to generate linear assembly instructions."
  - title: "Stack Machine Virtual Execution"
    description: "Virtual machines (e.g. JVM bytecode, WebAssembly) execute expressions natively in postfix form without parentheses."
  - title: "LISP and Symbolic Computation Parsers"
    description: "Symbolic programming engines parse syntax into prefix Polish notation expressions for functional evaluation."
---
<!-- All rights reserved to CSRGO DSA -->

Given a string `exp` representing an infix mathematical expression consisting of single-character operands (lowercase letters), operators `+`, `-`, `*`, `/`, parentheses `(`, `)`, and optional spaces, convert the expression into both postfix and prefix notations.

Return a `String[]` of length 2 containing:
- At index `0`: the postfix expression.
- At index `1`: the prefix expression.
