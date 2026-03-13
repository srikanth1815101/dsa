---
title: "Climbing Stairs"
date: 2024-01-07T00:00:00Z
difficulty: "Easy"
topics: ["Dynamic Programming", "Math"]
companies: ["Google", "Facebook", "Apple"]
path: "Basic"
starterCode: "https://github.com/your-username/dsa-repo/tree/main/problems/climbing-stairs"
engineeringMode: "https://github.com/your-repo/dsa-problems/tree/main/engineering/climbing-stairs"
hints:
  - "The answer follows a pattern: ways(n) = ways(n-1) + ways(n-2)."
  - "This is essentially the Fibonacci sequence."
youtubeId: "Y0lT9FckDqQ"
solutionUrl: "/solutions/climbing-stairs-solution/"
timeComplexity: "O(n)"
spaceComplexity: "O(1)"
examples:
  - input: "n = 2"
    output: "2"
    explanation: "There are two ways: (1 step + 1 step) or (2 steps)."
  - input: "n = 3"
    output: "3"
    explanation: "There are three ways: (1+1+1), (1+2), or (2+1)."
constraints:
  - "1 <= n <= 45"
realWorld:
  - title: "Route Planning"
    description: "Counting different paths with variable step sizes in navigation systems."
  - title: "Game Level Design"
    description: "Calculating possible ways a player can progress through stages."
  - title: "Investment Strategies"
    description: "Computing combinations of small and large investments to reach a target."
---

You are climbing a staircase. It takes `n` steps to reach the top.

Each time you can either climb **1** or **2** steps. In how many **distinct ways** can you climb to the top?
