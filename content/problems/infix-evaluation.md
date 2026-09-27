---
title: "Infix Evaluation"
date: 2026-09-27T10:07:00+05:30
difficulty: "Medium"
topics: ["Strings", "Stack", "Mathematics"]
companies: ["Amazon", "Microsoft", "Adobe"]
learningPath: "Advanced"

starterCode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/advanced/InfixEvaluation/dsa"
engineeringMode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/advanced/InfixEvaluation/engineering"

hints:
  - "Use two separate stacks: one for operands (numbers) and one for operators."
  - "Process pending operations in the operator stack whenever an operator of equal or lower precedence is encountered."

youtubeId: ""

solutionUrl: "/solutions/infix-evaluation-solution/"

timeComplexity: "O(n)"
spaceComplexity: "O(n)"

examples:
  - input: "exp = \"2 + (5 - 3 * 6 / 2)\""
    output: "-2"
    explanation: "Inside parentheses, 3 * 6 = 18, then 18 / 2 = 9, then 5 - 9 = -4. Finally, 2 + (-4) = -2."
  - input: "exp = \"(2 + 3) * 4\""
    output: "20"
    explanation: "Parentheses enforce (2 + 3) = 5 first, then 5 * 4 = 20."

constraints:
  - "1 <= exp.length() <= 10^5"
  - "exp contains non-negative integers, operators +, -, *, /, parentheses (), and whitespace."
  - "The given expression is always syntactically valid, and division by zero will not occur."

realWorld:
  - title: "Spreadsheet Calculation Formula Parser"
    description: "Spreadsheet formulas evaluate cell values using standard arithmetic operator precedence."
  - title: "Compiler Abstract Syntax Tree Construction"
    description: "Language parsers resolve arithmetic precedence into unambiguous evaluation syntax trees."
  - title: "Scientific Calculator Engines"
    description: "Handheld and software calculators evaluate user-typed infix math expressions in real-time."
---
<!-- All rights reserved to CSRGO DSA -->

Given a string `exp` representing an infix arithmetic expression containing non-negative integers, operators `+`, `-`, `*`, `/`, parentheses `(`, `)`, and optional spaces, evaluate and return its integer value.

The evaluation must respect standard operator precedence (`*` and `/` have higher precedence than `+` and `-`) and parentheses grouping, performing integer division truncating toward zero.
