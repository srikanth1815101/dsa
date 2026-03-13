---
title: "Merge Sorted Array"
date: 2024-01-03T00:00:00Z
difficulty: "Easy"
topics: ["Array", "Two Pointers", "Sorting"]
companies: ["Meta", "Amazon", "Microsoft"]
path: "Basic"
starterCode: "https://github.com/your-username/dsa-repo/tree/main/problems/merge-sorted-array"
engineeringMode: "https://github.com/your-repo/dsa-problems/tree/main/engineering/merge-sorted-array"
hints:
  - "Start from the back of the arrays to avoid overwriting elements."
  - "Use three pointers: end of nums1 valid elements, end of nums2, and merge position."
youtubeId: "P1Ic85RarKY"
solutionUrl: "/solutions/merge-sorted-array-solution/"
timeComplexity: "O(m + n)"
spaceComplexity: "O(1)"
examples:
  - input: "nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3"
    output: "[1,2,2,3,5,6]"
    explanation: "We merge [1,2,3] and [2,5,6] into nums1, resulting in [1,2,2,3,5,6]."
  - input: "nums1 = [1], m = 1, nums2 = [], n = 0"
    output: "[1]"
    explanation: "nums2 is empty, so nums1 remains unchanged."
constraints:
  - "nums1.length == m + n"
  - "nums2.length == n"
  - "0 <= m, n <= 200"
  - "1 <= m + n <= 200"
realWorld:
  - title: "Log Merging"
    description: "Merging time-series logs from multiple servers into a single chronological stream."
  - title: "Database Operations"
    description: "Merging sorted result sets from different database shards."
  - title: "Feed Aggregation"
    description: "Combining sorted social media posts from multiple sources."
---

You are given two integer arrays `nums1` and `nums2`, sorted in **non-decreasing order**, and two integers `m` and `n`, representing the number of elements in `nums1` and `nums2` respectively.

**Merge** `nums1` and `nums2` into a single array sorted in **non-decreasing order**.

The final sorted array should not be returned by the function, but instead be **stored inside** the array `nums1`. To accommodate this, `nums1` has a length of `m + n`, where the first `m` elements denote the elements that should be merged, and the last `n` elements are set to `0` and should be ignored.
