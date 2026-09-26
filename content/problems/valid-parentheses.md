---
title: "Valid Parentheses"
date: 2026-09-26T20:31:00+05:30
difficulty: "Easy"
topics: ["Strings", "Stack"]
companies: ["Amazon", "Google", "Facebook"]
learningPath: "Basic"

starterCode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/basic/ValidParentheses/dsa"
engineeringMode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/basic/ValidParentheses/engineering"

hints:
  - "Use a stack data structure to track unmatched opening brackets as you scan the string from left to right."
  - "When encountering a closing bracket, verify that the stack is non-empty and that the top element matches the corresponding opening bracket type. Pop the match, and ensure the stack is empty after the scan."

youtubeId: ""

solutionUrl: "/solutions/valid-parentheses-solution/"

timeComplexity: "O(n)"
spaceComplexity: "O(n)"

examples:
  - input: "s = \"()[]{}\""
    output: "true"
    explanation: "All opening brackets are matched and closed in the correct order."
  - input: "s = \"(]\""
    output: "false"
    explanation: "The opening parenthesis is closed by a mismatched square bracket."

constraints:
  - "1 <= s.length() <= 10^4"
  - "s consists of parentheses only: '()[]{}'"

realWorld:
  - title: "Compiler Abstract Syntax Tree Parser"
    description: "Validating balanced scopes, function signatures, and block brackets in source code tokenizers."
  - title: "JSON / XML Schema Validator"
    description: "Validating structural tag nesting and object delimiter balancing in markup deserializers."
  - title: "Mathematical Expression Evaluators"
    description: "Checking parenthesis balance before building operator precedence parse trees in calculation engines."
---
<!-- All rights reserved to CSRGO DSA -->

Given a string `s` containing just the characters `'('`, `')'`, `'{'`, `'}'`, `'['` and `']'`, determine if the input string is valid.

An input string is valid if:
1. Open brackets must be closed by the same type of brackets.
2. Open brackets must be closed in the correct order.
3. Every close bracket has a corresponding open bracket of the same type.
