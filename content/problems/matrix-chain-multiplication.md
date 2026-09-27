---
title: "Matrix Chain Multiplication"
date: 2026-09-27T20:39:00+05:30
difficulty: "Medium"
topics: ["Dynamic Programming", "Mathematics", "Divide and Conquer"]
companies: ["Amazon", "Google", "Flipkart"]
learningPath: "Advanced"

starterCode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/advanced/MatrixChainMultiplication/dsa"
engineeringMode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/advanced/MatrixChainMultiplication/engineering"

hints:
  - "Let dp[i][j] denote the minimum number of scalar multiplications needed to compute the matrix product A[i]...A[j]."
  - "Iterate through chain lengths from 2 to n - 1, and for each pair (i, j), test all possible split points k such that dp[i][j] = min(dp[i][k] + dp[k+1][j] + arr[i-1] * arr[k] * arr[j])."

youtubeId: ""

solutionUrl: "/solutions/matrix-chain-multiplication-solution/"

timeComplexity: "O(n^3)"
spaceComplexity: "O(n^2)"

examples:
  - input: "arr = [10, 20, 30, 40, 50]"
    output: "38000"
    explanation: "For matrices 10x20, 20x30, 30x40, 40x50, parenthesizing as ((A1(A2A3))A4) yields 38,000 operations."
  - input: "arr = [40, 20, 30, 10, 30]"
    output: "26000"
    explanation: "For matrices 40x20, 20x30, 30x10, 10x30, parenthesizing as ((A1(A2A3))A4) requires 26,000 operations."

constraints:
  - "2 <= arr.length <= 100"
  - "1 <= arr[i] <= 500"
  - "The minimum total operations fits within a standard 32-bit signed integer."

realWorld:
  - title: "Query Engine Relational Join Ordering"
    description: "Determining optimal join trees when cascading multiple relational SQL table joins to minimize intermediate tuple sizes."
  - title: "Graphics Pipeline Matrix Transformation"
    description: "Optimizing sequential coordinate space transformations (model, view, projection, viewport) in 3D rendering engines."
  - title: "Deep Learning Linear Layer Optimization"
    description: "Finding optimal contraction orders for multi-tensor product networks in tensor contraction engines."
---
<!-- All rights reserved to CSRGO DSA -->

Given an array of integers `arr` representing the dimensions of a chain of matrices, where the $i$-th matrix $A_i$ has dimensions `arr[i - 1] x arr[i]` (for $1 \le i < \text{arr.length}$).

Compute and return the **minimum number of scalar multiplications** needed to multiply the chain of matrices together.
