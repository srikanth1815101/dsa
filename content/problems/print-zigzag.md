---
title: "Print ZigZag"
date: 2026-09-26T20:43:00+05:30
difficulty: "Easy"
topics: ["Recursion", "Patterns"]
companies: ["Amazon", "Adobe", "Flipkart"]
learningPath: "Basic"

starterCode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/basic/PrintZigzag/dsa"
engineeringMode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/basic/PrintZigzag/engineering"

hints:
  - "Notice the structure: print n, recursively solve n - 1, print n, recursively solve n - 1, print n."
  - "The base case is when n reaches 0, where no operations are performed."

youtubeId: ""

solutionUrl: "/solutions/print-zigzag-solution/"

timeComplexity: "O(2^n)"
spaceComplexity: "O(n)"

examples:
  - input: "n = 1"
    output: "[1, 1, 1]"
    explanation: "Prints 1 (pre), calls f(0), prints 1 (in), calls f(0), prints 1 (post)."
  - input: "n = 2"
    output: "[2, 1, 1, 1, 2, 1, 1, 1, 2]"
    explanation: "Euler tree tour trace for n = 2."

constraints:
  - "1 <= n <= 10"

realWorld:
  - title: "Tree Euler Tour Traversal"
    description: "Recording node visit sequences during tree flattenings for Lowest Common Ancestor (LCA) queries."
  - title: "Call Stack Execution Tracing"
    description: "Visualizing function entry, intermediate re-entry, and exit phases in call stack profilers."
  - title: "Fractal Hilbert and Peano Curve Generators"
    description: "Recursive self-similar space-filling curve coordinate plotting engines."
---
<!-- All rights reserved to CSRGO DSA -->

Given a positive integer `n`, generate and print the zigzag recursion pattern (Euler tour of a binary recursion tree).

For a given `n`, the pattern follows:
1. Output `n` (Pre-order)
2. Recursively solve for `n - 1` (Left child)
3. Output `n` (In-order)
4. Recursively solve for `n - 1` (Right child)
5. Output `n` (Post-order)
