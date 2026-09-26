---
title: "Factorial"
date: 2026-09-26T20:40:00+05:30
difficulty: "Easy"
topics: ["Mathematics", "Recursion"]
companies: ["TCS", "Infosys", "Amazon"]
learningPath: "Basic"

starterCode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/basic/Factorial/dsa"
engineeringMode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/basic/Factorial/engineering"

hints:
  - "The base case is n == 0 or n == 1, where the factorial is 1."
  - "For n > 1, the factorial is n * factorial(n - 1). Use 64-bit integers (long in Java) to prevent overflow."

youtubeId: ""

solutionUrl: "/solutions/factorial-solution/"

timeComplexity: "O(n)"
spaceComplexity: "O(n)"

examples:
  - input: "n = 5"
    output: "120"
    explanation: "5! = 5 * 4 * 3 * 2 * 1 = 120."
  - input: "n = 0"
    output: "1"
    explanation: "0! is defined as 1."

constraints:
  - "0 <= n <= 20"

realWorld:
  - title: "Combinatorics and Permutation Calculations"
    description: "Computing sample space cardinality and arrangements in probability engines."
  - title: "Taylor Series Expansions"
    description: "Evaluating trigonometric and exponential approximation polynomials in numerical libraries."
  - title: "Statistical Partition Modeling"
    description: "Computing binomial coefficients and hypergeometric distributions in data analytics."
---
<!-- All rights reserved to CSRGO DSA -->

Given a non-negative integer `n`, calculate its factorial using recursion.

The factorial of a non-negative integer `n`, denoted as `n!`, is the product of all positive integers less than or equal to `n`. By definition, `0! = 1`.
