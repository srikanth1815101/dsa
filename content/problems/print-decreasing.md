---
title: "Print Decreasing"
date: 2026-09-26T20:38:00+05:30
difficulty: "Easy"
topics: ["Recursion"]
companies: ["TCS", "Infosys", "Wipro"]
learningPath: "Basic"

starterCode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/basic/PrintDecreasing/dsa"
engineeringMode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/basic/PrintDecreasing/engineering"

hints:
  - "Think about the base case: what should happen when n reaches 0?"
  - "In the recursive step, print/add n first, and then make a recursive call for n - 1."

youtubeId: ""

solutionUrl: "/solutions/print-decreasing-solution/"

timeComplexity: "O(n)"
spaceComplexity: "O(n)"

examples:
  - input: "n = 5"
    output: "[5, 4, 3, 2, 1]"
    explanation: "Numbers are printed in decreasing order from 5 down to 1."
  - input: "n = 1"
    output: "[1]"
    explanation: "Base sequence containing only 1."

constraints:
  - "1 <= n <= 1000"

realWorld:
  - title: "Rocket Launch Countdown Timers"
    description: "Sequentially decrementing mission timer stages down to liftoff T-minus 0."
  - title: "Stack Frame Unwinding Demos"
    description: "Visualizing execution call stack depth and frame push sequences in debuggers."
  - title: "Undo History Playback"
    description: "Replaying application state transitions in reverse chronological order."
---
<!-- All rights reserved to CSRGO DSA -->

Given a positive integer `n`, generate and print the numbers from `n` down to `1` in decreasing order using recursion.
