---
title: "Celebrity Problem"
date: 2026-09-27T10:11:00+05:30
difficulty: "Medium"
topics: ["Arrays", "Stack", "Two Pointers"]
companies: ["Amazon", "Microsoft", "Flipkart"]
learningPath: "Advanced"

starterCode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/advanced/CelebrityProblem/dsa"
engineeringMode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/advanced/CelebrityProblem/engineering"

hints:
  - "If person A knows person B, person A cannot be the celebrity, but person B might be."
  - "Use a stack or two pointers to eliminate non-celebrities one by one until only a single candidate remains, then verify that candidate."

youtubeId: ""

solutionUrl: "/solutions/celebrity-problem-solution/"

timeComplexity: "O(n)"
spaceComplexity: "O(1)"

examples:
  - input: "mat = [[0, 1, 0], [0, 0, 0], [0, 1, 0]]"
    output: "1"
    explanation: "Person 1 knows nobody (row 1 is all 0s) and everyone else (0 and 2) knows person 1 (column 1 has 1s)."
  - input: "mat = [[0, 1], [1, 0]]"
    output: "-1"
    explanation: "Both people know each other, so neither satisfies the celebrity definition."

constraints:
  - "1 <= mat.length <= 1000"
  - "mat[i].length == mat.length"
  - "mat[i][j] is either 0 or 1, and mat[i][i] == 0."

realWorld:
  - title: "Social Network Centrality Analysis"
    description: "Graph analytics algorithms locate sink vertices with maximum in-degree and zero out-degree representing viral broadcast authorities."
  - title: "Distributed Consensus Leader Identification"
    description: "Network discovery protocols locate dedicated coordinator nodes that are acknowledged by all peers but initiate no outbound pings."
  - title: "Access Control Token Verification"
    description: "Security permission engines identify universal trusted root certificates that trust no subordinate entities."
---
<!-- All rights reserved to CSRGO DSA -->

In a party of `n` people numbered from `0` to `n - 1`, a celebrity is defined as someone who is known by all other `n - 1` people, but does not know anyone in return.

You are given an `n x n` binary matrix `mat` where `mat[i][j] == 1` indicates that person `i` knows person `j`, and `mat[i][j] == 0` indicates that person `i` does not know person `j`.

Determine the index of the celebrity if one exists, or return `-1` if there is no celebrity at the party.
