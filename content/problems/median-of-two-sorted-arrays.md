---
title: "Median of Two Sorted Arrays"
date: 2024-01-21T00:00:00Z
difficulty: "Hard"
topics: ["Array", "Binary Search", "Divide and Conquer"]
companies: ["Google", "Amazon", "Apple"]
path: "Mastery"
starterCode: "https://github.com/your-username/dsa-repo/tree/main/problems/median-of-two-sorted-arrays"
engineeringMode: "https://github.com/your-repo/dsa-problems/tree/main/engineering/median-of-two-sorted-arrays"
hints:
  - "Binary search on the smaller array to find the correct partition."
  - "The partition should divide total elements into two equal halves."
youtubeId: "LPFhl65R7ww"
solutionUrl: "/solutions/median-of-two-sorted-arrays-solution/"
timeComplexity: "O(log(min(m, n)))"
spaceComplexity: "O(1)"
examples:
  - input: "nums1 = [1,3], nums2 = [2]"
    output: "2.00000"
    explanation: "Merged array = [1,2,3]. Median is 2."
  - input: "nums1 = [1,2], nums2 = [3,4]"
    output: "2.50000"
    explanation: "Merged array = [1,2,3,4]. Median is (2+3)/2 = 2.5."
constraints:
  - "nums1.length == m"
  - "nums2.length == n"
  - "0 <= m, n <= 1000"
  - "1 <= m + n <= 2000"
  - "-10^6 <= nums1[i], nums2[i] <= 10^6"
realWorld:
  - title: "Distributed Computing"
    description: "Finding median across partitioned datasets on different servers."
  - title: "Streaming Analytics"
    description: "Computing median from multiple sorted data streams."
  - title: "Database Queries"
    description: "Finding median values from joined sorted tables."
---

Given two sorted arrays `nums1` and `nums2` of size `m` and `n` respectively, return **the median** of the two sorted arrays.

The overall run time complexity should be **O(log (m+n))**.
