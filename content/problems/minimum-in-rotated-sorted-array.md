---
title: "Minimum in Rotated Sorted Array"
date: 2026-10-01T01:01:00+05:30
difficulty: "Medium"
topics: ["Arrays", "Binary Search"]
companies: ["Amazon", "Google", "Microsoft"]
learningPath: "Mastery"

starterCode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/mastery/MinimumInRotatedSortedArray/dsa"
engineeringMode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/mastery/MinimumInRotatedSortedArray/engineering"

hints:
  - "Compare the midpoint element with the rightmost boundary element to determine which segment contains the inflection point."
  - "If nums[mid] is strictly greater than nums[high], the smallest element must lie strictly to the right of mid."

youtubeId: ""

solutionUrl: "/solutions/minimum-in-rotated-sorted-array-solution/"

timeComplexity: "O(log n)"
spaceComplexity: "O(1)"

examples:
  - input: "nums = [3, 4, 5, 1, 2]"
    output: "1"
    explanation: "The original sorted array was [1, 2, 3, 4, 5], rotated 3 times. The minimum element is 1."
  - input: "nums = [4, 5, 6, 7, 0, 1, 2]"
    output: "0"
    explanation: "The minimum element in the rotated array is 0."

constraints:
  - "1 <= nums.length <= 5000"
  - "-5000 <= nums[i] <= 5000"
  - "All values of nums are unique"
  - "nums is sorted and rotated between 1 and n times"

realWorld:
  - title: "Chronological Shard Rollover Discovery"
    description: "Locating the oldest log generation segment in a distributed write log that cycles through rolling local disk partitions."
  - title: "Epoch Clock Drift Recovery"
    description: "Determining the initialization origin of a hardware event counter that periodically overflows and wraps around zero."
  - title: "Ring Buffer Head Pointer Reconstruction"
    description: "Identifying the head/entry point of an in-memory audit queue after an ungraceful crash without stored metadata."
weight: 2
---
<!-- All rights reserved to CSRGO DSA -->

Suppose an array of length `n` sorted in ascending order is rotated between `1` and `n` times. For example, the array `nums = [0, 1, 2, 4, 5, 6, 7]` might become:
- `[4, 5, 6, 7, 0, 1, 2]` if it was rotated 4 times.
- `[0, 1, 2, 4, 5, 6, 7]` if it was rotated 7 times.

Notice that rotating an array `[a[0], a[1], a[2], ..., a[n-1]]` 1 time results in the array `[a[n-1], a[0], a[1], a[2], ..., a[n-2]]`.

Given the sorted rotated array `nums` of **unique** elements, return the minimum element of this array.

You must write an algorithm that runs in `O(log n)` time.
