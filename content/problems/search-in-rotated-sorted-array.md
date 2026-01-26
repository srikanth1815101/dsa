---
title: "Search in Rotated Sorted Array"
date: 2024-01-16T00:00:00Z
difficulty: "Medium"
topics: ["Array", "Binary Search"]
companies: ["Amazon", "Facebook", "Microsoft"]
path: "Advanced"
starterCode: "https://github.com/your-username/dsa-repo/tree/main/problems/search-in-rotated-sorted-array"
hints:
  - "The array is rotated but still partially sorted."
  - "Determine which half is sorted, then decide which half to search."
youtubeId: "U8XENwh8Oy8"
solutionUrl: "/solutions/search-in-rotated-sorted-array-solution/"
timeComplexity: "O(log n)"
spaceComplexity: "O(1)"
examples:
  - input: "nums = [4,5,6,7,0,1,2], target = 0"
    output: "4"
    explanation: "The array is rotated at index 4. Target 0 is at index 4."
  - input: "nums = [4,5,6,7,0,1,2], target = 3"
    output: "-1"
    explanation: "3 does not exist in the array."
constraints:
  - "1 <= nums.length <= 5000"
  - "-10^4 <= nums[i] <= 10^4"
  - "All values of nums are unique"
  - "nums is an ascending array that is possibly rotated"
realWorld:
  - title: "Log File Analysis"
    description: "Searching in circular buffers where old entries wrap around."
  - title: "Time-Based Data"
    description: "Finding events in rotated time-series data (e.g., logs from midnight)."
  - title: "Circular Queue Search"
    description: "Locating items in circular data structures."
---

There is an integer array `nums` sorted in ascending order (with **distinct** values).

Prior to being passed to your function, `nums` is **possibly rotated** at an unknown pivot index `k` (1 <= k < nums.length) such that the resulting array is `[nums[k], nums[k+1], ..., nums[n-1], nums[0], nums[1], ..., nums[k-1]]`.

Given the array `nums` **after** the possible rotation and an integer `target`, return the **index of target** if it is in `nums`, or **-1** if it is not in `nums`.

You must write an algorithm with **O(log n)** runtime complexity.
