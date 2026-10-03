---
title: "Fractional Knapsack"
date: 2026-10-01T01:35:00+05:30
difficulty: "Medium"
topics: ["Greedy", "Sorting"]
companies: ["Amazon", "Google", "Microsoft"]
learningPath: "Mastery"

starterCode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/mastery/FractionalKnapsack/dsa"
engineeringMode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/mastery/FractionalKnapsack/engineering"

hints:
  - "Calculate the value-to-weight ratio for each item and sort items in descending order of this ratio."
  - "Greedily take full items while capacity allows; take the proportional fraction of the next item when capacity runs out."

youtubeId: ""

solutionUrl: "/solutions/fractional-knapsack-solution/"

timeComplexity: "O(n log n)"
spaceComplexity: "O(1)"

examples:
  - input: "val = [60, 100, 120]`, `wt = [10, 20, 30]`, `capacity = 50"
    output: "** `240.0` **"
    explanation: "** - Item 1 (val 60, wt 10): ratio = 6.0. Take all (wt 10, val 60). Remaining capacity = 40. - Item 2 (val 100, wt 20): ratio = 5.0. Take all (wt 20, val 100). Remaining capacity = 20. - Item 3 (val 120, wt 30): ratio = 4.0. Take fraction 20/30 (wt 20, val 80). Remaining capacity = 0. Total value = 60 + 100 + 80 = 240.0."
  - input: "val = [60, 100]`, `wt = [10, 20]`, `capacity = 50"
    output: "** `160.0` **"
    explanation: "** Total weight of all items is 30 <= 50, so all items can be taken completely for total value 160.0."

constraints:
  - "1 <= val.length <= 10^5"
  - "wt.length == val.length"
  - "1 <= val[i], wt[i] <= 10^4"
  - "0 <= capacity <= 10^9"

realWorld:
  - title: "Bandwidth Allocation for Streaming Packets"
    description: "Allocating network channel bandwidth to media packets with highest utility-per-byte ratios."
  - title: "Cargo Freight Loading Logistics"
    description: "Loading bulk divisible commodities onto shipping vessels to maximize economic payload value."
  - title: "Investment Portfolio Capital Allocation"
    description: "Allocating liquid investment cash across fractional share opportunities with the highest yields."
weight: 36
---
<!-- All rights reserved to CSRGO DSA -->

Given the weights and values of `n` items, along with the maximum capacity `w` of a knapsack, determine the maximum total value that can be accommodated in the knapsack.

Unlike the 0/1 knapsack problem, in the **Fractional Knapsack** problem, items can be broken down into smaller fractions. If an item cannot fit completely into the knapsack, you may take any fraction of it proportional to its weight and value.

Return the maximum value as a double, rounded or accurate up to 2 decimal places.
