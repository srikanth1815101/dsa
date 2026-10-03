---
title: "Evaluate Division"
date: 2026-10-01T01:44:00+05:30
difficulty: "Medium"
topics: ["Graph", "BFS", "DFS"]
companies: ["Amazon", "Google", "Facebook"]
learningPath: "Mastery"

starterCode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/mastery/EvaluateDivision/dsa"
engineeringMode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/mastery/EvaluateDivision/engineering"

hints:
  - "Model the equations as a directed weighted graph where an edge from A to B has weight v, and edge from B to A has weight 1/v."
  - "For each query, use DFS or BFS to search for a path from dividend to divisor, multiplying edge weights along the traversal."

youtubeId: ""

solutionUrl: "/solutions/evaluate-division-solution/"

timeComplexity: "O(Q * (V + E))"
spaceComplexity: "O(V + E)"

examples:
  - input: "equations = [[\"a\", \"b\"], [\"b\", \"c\"]] values = [2.0, 3.0] queries = [[\"a\", \"c\"], [\"b\", \"a\"], [\"a\", \"e\"], [\"a\", \"a\"], [\"x\", \"x\"]]"
    output: "[6.00000, 0.50000, -1.00000, 1.00000, -1.00000]"
    explanation: "Given: a / b = 2.0, b / c = 3.0 queries are: a / c = ?, b / a = ?, a / e = ?, a / a = ?, x / x = ? return: [6.0, 0.5, -1.0, 1.0, -1.0]"
  - input: "equations = [[\"a\", \"b\"], [\"b\", \"c\"], [\"bc\", \"cd\"]] values = [1.5, 2.5, 5.0] queries = [[\"a\", \"c\"], [\"c\", \"b\"], [\"bc\", \"cd\"], [\"cd\", \"bc\"]]"
    output: "[3.75000, 0.40000, 5.00000, 0.20000]"
    explanation: "Result is [3.75000, 0.40000, 5.00000, 0.20000]."

constraints:
  - "1 <= equations.length <= 20"
  - "equations[i].length == 2"
  - "1 <= Ai.length, Bi.length <= 5"
  - "values.length == equations.length"

realWorld:
  - title: "Multi-Currency Forex Conversion Engine"
    description: "Evaluating cross-currency exchange rates across illiquid foreign exchange pairs via intermediate currencies."
  - title: "Scientific Unit Conversion Parser"
    description: "Resolving compound dimensional engineering unit equivalencies across distributed sensor frameworks."
  - title: "Cryptocurrency Arbitrage Path Evaluation"
    description: "Tracing token pair swap liquidity ratios across automated market maker decentralized exchanges."
weight: 45
---
<!-- All rights reserved to CSRGO DSA -->

You are given an array of variable pairs `equations` and an array of real numbers `values`, where `equations[i] = [Ai, Bi]` and `values[i]` represent the equation `Ai / Bi = values[i]`. Each `Ai` or `Bi` is a string representing a single variable.

You are also given an array of query pairs `queries`, where `queries[j] = [Cj, Dj]` represents the $j^{th}$ query where you must find the answer for `Cj / Dj = ?`.

Return an array of real numbers `ans` containing the answers to all queries. If a single answer cannot be determined or if either variable in a query does not appear in any equation, return `-1.0`.

Note: The input is always valid. You may assume that evaluating the queries will not result in division by zero and there is no contradiction.
