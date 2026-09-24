---
title: "Pascal Number Triangle"
date: 2026-09-24T23:24:10+05:30
difficulty: "Easy"
topics: ["Patterns", "Loops"]
companies: ["TCS", "Infosys", "HCL"]
learningPath: "Basic"

starterCode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/basic/PascalNumberTriangle/dsa"
engineeringMode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/basic/PascalNumberTriangle/engineering"

hints:
  - "Each row i (0-indexed) has elements representing binomial coefficients C(i, k)."
  - "Compute each next element in a row from the previous element: val = val * (i - k + 1) / k."

youtubeId: ""

solutionUrl: "/solutions/pascal-number-triangle-solution/"

timeComplexity: "O(n^2)"
spaceComplexity: "O(n^2)"

examples:
  - input: "n = 5"
    output: "1\n1\t1\n1\t2\t1\n1\t3\t3\t1\n1\t4\t6\t4\t1\n"
    explanation: "For n = 5, the first 5 rows of Pascal's triangle are printed with tab separators between values."
  - input: "n = 3"
    output: "1\n1\t1\n1\t2\t1\n"
    explanation: "For n = 3, row 1 is 1, row 2 is 1 and 1, and row 3 is 1, 2, and 1."

constraints:
  - "1 <= n <= 30"
  - "Numbers in each row must be separated by a tab character (`\\t`)."
  - "Each row must end with a newline character (`\\n`) without trailing tabs."

realWorld:
  - title: "Binomial Probability Distributions"
    description: "Evaluating Bernoulli trial likelihoods and probability mass functions in statistics and randomized algorithms."
  - title: "Bézier Curve Polynomial Expansion"
    description: "Computing Bernstein basis polynomial blending weights for vector graphics rendering and animation path smoothing."
  - title: "Combinatorial Pathway Routing"
    description: "Calculating grid path counts and state transition combinations in dynamic programming and network routing topologies."
---
<!-- All rights reserved to CSRGO DSA -->

Given an integer `n`, construct Pascal's triangle pattern containing `n` rows.

### Pattern Rules
1. Each row `i` (0-indexed, from `0` to `n - 1`) contains `i + 1` numbers.
2. The first and last numbers of every row are always `1`.
3. Every interior number is the sum of the two numbers directly above it in the preceding row, corresponding to the binomial coefficient $\binom{i}{k}$.
4. Numbers in each row are separated by a tab character (`\t`).
5. Each row terminates immediately with a newline character (`\n`) without trailing tabs.
