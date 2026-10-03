---
title: "Median of Two Sorted Arrays"
date: 2026-10-01T01:58:00+05:30
difficulty: "Hard"
topics: ["Arrays", "Binary Search", "Divide and Conquer"]
companies: ["Amazon", "Google", "Goldman Sachs"]
learningPath: "Mastery"

starterCode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/mastery/MedianOfTwoSortedArrays/dsa"
engineeringMode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/mastery/MedianOfTwoSortedArrays/engineering"

hints:
  - "Perform binary search on the partition of the smaller array to divide both arrays into left and right halves of equal size."
  - "Verify the partition: maxLeftA <= minRightB and maxLeftB <= minRightA; adjust binary search boundaries accordingly."

youtubeId: ""

solutionUrl: "/solutions/median-of-two-sorted-arrays-solution/"

timeComplexity: "O(log(min(m, n)))"
spaceComplexity: "O(1)"

examples:
  - input: "nums1 = [1, 3], nums2 = [2]"
    output: "2.00000"
    explanation: "merged array = [1, 2, 3] and median is 2."
  - input: "nums1 = [1, 2], nums2 = [3, 4]"
    output: "2.50000"
    explanation: "merged array = [1, 2, 3, 4] and median is (2 + 3) / 2 = 2.5."

constraints:
  - "nums1.length == m"
  - "nums2.length == n"
  - "0 <= m <= 1000"
  - "0 <= n <= 1000"

realWorld:
  - title: "Distributed Database Shard Metric Aggregation"
    description: "Finding the global median transaction amount across two independent geographically sorted shard partitions without moving data."
  - title: "Multi-Sensor Timestamp Synchronization"
    description: "Computing median event timestamps between two independent lidar capture streams in autonomous driving vehicles."
  - title: "Financial Exchange Order Book Merging"
    description: "Determining clearing median equity valuation across two regional electronic communication networks."
weight: 59
---
<!-- All rights reserved to CSRGO DSA -->

Given two sorted arrays `nums1` and `nums2` of size `m` and `n` respectively, return the **median** of the two sorted arrays.

The overall run time complexity should be $\mathcal{O}(\log(m + n))$.
