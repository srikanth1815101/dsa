---
title: "Partition into Subsets"
date: 2026-09-27T20:34:00+05:30
difficulty: "Medium"
topics: ["Dynamic Programming", "Arrays", "Backtracking"]
companies: ["Amazon", "Google", "Facebook"]
learningPath: "Advanced"

starterCode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/advanced/PartitionIntoSubsets/dsa"
engineeringMode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/advanced/PartitionIntoSubsets/engineering"

hints:
  - "The n-th element can either form its own singleton subset or join one of the k existing non-empty subsets."
  - "The recurrence relation is S(n, k) = k * S(n - 1, k) + S(n - 1, k - 1)."

youtubeId: ""

solutionUrl: "/solutions/partition-into-subsets-solution/"

timeComplexity: "O(n * k)"
spaceComplexity: "O(k)"

examples:
  - input: "n = 4, k = 3"
    output: "6"
    explanation: "Subsets: {1, 2}, {3}, {4}; {1, 3}, {2}, {4}; {1, 4}, {2}, {3}; {2, 3}, {1}, {4}; {2, 4}, {1}, {3}; {3, 4}, {1}, {2}. Total = 6."
  - input: "n = 3, k = 2"
    output: "3"
    explanation: "Subsets: {1, 2}, {3}; {1, 3}, {2}; {2, 3}, {1}. Total = 3."

constraints:
  - "0 <= n <= 30"
  - "0 <= k <= 30"
  - "The result fits within a 64-bit signed integer (long)."

realWorld:
  - title: "Database Shard Tenant Distribution"
    description: "Allocating n unique tenant workloads across k non-empty physical database instances."
  - title: "Unsupervised Clustering Validation"
    description: "Determining combinatorial bounds when partitioning feature vectors into k distinct cluster groups."
  - title: "Asynchronous Worker Queue Partitioning"
    description: "Distributing independent background tasks across k active worker pools ensuring no pool sits idle."
---
<!-- All rights reserved to CSRGO DSA -->

Given two integers `n` and `k`, where `n` represents the total number of distinct elements in a set `{1, 2, ..., n}` and `k` represents the number of non-empty subsets to partition them into.

Your task is to compute the total number of distinct ways to partition the `n` elements into exactly `k` non-empty subsets (Stirling numbers of the second kind, $S(n, k)$).

If `n = 0`, `k = 0`, or `k > n`, return `0`.
