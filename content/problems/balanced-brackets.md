---
title: "Balanced Brackets"
date: 2026-09-27T10:02:00+05:30
difficulty: "Easy"
topics: ["Strings", "Stack"]
companies: ["Amazon", "Google", "Oracle"]
learningPath: "Advanced"

starterCode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/advanced/BalancedBrackets/dsa"
engineeringMode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/advanced/BalancedBrackets/engineering"

hints:
  - "Use a stack to keep track of opening brackets as you scan through the string."
  - "When a closing bracket is encountered, verify that it matches the most recently pushed opening bracket."

youtubeId: ""

solutionUrl: "/solutions/balanced-brackets-solution/"

timeComplexity: "O(n)"
spaceComplexity: "O(n)"

examples:
  - input: "s = \"[(a + b) + {(c + d) * (e / f)}]\""
    output: "true"
    explanation: "All opening brackets are closed in the exact reverse order by corresponding matching types."
  - input: "s = \"[(a + b) + {(c + d) * (e / f)]}\""
    output: "false"
    explanation: "The bracket ']' attempts to close before '}' has been matched, violating proper nesting."

constraints:
  - "1 <= s.length() <= 10^5"
  - "The string s contains parentheses '()', curly braces '{}', square brackets '[]', alphanumeric characters, and basic operators."
  - "All other characters besides brackets can be ignored during matching."

realWorld:
  - title: "Source Code Syntax Validation"
    description: "IDEs and compilers use bracket matching algorithms to highlight unclosed curly braces, parentheses, and brackets in code editors."
  - title: "JSON and XML Document Parsing"
    description: "Data serialization parsers validate hierarchical opening and closing tags or object braces to ensure documents are well-formed."
  - title: "Mathematical Equation Evaluators"
    description: "Calculators and scientific computation engines verify grouping syntax before evaluating complex nested expressions."
---
<!-- All rights reserved to CSRGO DSA -->

Given a string `s` containing various types of brackets including `'('`, `')'`, `'{'`, `'}'`, `'['`, and `']'` alongside optional characters, determine if the brackets in the expression are balanced.

An expression is balanced if:
1. Every open bracket is closed by a matching bracket of the same type.
2. Open brackets are closed in the correct order of nesting.
3. Every closing bracket has a preceding corresponding open bracket.

Return `true` if the brackets are balanced, and `false` otherwise.
