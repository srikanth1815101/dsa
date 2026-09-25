---
title: "Find Element in Array"
date: 2026-09-25T22:02:00+05:30
difficulty: "Easy"
topics: ["Arrays", "Binary Search"]
companies: ["Amazon", "Google", "Microsoft"]
learningPath: "Basic"

starterCode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/basic/FindElementInArray/dsa"
engineeringMode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/basic/FindElementInArray/engineering"

hints:
  - "Iterate through the array from left to right using a standard 0-indexed loop."
  - "Compare each element with target d; return the current index as soon as a match is found, or -1 if the loop finishes without a match."

youtubeId: ""

solutionUrl: "/solutions/find-element-in-array-solution/"

timeComplexity: "O(n)"
spaceComplexity: "O(1)"

examples:
  - input: "arr = [15, 30, 40, 4, 11, 9], d = 40"
    output: "2"
    explanation: "Element 40 is present at index 2 (0-indexed)."
  - input: "arr = [10, 20, 30, 40, 50], d = 60"
    output: "-1"
    explanation: "Element 60 does not exist in the array, so -1 is returned."

constraints:
  - "1 <= arr.length <= 10^5"
  - "-10^9 <= arr[i], d <= 10^9"
  - "If the target element appears multiple times, return the 0-based index of its first occurrence."

realWorld:
  - title: "In-Memory Cache Lookup"
    description: "Scanning linear buffers or small cache segments to locate specific memory addresses or session tokens."
  - title: "Log Event Search"
    description: "Searching through unsorted streaming application log buffers to identify the first occurrence of an error event code."
  - title: "Inventory Item SKU Verification"
    description: "Looking up barcode or product SKU identifiers across unsorted warehouse cart scan arrays."
---
<!-- All rights reserved to CSRGO DSA -->

Given an array of integers `arr` and a target value `d`, find and return the 0-based index of the **first occurrence** of `d` in `arr`. If `d` is not present in the array, return `-1`.

### Input Format
- An array of integers `arr`.
- An integer `d` representing the target element to search for.

### Output Format
- An integer representing the 0-based index of `d` in `arr`, or `-1` if not found.
