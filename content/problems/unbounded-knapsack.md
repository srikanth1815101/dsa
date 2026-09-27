---
title: "Unbounded Knapsack"
date: 2026-09-27T20:26:00+05:30
difficulty: "Medium"
topics: ["Dynamic Programming", "Arrays", "Recursion"]
companies: ["Amazon", "Google", "Microsoft"]
learningPath: "Advanced"

starterCode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/advanced/UnboundedKnapsack/dsa"
engineeringMode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/advanced/UnboundedKnapsack/engineering"

hints:
  - "Unlike 0/1 knapsack, each item can be chosen an unlimited number of times."
  - "Traverse capacity values forwards from weights[i] up to capacity so that previous selections of the same item can be compounded."

youtubeId: ""

solutionUrl: "/solutions/unbounded-knapsack-solution/"

timeComplexity: "O(n * capacity)"
spaceComplexity: "O(capacity)"

examples:
  - input: "values = [10, 40, 50, 70], weights = [1, 3, 4, 5], capacity = 8"
    output: "110"
    explanation: "Selecting 2 items of weight 3 (val 40 each) and 2 items of weight 1 (val 10 each) gives weight 3 + 3 + 1 + 1 = 8 with value 40 + 40 + 10 + 10 = 100. Alternatively, selecting one item of weight 5 (val 70) and one item of weight 3 (val 40) gives total weight 8 and value 70 + 40 = 110."
  - input: "values = [6, 10, 12], weights = [1, 2, 3], capacity = 5"
    output: "30"
    explanation: "Selecting 5 instances of the first item (weight 1, value 6) yields maximum value 5 * 6 = 30."

constraints:
  - "1 <= values.length == weights.length <= 1000"
  - "1 <= values[i] <= 10^4"
  - "1 <= weights[i] <= 1000"
  - "1 <= capacity <= 1000"

realWorld:
  - title: "Stock Market Batch Order Filling"
    description: "Filling order volume requirements by picking unlimited multiples of standardized trade lot blocks to maximize commission yields."
  - title: "Cloud Instance Elastic Slicing"
    description: "Partitioning data center compute chassis into variable core containers with unbounded replication to maximize host utilization revenue."
  - title: "Industrial Material Cutting Optimization"
    description: "Cutting raw metal sheets or fabric rolls into unlimited duplicates of standard commercial templates to maximize scrap recovery value."
---
<!-- All rights reserved to CSRGO DSA -->

You are given `n` items, where each item has a weight `weights[i]` and an associated value `values[i]`. You are also given a knapsack of capacity `capacity`.

You can select each item an **unlimited** number of times. Maximize the total value of items that can be accommodated in the knapsack without exceeding its capacity.

Return the maximum total value.
