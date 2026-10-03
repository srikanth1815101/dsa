---
title: "Search in Rotated Sorted Array"
date: 2026-10-01T01:00:00+05:30
difficulty: "Medium"
topics: ["Arrays", "Binary Search"]
companies: ["Amazon", "Google", "Flipkart"]
learningPath: "Mastery"

starterCode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/mastery/SearchInRotatedSortedArray/dsa"
engineeringMode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/mastery/SearchInRotatedSortedArray/engineering"

hints:
  - "Notice that even after rotation, dividing the array at the midpoint always leaves at least one half strictly sorted."
  - "Check whether the target lies within the boundaries of the sorted half to decide which subarray to eliminate."

youtubeId: ""

solutionUrl: "/solutions/search-in-rotated-sorted-array-solution/"

timeComplexity: "O(log n)"
spaceComplexity: "O(1)"

examples:
  - input: "nums = [4, 5, 6, 7, 0, 1, 2], target = 0"
    output: "4"
    explanation: "The target 0 exists at index 4 in the rotated array."
  - input: "nums = [4, 5, 6, 7, 0, 1, 2], target = 3"
    output: "-1"
    explanation: "The value 3 does not appear anywhere in the array."

constraints:
  - "1 <= nums.length <= 5000"
  - "-10^4 <= nums[i] <= 10^4"
  - "All values of nums are unique"
  - "nums is guaranteed to be rotated at some pivot"

realWorld:
  - title: "Circular Ring Buffer Queries"
    description: "Searching for specific sequence markers or offset events across wrapped ring buffers in continuous logging engines."
  - title: "Distributed Hash Ring Routing"
    description: "Locating node keys in consistent hashing rings where partition boundaries wrap around the maximum identifier."
  - title: "Time-Series Shift Compensation"
    description: "Querying metric timestamps in systems where historical telemetry segments are stored across rotating hourly shards."
weight: 1
---
<!-- All rights reserved to CSRGO DSA -->

Given an integer array `nums` sorted in ascending order with distinct values, `nums` is possibly rotated at an unknown pivot index `k` (`1 <= k < nums.length`) such that the resulting array is `[nums[k], nums[k+1], ..., nums[n-1], nums[0], nums[1], ..., nums[k-1]]`.

Given the array `nums` after possible rotation and an integer `target`, return the 0-based index of `target` if it is in `nums`, or `-1` if it is not in `nums`.

You must write an algorithm with `O(log n)` runtime complexity.
