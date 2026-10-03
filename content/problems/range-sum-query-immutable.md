---
title: "Range Sum Query (Immutable)"
date: 2026-10-01T02:21:00+05:30
difficulty: "Easy"
topics: ["Arrays", "Prefix Sum", "Dynamic Programming"]
companies: ["Amazon", "Google", "Microsoft"]
learningPath: "Mastery"

starterCode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/mastery/RangeSumQueryImmutable/dsa"
engineeringMode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/mastery/RangeSumQueryImmutable/engineering"

hints:
  - "Precompute a prefix sum array where prefix[i] = nums[0] + ... + nums[i-1]."
  - "Calculate any range sum [left, right] in O(1) time using prefix[right + 1] - prefix[left]."

youtubeId: ""

solutionUrl: "/solutions/range-sum-query-immutable-solution/"

timeComplexity: "O(1) per query, O(n) preprocessing"
spaceComplexity: "O(n)"

examples:
  - input: "nums = [-2, 0, 3, -5, 2, -1]`, `queries = [[0, 2], [2, 5], [0, 5]]"
    output: "** `[1, -1, -3]` **"
    explanation: "** - Query `[0, 2]`: `(-2) + 0 + 3 = 1` - Query `[2, 5]`: `3 + (-5) + 2 + (-1) = -1` - Query `[0, 5]`: `(-2) + 0 + 3 + (-5) + 2 + (-1) = -3`"
  - input: "nums = [1, 2, 3, 4, 5]`, `queries = [[1, 3], [0, 4], [2, 2]]"
    output: "** `[9, 15, 3]` **"
    explanation: "** - Query `[1, 3]`: `2 + 3 + 4 = 9` - Query `[0, 4]`: `1 + 2 + 3 + 4 + 5 = 15` - Query `[2, 2]`: `3`"

constraints:
  - "0 <= nums.length <= 10^4"
  - "-10^5 <= nums[i] <= 10^5"
  - "0 <= queries.length <= 10^4"
  - "0 <= left <= right < nums.length"

realWorld:
  - title: "Financial Ledger Sub-Period Reporting"
    description: "Instantly calculating total quarterly revenue from daily ledger tables with sub-millisecond query latency."
  - title: "Geographic Rainfall Accumulation Queries"
    description: "Querying total accumulated precipitation between any two calendar dates across weather monitoring stations."
  - title: "Video Streaming Bandwidth Auditing"
    description: "Computing total byte consumption across arbitrary video time intervals for billing telemetry."
weight: 82
---
<!-- All rights reserved to CSRGO DSA -->

Given an integer array `nums` and a sequence of queries `queries` where each query consists of a pair `[left, right]`, compute the sum of the elements in `nums` between indices `left` and `right` inclusive (i.e. `nums[left] + nums[left + 1] + ... + nums[right]`).

Return an integer array containing the answers to each query in order.
