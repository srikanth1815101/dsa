---
title: "Range Sum Query (Mutable)"
date: 2026-10-01T02:22:00+05:30
difficulty: "Medium"
topics: ["Arrays", "Segment Tree", "Binary Indexed Tree"]
companies: ["Amazon", "Google", "Microsoft"]
learningPath: "Mastery"

starterCode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/mastery/RangeSumQueryMutable/dsa"
engineeringMode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/mastery/RangeSumQueryMutable/engineering"

hints:
  - "Use a Binary Indexed Tree (Fenwick Tree) or Segment Tree to support both point updates and range queries in O(log n) time."
  - "For a Fenwick tree, update index using (i += i & (-i)) and query prefix sum using (i -= i & (-i))."

youtubeId: ""

solutionUrl: "/solutions/range-sum-query-mutable-solution/"

timeComplexity: "O(log n) per update and query"
spaceComplexity: "O(n)"

examples:
  - input: "nums = [1, 3, 5]`, `operations = [[2, 0, 2], [1, 1, 2], [2, 0, 2]]"
    output: "** `[9, 8]` **"
    explanation: "** - `[2, 0, 2]`: `1 + 3 + 5 = 9` - `[1, 1, 2]`: Update `nums[1] = 2`, so `nums` becomes `[1, 2, 5]` - `[2, 0, 2]`: `1 + 2 + 5 = 8`"
  - input: "nums = [9, -8]`, `operations = [[1, 0, 3], [2, 0, 1], [1, 1, -3], [2, 0, 1]]"
    output: "** `[-5, 0]` **"
    explanation: "** - `[1, 0, 3]`: `nums` becomes `[3, -8]` - `[2, 0, 1]`: `3 + (-8) = -5` - `[1, 1, -3]`: `nums` becomes `[3, -3]` - `[2, 0, 1]`: `3 + (-3) = 0`"

constraints:
  - "0 <= nums.length <= 3 * 10^4"
  - "-100 <= nums[i] <= 100"
  - "0 <= operations.length <= 3 * 10^4"
  - "For type 1: `0 <= index < nums.length`, `-100 <= val <= 100"

realWorld:
  - title: "Real-Time Ad Auction Impression Budgeting"
    description: "Tracking and querying active ad campaign spending with high-throughput real-time bidding updates."
  - title: "Live Financial Order Book Cumulative Depth"
    description: "Maintaining running cumulative shares available across dynamic price levels as limit orders enter and cancel."
  - title: "Multi-Tenant Cloud Bandwidth Metering"
    description: "Updating real-time bandwidth consumption metrics across customer accounts with fast range threshold queries."
weight: 83
---
<!-- All rights reserved to CSRGO DSA -->

Given an integer array `nums` and a sequence of `operations`, each operation is represented by a 3-element array:
- `[1, index, val]`: Update the element at `nums[index]` to `val`.
- `[2, left, right]`: Calculate the sum of elements from index `left` to `right` inclusive (`nums[left] + ... + nums[right]`).

Return an integer array containing the results of all type `2` range sum queries in the order they appear.
