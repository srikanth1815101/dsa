---
title: "Valid Parentheses"
date: 2024-01-02T00:00:00Z
difficulty: "Easy"
topics: ["String", "Stack"]
companies: ["Google", "Meta", "Amazon"]
path: "Basic"
starterCode: "https://github.com/your-username/dsa-repo/tree/main/problems/valid-parentheses"
hints:
  - "Use a Stack to keep track of opening brackets."
  - "When encountering a closing bracket, check the top of the stack."
youtubeId: "WTzjTskDFMg"
solutionUrl: "/solutions/valid-parentheses-solution/"
timeComplexity: "O(n)"
spaceComplexity: "O(n)"
examples:
  - input: "s = \"()[]{}\""
    output: "true"
    explanation: "Each opening bracket has a matching closing bracket in the correct order."
  - input: "s = \"(]\""
    output: "false"
    explanation: "The opening parenthesis '(' is closed by a bracket ']' which doesn't match."
constraints:
  - "1 <= s.length <= 10^4"
  - "s consists of parentheses only '()[]{}'"
realWorld:
  - title: "Code Compiler"
    description: "Checking if code blocks, function calls, and array accesses are correctly closed."
  - title: "Expression Evaluation"
    description: "Parsing mathematical expressions to ensure valid syntax before evaluation."
  - title: "HTML/XML Validation"
    description: "Verifying that all HTML tags are properly opened and closed."
---

Given a string `s` containing just the characters `'('`, `')'`, `'{'`, `'}'`, `'['` and `']'`, determine if the input string is **valid**.

An input string is valid if:
1. Open brackets must be closed by the **same type** of brackets.
2. Open brackets must be closed in the **correct order**.
3. Every close bracket has a corresponding open bracket of the same type.
