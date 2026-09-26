---
title: "Stair Paths"
date: 2026-09-26T20:52:00+05:30
difficulty: "Medium"
topics: ["Recursion", "Dynamic Programming"]
companies: ["Amazon", "Google", "Microsoft"]
learningPath: "Basic"

starterCode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/basic/StairPaths/dsa"
engineeringMode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/basic/StairPaths/engineering"

hints:
  - "From stair n, one can jump 1, 2, or 3 steps down."
  - "The base case is reaching 0, which yields a valid empty path [\"\"]. If n < 0, return an empty list []."

youtubeId: ""

solutionUrl: "/solutions/stair-paths-solution/"

timeComplexity: "O(3^n)"
spaceComplexity: "O(3^n)"

examples:
  - input: "n = 3"
    output: "[\"111\", \"12\", \"21\", \"3\"]"
    explanation: "4 possible ways to descend 3 stairs with jump sizes 1, 2, or 3."
  - input: "n = 0"
    output: "[\"\"]"
    explanation: "Standing at the ground stair already has 1 path (no steps taken)."

constraints:
  - "0 <= n <= 10"

realWorld:
  - title: "Robotic Step and Stride Planning"
    description: "Computing terrain stride combinations to navigate uneven flight stairs."
  - title: "Network Transmission Retransmission Schedules"
    description: "Determining packet burst retry step sequences in adaptive protocols."
  - title: "Dynamic State Reachability Analysis"
    description: "Generating distinct execution trajectories to reach terminal states in automata."
---
<!-- All rights reserved to CSRGO DSA -->

Given a non-negative integer `n` representing the number of stairs, find and return all distinct paths to descend from step `n` down to step `0`.

At any step, a person can take a leap of `1`, `2`, or `3` steps.
