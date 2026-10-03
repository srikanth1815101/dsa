---
title: "Partition DP (Boolean Parenthesization)"
date: 2026-10-01T01:56:00+05:30
difficulty: "Hard"
topics: ["Dynamic Programming", "Strings", "Mathematics"]
companies: ["Amazon", "Google", "Microsoft"]
learningPath: "Mastery"

starterCode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/mastery/PartitionDpBooleanParenthesization/dsa"
engineeringMode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/mastery/PartitionDpBooleanParenthesization/engineering"

hints:
  - "Use interval dynamic programming tracking both True and False evaluation counts for every substring."
  - "For each operator at position k, combine the True and False counts from left substring [i..k-1] and right substring [k+1..j] according to boolean logic rules."

youtubeId: ""

solutionUrl: "/solutions/partition-dp-boolean-parenthesization-solution/"

timeComplexity: "O(n^3)"
spaceComplexity: "O(n^2)"

examples:
  - input: "s = \"T|T&F^T\""
    output: "4"
    explanation: "There are 4 distinct ways to parenthesize the expression to evaluate to true: ((T|T)&(F^T)), (T|(T&(F^T))), (((T|T)&F)^T), and (T|((T&F)^T))."
  - input: "s = \"T^F|F\""
    output: "2"
    explanation: "Two ways: ((T^F)|F) and (T^(F|F)). Both evaluate to true."

constraints:
  - "1 <= s.length <= 100"
  - "s.length` is an odd integer."
  - "The characters at even indices (`0, 2, 4, ...`) are either `'T'` or `'F'`."
  - "The characters at odd indices (`1, 3, 5, ...`) are `'&'`, `'|'`, or `'^'`."

realWorld:
  - title: "SQL Query Optimizer Rule Expansion"
    description: "Determining valid associative evaluation orders for compound boolean WHERE clauses to minimize scan costs."
  - title: "Hardware Circuit Logic Synthesis"
    description: "Parenthesizing multi-input logic gate cascades to minimize propogation delay in FPGA routing."
  - title: "Rule-Based Compliance Verification Engines"
    description: "Evaluating all valid interpretations of compound contractual clauses in legal compliance automation."
weight: 57
---
<!-- All rights reserved to CSRGO DSA -->

Given a boolean expression `s` with symbols `'T'` (true) and `'F'` (false), and boolean operators `'&'` (AND), `'|'` (OR), and `'^'` (XOR).

Count the number of ways we can parenthesize the expression so that the entire expression evaluates to **true**.

Since the answer can be large, return the result modulo **1003**.
