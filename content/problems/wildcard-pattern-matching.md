---
title: "Wildcard Pattern Matching"
date: 2026-10-01T01:16:00+05:30
difficulty: "Hard"
topics: ["Strings", "Dynamic Programming", "Greedy"]
companies: ["Amazon", "Google", "Microsoft"]
learningPath: "Mastery"

starterCode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/mastery/WildcardPatternMatching/dsa"
engineeringMode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/mastery/WildcardPatternMatching/engineering"

hints:
  - "Notice that '?' matches exactly one character, while '*' matches zero or more characters."
  - "Use a 2D DP table dp[i][j] where dp[i][j] indicates whether s[0..i-1] matches p[0..j-1], or track backtracking positions with two pointers."

youtubeId: ""

solutionUrl: "/solutions/wildcard-pattern-matching-solution/"

timeComplexity: "O(m * n)"
spaceComplexity: "O(n)"

examples:
  - input: "s = \"aa\", p = \"*\""
    output: "true"
    explanation: "'*' matches any sequence, including \"aa\"."
  - input: "s = \"cb\", p = \"?a\""
    output: "false"
    explanation: "'?' matches 'c', but the second letter is 'a', which does not match 'b'."

constraints:
  - "0 <= s.length, p.length <= 2000"
  - "s contains only lowercase English letters"
  - "p contains only lowercase English letters, '?' or '*'"

realWorld:
  - title: "File System Glob Expansion"
    description: "Evaluating wildcard file search filters such as *.log or test_??.csv in shell and filesystem engines."
  - title: "API Gateway URL Routing Rules"
    description: "Matching REST request paths against parameterized routing patterns containing wildcard path segments."
  - title: "Email Domain Spam Filtering"
    description: "Evaluating wildcard sender address filters to allow or blacklist domain hierarchies."
weight: 17
---
<!-- All rights reserved to CSRGO DSA -->

Given an input string (`s`) and a pattern (`p`), implement wildcard pattern matching with support for `'?'` and `'*'` where:
- `'?'` Matches any single character.
- `'*'` Matches any sequence of characters (including the empty sequence).

The matching should cover the **entire** input string (not partial).
