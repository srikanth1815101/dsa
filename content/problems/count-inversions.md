---
title: "Count Inversions"
date: 2026-10-01T01:06:00+05:30
difficulty: "Medium"
topics: ["Arrays", "Merge Sort", "Divide and Conquer"]
companies: ["Amazon", "Adobe", "Google"]
learningPath: "Mastery"

starterCode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/mastery/CountInversions/dsa"
engineeringMode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/mastery/CountInversions/engineering"

hints:
  - "Recall that an inversion is a pair of indices (i, j) such that i < j and arr[i] > arr[j]."
  - "Enhance the standard divide-and-conquer merge sort: whenever an element from the right subarray is smaller than an element in the left subarray, all remaining elements in the left subarray also form inversions."

youtubeId: ""

solutionUrl: "/solutions/count-inversions-solution/"

timeComplexity: "O(n log n)"
spaceComplexity: "O(n)"

examples:
  - input: "arr = [2, 4, 1, 3, 5]"
    output: "3"
    explanation: "The sequence has 3 inversions: (2, 1), (4, 1), and (4, 3)."
  - input: "arr = [2, 3, 4, 5, 6]"
    output: "0"
    explanation: "The array is already sorted, so no inversions exist."

constraints:
  - "1 <= arr.length <= 10^5"
  - "1 <= arr[i] <= 10^9"
  - "The total inversion count can exceed 32-bit integer limits"

realWorld:
  - title: "Recommendation Collaborative Ranking"
    description: "Measuring preference divergence between two users by computing Kendall's tau rank correlation inversion distance."
  - title: "Genome Sequence Alignment"
    description: "Quantifying mutation distance and rearrangement steps between homologous DNA chromosome sequences."
  - title: "Distributed Packet Desynchronization"
    description: "Evaluating out-of-order delivery metrics across parallel network streams for congestion analysis."
weight: 7
---
<!-- All rights reserved to CSRGO DSA -->

Given an array of integers `arr`, find the **inversion count** of the array.

**Inversion Count**: For an array, inversion count indicates how far (or close) the array is from being sorted. If the array is already sorted, then the inversion count is `0`. If an array is sorted in the reverse order, the inversion count is maximum.

Formally, two elements `arr[i]` and `arr[j]` form an inversion if `arr[i] > arr[j]` and `i < j`.
