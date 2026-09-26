---
title: "Power (Linear)"
date: 2026-09-26T20:41:00+05:30
difficulty: "Easy"
topics: ["Mathematics", "Recursion"]
companies: ["Amazon", "Microsoft", "TCS"]
learningPath: "Basic"

starterCode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/basic/PowerLinear/dsa"
engineeringMode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/basic/PowerLinear/engineering"

hints:
  - "The base case is when exponent n equals 0, where x^0 = 1."
  - "For n > 0, express x^n as x * x^(n - 1) and make a single recursive call."

youtubeId: ""

solutionUrl: "/solutions/power-linear-solution/"

timeComplexity: "O(n)"
spaceComplexity: "O(n)"

examples:
  - input: "x = 2, n = 5"
    output: "32"
    explanation: "2^5 = 2 * 2 * 2 * 2 * 2 = 32."
  - input: "x = 3, n = 0"
    output: "1"
    explanation: "Any non-zero number to the power 0 is 1."

constraints:
  - "-10 <= x <= 10"
  - "0 <= n <= 15"

realWorld:
  - title: "Discrete Compounding Calculations"
    description: "Computing compound interest growth factors period-by-period in financial models."
  - title: "Fixed-Base Radix Multiplications"
    description: "Calculating scaling magnitudes and positional multipliers in digital number representations."
  - title: "Recursive Tree Growth Simulation"
    description: "Evaluating constant branching factor populations across sequential generations."
---
<!-- All rights reserved to CSRGO DSA -->

Given two integers `x` (the base) and `n` (the non-negative exponent), calculate $x^n$ using linear recursion.
