---
title: "Climbing Stairs"
date: 2026-09-27T20:10:00+05:30
difficulty: "Easy"
topics: ["Dynamic Programming", "Recursion", "Mathematics"]
companies: ["Amazon", "Google", "Adobe"]
learningPath: "Advanced"

starterCode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/advanced/ClimbingStairs/dsa"
engineeringMode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/advanced/ClimbingStairs/engineering"

hints:
  - "To reach stair n, you must take a step either from stair n - 1 (1-step jump) or stair n - 2 (2-step jump)."
  - "The total distinct ways to reach stair n equals ways(n - 1) + ways(n - 2), forming the Fibonacci recurrence."

youtubeId: ""

solutionUrl: "/solutions/climbing-stairs-solution/"

timeComplexity: "O(n)"
spaceComplexity: "O(1)"

examples:
  - input: "n = 2"
    output: "2"
    explanation: "There are two ways to reach the top: (1 step + 1 step) or (2 steps)."
  - input: "n = 3"
    output: "3"
    explanation: "There are three ways: (1 + 1 + 1), (1 + 2), or (2 + 1)."

constraints:
  - "1 <= n <= 45"
  - "Result fits within standard 32-bit signed integer limits"
  - "You can take either 1 or 2 steps at any point"

realWorld:
  - title: "Robotic Stride Transition Combinatorics"
    description: "Calculating allowable footstep gait variations for bipedal robots climbing uniform vertical risers."
  - title: "Compiler Instruction Sequence Scheduling"
    description: "Counting valid micro-op decomposition sequences for memory loads spanning 1-word or 2-word memory alignments."
  - title: "Network Transmission Burst Segmentation"
    description: "Enumerating valid 1-packet or 2-packet burst sequences under strict maximum transmission window constraints."
---
<!-- All rights reserved to CSRGO DSA -->

You are climbing a staircase that takes `n` steps to reach the top. Each time you can either climb `1` or `2` steps.

Find and return the number of distinct ways you can climb to the top.
