---
title: "Power (Log)"
date: 2026-09-26T20:42:00+05:30
difficulty: "Medium"
topics: ["Mathematics", "Recursion", "Divide and Conquer"]
companies: ["Amazon", "Google", "Microsoft"]
learningPath: "Basic"

starterCode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/basic/PowerLog/dsa"
engineeringMode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/basic/PowerLog/engineering"

hints:
  - "Divide the power into halves: compute x^(n/2) recursively once and store it."
  - "If n is even, the result is (x^(n/2))^2. If n is odd, the result is x * (x^(n/2))^2."

youtubeId: ""

solutionUrl: "/solutions/power-log-solution/"

timeComplexity: "O(log n)"
spaceComplexity: "O(log n)"

examples:
  - input: "x = 2, n = 5"
    output: "32"
    explanation: "2^5 = 2 * (2^2)^2 = 2 * 16 = 32."
  - input: "x = 3, n = 4"
    output: "81"
    explanation: "3^4 = (3^2)^2 = 9^2 = 81."

constraints:
  - "-10 <= x <= 10"
  - "0 <= n <= 30"

realWorld:
  - title: "RSA Cryptographic Key Exponentiation"
    description: "Executing modular exponentiation with 2048-bit numbers in O(log n) operations."
  - title: "Matrix Exponentiation for Linear Recurrences"
    description: "Computing N-th Fibonacci and Markov transition states in O(k^3 log N) time."
  - title: "Fast Graph Reachability Transitive Closure"
    description: "Repeated squaring of adjacency matrices to detect k-hop connectivity paths."
---
<!-- All rights reserved to CSRGO DSA -->

Given two integers `x` (base) and `n` (exponent), calculate $x^n$ using logarithmic recursion (Divide and Conquer).
