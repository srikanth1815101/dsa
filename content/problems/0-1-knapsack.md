---
title: "0/1 Knapsack"
date: 2026-09-27T20:25:00+05:30
difficulty: "Medium"
topics: ["Dynamic Programming", "Arrays", "Recursion"]
companies: ["Oracle", "Amazon", "Google"]
learningPath: "Advanced"

starterCode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/advanced/ZeroOneKnapsack/dsa"
engineeringMode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/advanced/ZeroOneKnapsack/engineering"

hints:
  - "For each item, you face a binary choice: either exclude it or include it (if its weight <= current capacity)."
  - "When using a 1D DP table, traverse the capacities backwards from capacity down to weights[i] to ensure each item is chosen at most once."

youtubeId: ""

solutionUrl: "/solutions/0-1-knapsack-solution/"

timeComplexity: "O(n * capacity)"
spaceComplexity: "O(capacity)"

examples:
  - input: "values = [60, 100, 120], weights = [10, 20, 30], capacity = 50"
    output: "220"
    explanation: "Selecting the 2nd (weight 20, val 100) and 3rd (weight 30, val 120) items yields maximum value 100 + 120 = 220 with total weight 50."
  - input: "values = [10, 40, 30, 50], weights = [5, 4, 6, 3], capacity = 10"
    output: "90"
    explanation: "Selecting the 2nd (weight 4, val 40) and 4th (weight 3, val 50) items yields maximum value 40 + 50 = 90 with total weight 7 <= 10."

constraints:
  - "1 <= values.length == weights.length <= 1000"
  - "1 <= values[i] <= 10^4"
  - "1 <= weights[i] <= 1000"
  - "1 <= capacity <= 1000"

realWorld:
  - title: "Cargo Vessel Payload Maximization"
    description: "Selecting discrete freight shipping crates to maximize total transport revenue under cargo hold displacement limits."
  - title: "Virtual Machine Packing on Bare-Metal Hosts"
    description: "Allocating discrete guest VMs with memory footprints to maximize tenant billing value on hypervisors."
  - title: "Budgeted Investment Portfolio Selection"
    description: "Selecting non-fractional venture capital equity allocations to maximize projected returns within fixed capital budgets."
---
<!-- All rights reserved to CSRGO DSA -->

You are given `n` items, each with a given weight `weights[i]` and an associated value `values[i]`. You are also given a knapsack of maximum capacity `capacity`.

You can select each item at most once (0 or 1 choice). Your goal is to maximize the total value of items placed into the knapsack without exceeding its maximum capacity.

Return the maximum total value achievable.
