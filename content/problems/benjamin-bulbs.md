---
title: "Benjamin Bulbs"
date: 2026-04-11T15:47:48+05:30
difficulty: "Easy"
topics: ["Mathematics", "Number Theory", "Puzzles"]
companies: ["Goldman Sachs", "Morgan Stanley", "TCS"]
path: "Basic"

starterCode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/basic/BenjaminBulbs/dsa"
engineeringMode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/basic/BenjaminBulbs/engineering"

hints:
  - "Think about how many times a particular bulb is toggled based on the number of divisors its position has."
  - "A bulb remains ON only if it is toggled an odd number of times. Which numbers have an odd number of divisors?"

youtubeId: ""

solutionUrl: "/solutions/benjamin-bulbs-solution/"

timeComplexity: "O(sqrt(n))"
spaceComplexity: "O(sqrt(n))"

examples:
  - input: "n = 6"
    output: "[1, 4]"
    explanation: "With 6 bulbs, only bulbs at positions 1 and 4 are perfect squares, so they remain ON."
  - input: "n = 20"
    output: "[1, 4, 9, 16]"
    explanation: "Perfect squares up to 20 are 1, 4, 9, and 16."

constraints:
  - "1 <= n <= 10^9"
  - "Returning the list of bulb indices that remain ON."
  - "Expected time complexity is proportional to the number of ON bulbs."

realWorld:
  - title: "Cryptography"
    description: "Analyzing parity bits and toggle states in binary communications to detect transmission errors."
  - title: "Memory Allocation"
    description: "Simulating access patterns where resources are periodically updated based on prime or square factors."
  - title: "System Status Toggling"
    description: "Managing dashboard notifications that respond to multiple independent update cycles by tracking final states."
---

<!-- All rights reserved to CSRGO DSA -->

You are given `n` bulbs which are initially all OFF. There are `n` persons who perform the following actions:
- Person 1 toggles every 1st bulb (1, 2, 3...).
- Person 2 toggles every 2nd bulb (2, 4, 6...).
- Person 3 toggles every 3rd bulb (3, 6, 9...).
... and so on up to Person `n`.

Your task is to find which bulbs remain ON after all `n` persons have performed their actions.
