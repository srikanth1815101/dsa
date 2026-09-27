---
title: "Duplicate Brackets"
date: 2026-09-27T10:01:00+05:30
difficulty: "Easy"
topics: ["Strings", "Stack"]
companies: ["Oracle", "Amazon", "Adobe"]
learningPath: "Advanced"

starterCode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/advanced/DuplicateBrackets/dsa"
engineeringMode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/advanced/DuplicateBrackets/engineering"

hints:
  - "Think about using a stack to process characters sequentially until you reach a closing bracket."
  - "If the element at the top of the stack is immediately an opening bracket when you see a closing bracket, no content was enclosed."

youtubeId: ""

solutionUrl: "/solutions/duplicate-brackets-solution/"

timeComplexity: "O(n)"
spaceComplexity: "O(n)"

examples:
  - input: "s = \"((a + b) + (c + d))\""
    output: "false"
    explanation: "Every pair of parentheses encloses meaningful distinct sub-expressions."
  - input: "s = \"(a + b) + ((c + d))\""
    output: "true"
    explanation: "The sub-expression (c + d) is enclosed by redundant extra parentheses."

constraints:
  - "1 <= s.length() <= 10^5"
  - "The string s consists of valid balanced parentheses, lowercase English letters, and operators +, -, *, /."
  - "s contains no whitespace characters or spaces are ignored."

realWorld:
  - title: "Compiler Syntax Tree Optimization"
    description: "Compilers prune redundant nested parentheses in abstract syntax trees to generate cleaner bytecode."
  - title: "Formula Simplification in Spreadsheets"
    description: "Spreadsheet calculation engines detect and strip duplicate parentheses entered by users in mathematical formulas."
  - title: "Query Parsing Engines"
    description: "SQL engines identify redundant boolean grouping clauses to optimize database query execution plans."
---
<!-- All rights reserved to CSRGO DSA -->

Given a string `s` representing a balanced algebraic expression with parentheses, determine if the expression contains any duplicate (redundant) brackets.

A pair of brackets is considered duplicate if the sub-expression enclosed within them is already enclosed by another pair of brackets, meaning the outer brackets can be removed without altering the mathematical meaning.

Return `true` if the expression contains duplicate brackets, and `false` otherwise.
