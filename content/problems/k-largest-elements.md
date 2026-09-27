---
title: "K Largest Elements"
date: 2026-09-27T11:24:00+05:30
difficulty: "Medium"
topics: ["Arrays", "Heap", "Quick Select"]
companies: ["Amazon", "Google", "Facebook"]
learningPath: "Advanced"

starterCode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/advanced/KLargestElements/dsa"
engineeringMode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/advanced/KLargestElements/engineering"

hints:
  - "A min-heap of fixed capacity k can retain the k largest numbers encountered so far."
  - "Whenever the heap exceeds size k, remove the smallest element from the top."

youtubeId: ""

solutionUrl: "/solutions/k-largest-elements-solution/"

timeComplexity: "O(n log k)"
spaceComplexity: "O(k)"

examples:
  - input: "arr = [13, 12, 11, 5, 2, 7, 8, 9, 3, 4, 10], k = 4"
    output: "[10, 11, 12, 13]"
    explanation: "The 4 largest elements are 10, 11, 12, and 13. Returned in ascending sorted order."
  - input: "arr = [3, 2, 1, 5, 6, 4], k = 2"
    output: "[5, 6]"
    explanation: "The 2 largest elements are 5 and 6."

constraints:
  - "1 <= k <= arr.length <= 10^5"
  - "-10^9 <= arr[i] <= 10^9"

realWorld:
  - title: "Top-Performing Search Results Filtering"
    description: "Maintaining the top-k highest relevance scores in real-time search engine query ranking nodes."
  - title: "High-Value Transaction Fraud Scoring"
    description: "Tracking the k largest suspicious transfer volumes in sliding fraud evaluation windows."
  - title: "Leaderboard Real-Time Metric Aggregation"
    description: "Extracting the highest game scores across distributed game server sessions."
---
<!-- All rights reserved to CSRGO DSA -->

Given an array of integers `arr` and an integer `k`, find the `k` largest elements in `arr`.

Return the `k` largest elements sorted in ascending order.
