---
title: "Regular Expression Matching"
date: 2026-10-01T01:17:00+05:30
difficulty: "Hard"
topics: ["Strings", "Dynamic Programming", "Recursion"]
companies: ["Amazon", "Google", "Facebook"]
learningPath: "Mastery"

starterCode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/mastery/RegularExpressionMatching/dsa"
engineeringMode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/mastery/RegularExpressionMatching/engineering"

hints:
  - "Notice that '*' modifies the single preceding character, meaning it can represent zero occurrences or multiple occurrences of that character."
  - "Use dynamic programming where dp[i][j] represents whether s[0..i-1] matches p[0..j-1]."

youtubeId: ""

solutionUrl: "/solutions/regular-expression-matching-solution/"

timeComplexity: "O(m * n)"
spaceComplexity: "O(m * n)"

examples:
  - input: "s = \"aa\", p = \"a*\""
    output: "true"
    explanation: "'*' means zero or more of the preceding element, 'a'. Therefore, by repeating 'a' once, it becomes \"aa\"."
  - input: "s = \"ab\", p = \".*\""
    output: "true"
    explanation: "\".*\" means \"zero or more (*) of any character (.)\"."

constraints:
  - "1 <= s.length <= 20"
  - "1 <= p.length <= 20"
  - "s contains only lowercase English letters; p contains lowercase English letters, '.', and '*'."
  - "For each appearance of '*', there is a previous valid character to match."

realWorld:
  - title: "Compiler Lexer Token Pattern Matching"
    description: "Compiling regular expressions into state transition tables for lexical analysis in programming language compilers."
  - title: "Web Application Firewall Payload Inspection"
    description: "Matching inbound request bodies against signatures of regex patterns to detect SQL injection or XSS payload patterns."
  - title: "Log Parsing and Metric Extraction"
    description: "Matching structured syslog streams against pattern templates with optional repetitions and wildcard fields."
weight: 18
---
<!-- All rights reserved to CSRGO DSA -->

Given an input string `s` and a pattern `p`, implement regular expression matching with support for `'.'` and `'*'` where:
- `'.'` Matches any single character.
- `'*'` Matches zero or more of the preceding element.

The matching should cover the **entire** input string (not partial).
