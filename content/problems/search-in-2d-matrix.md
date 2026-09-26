---
title: "Search in 2D Matrix"
date: 2026-09-26T19:41:00+05:30
difficulty: "Medium"
topics: ["Matrix", "Binary Search"]
companies: ["Amazon", "Microsoft", "Oracle"]
learningPath: "Basic"

starterCode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/basic/SearchIn2DMatrix/dsa"
engineeringMode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/basic/SearchIn2DMatrix/engineering"

hints:
  - "Notice that each row is sorted, and the first element of row i + 1 is strictly greater than the last element of row i. This makes the entire m x n matrix an ascending 1D sorted array."
  - "Apply standard binary search over range [0, m * n - 1]. Map any 1D index mid back to 2D coordinates via row = mid / n and col = mid % n."

youtubeId: ""

solutionUrl: "/solutions/search-in-2d-matrix-solution/"

timeComplexity: "O(log(m * n))"
spaceComplexity: "O(1)"

examples:
  - input: "mat = [[1, 3, 5, 7], [10, 11, 16, 20], [23, 30, 34, 60]], target = 3"
    output: "true"
    explanation: "3 is found at coordinate (0, 1)."
  - input: "mat = [[1, 3, 5, 7], [10, 11, 16, 20], [23, 30, 34, 60]], target = 13"
    output: "false"
    explanation: "13 is not present in the matrix."

constraints:
  - "m == mat.length, n == mat[i].length"
  - "1 <= m, n <= 500"
  - "-10^4 <= mat[i][j], target <= 10^4"

realWorld:
  - title: "Database Clustered B-Tree Page Mapping"
    description: "Resolving clustered index disk records where continuous rows of database pages are mapped to 2D memory-mapped buffers."
  - title: "GPU Texture Linear Address Translation"
    description: "Mapping 1D linearized memory offsets directly into 2D display buffer coordinates (u, v) in texture sampling units."
  - title: "Distributed Partition Key Range Indexing"
    description: "Determining target shards in distributed table architectures partitioned across ordered row partitions."
---
<!-- All rights reserved to CSRGO DSA -->

You are given an $m \times n$ integer matrix `mat` with the following two properties:
1. Each row is sorted in non-decreasing order.
2. The first integer of each row is greater than the last integer of the previous row.

Given an integer `target`, return `true` if `target` is in `mat` or `false` otherwise.

You must write a solution in $O(\log(m \times n))$ time complexity.
