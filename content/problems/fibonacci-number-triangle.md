---
title: "Fibonacci Number Triangle"
date: 2026-09-24T23:17:35+05:30
difficulty: "Easy"
topics: ["Patterns", "Loops"]
companies: ["TCS", "Wipro", "Cognizant"]
learningPath: "Basic"

starterCode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/basic/FibonacciNumberTriangle/dsa"
engineeringMode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/basic/FibonacciNumberTriangle/engineering"

hints:
  - "Keep track of two variables for the Fibonacci sequence (a = 0, b = 1) across the nested loop iterations."
  - "Each row i contains exactly i numbers, separated by a tab character."

youtubeId: ""

solutionUrl: "/solutions/fibonacci-number-triangle-solution/"

timeComplexity: "O(n^2)"
spaceComplexity: "O(n^2)"

examples:
  - input: "n = 4"
    output: "0\n1\t1\n2\t3\t5\n8\t13\t21\t34\n"
    explanation: "For n = 4, the triangle has 4 rows. Row 1 has 0. Row 2 has 1, 1. Row 3 has 2, 3, 5. Row 4 has 8, 13, 21, 34."
  - input: "n = 3"
    output: "0\n1\t1\n2\t3\t5\n"
    explanation: "For n = 3, row 1 is 0, row 2 is 1 and 1, and row 3 is 2, 3, and 5."

constraints:
  - "1 <= n <= 10"
  - "Numbers in each row must be separated by a tab character (`\\t`)."
  - "Each row must end with a newline character (`\\n`) without trailing tabs."

realWorld:
  - title: "Golden Ratio Grid Subdivision"
    description: "Architectural and graphic layout rendering tools compute triangular Fibonacci divisions to organize canvas regions and proportional layouts."
  - title: "Financial Tier Volatility Modeling"
    description: "Fibonacci progression levels are applied across stepped market risk intervals in technical analysis and algorithmic trading."
  - title: "Exponential Backoff Interval Staging"
    description: "Simulating Fibonacci sequence-based delays across queued worker stages for resilient network retry strategies."
---
<!-- All rights reserved to CSRGO DSA -->

Given an integer `n`, construct a right-angled triangle pattern consisting of consecutive Fibonacci numbers starting from `0` spanning `n` rows.

### Pattern Rules
1. Row `1` contains the first Fibonacci number: `0`.
2. Row `2` contains the next two Fibonacci numbers: `1` and `1`.
3. Each row `i` (from `1` to `n`) contains exactly `i` consecutive Fibonacci numbers continuing from the previous row.
4. Values on the same row are separated by a tab character (`\t`).
5. Each row terminates immediately with a newline character (`\n`) without any trailing tab characters.
