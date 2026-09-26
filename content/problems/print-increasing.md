---
title: "Print Increasing"
date: 2026-09-26T20:39:00+05:30
difficulty: "Easy"
topics: ["Recursion"]
companies: ["TCS", "Infosys", "Wipro"]
learningPath: "Basic"

starterCode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/basic/PrintIncreasing/dsa"
engineeringMode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/basic/PrintIncreasing/engineering"

hints:
  - "Think about the post-order recursive pattern: call recursively on n - 1 first."
  - "When the recursive call returns, print/add n to the result."

youtubeId: ""

solutionUrl: "/solutions/print-increasing-solution/"

timeComplexity: "O(n)"
spaceComplexity: "O(n)"

examples:
  - input: "n = 5"
    output: "[1, 2, 3, 4, 5]"
    explanation: "Numbers are printed in ascending order from 1 up to 5."
  - input: "n = 1"
    output: "[1]"
    explanation: "Single element base sequence."

constraints:
  - "1 <= n <= 1000"

realWorld:
  - title: "Progress Bar / Percentage Increments"
    description: "Sequentially rendering step increments from initialization up to completion."
  - title: "Tree Depth First Traversal (Post-Order)"
    description: "Evaluating child computations before processing parent nodes in syntax trees."
  - title: "Sequential ID Generation"
    description: "Allocating sequential serial numbers from 1 to N during batch record creation."
---
<!-- All rights reserved to CSRGO DSA -->

Given a positive integer `n`, generate and print the numbers from `1` up to `n` in increasing order using recursion.
