---
title: "Valid Parentheses"
date: 2024-01-03T10:00:00Z
difficulty: "Easy"
topics: ["String", "Stack"]
datastructures: ["Stack"]
companies: ["Google", "Meta", "Amazon"]
path: "Basic"
starterCode: "/dsa/files/ValidParentheses.java"
hints:
  - "Use a Stack to keep track of opening brackets."
  - "When encountering a closing bracket, check the top of the stack."
youtubeId: "WTzjTskDFMg"
solutionUrl: "/solutions/valid-parentheses-solution/"
timeComplexity: "O(n)"
spaceComplexity: "O(n)"
examples:
  - input: "s = \"()\""
    output: "true"
  - input: "s = \"()[]{}\""
    output: "true"

constraints:
  - "1 <= s.length <= 10^4"
  - "s consists of parentheses only '()[]{}'"
javaTemplate: |
  public class Solution {
      public boolean isValid(String s) {
          // Your code here
          return false;
      }
  }
---

Given a string `s` containing just the characters `'('`, `')'`, `'{'`, `'}'`, `'['` and `']'`, determine if the input string is valid.

An input string is valid if:
1. Open brackets must be closed by the same type of brackets.
2. Open brackets must be closed in the correct order.
3. Every close bracket has a corresponding open bracket of the same type.

## Approach

Use a stack to track opening brackets. When you encounter a closing bracket, check if it matches the top of the stack.
