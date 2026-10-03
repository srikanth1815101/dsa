---
title: "Reduce Array Size to Half"
date: 2026-10-01T02:03:00+05:30
difficulty: "Medium"
topics: ["Arrays", "Heap", "Hashing"]
companies: ["Amazon", "Google", "Facebook"]
learningPath: "Mastery"

starterCode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/mastery/ReduceArraySizeToHalf/dsa"
engineeringMode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/mastery/ReduceArraySizeToHalf/engineering"

hints:
  - "Count frequencies of all elements using a hash map or frequency array."
  - "Sort frequencies in descending order and greedily pick the highest-frequency elements until the accumulated count is at least n / 2."

youtubeId: ""

solutionUrl: "/solutions/reduce-array-size-to-half-solution/"

timeComplexity: "O(n log n)"
spaceComplexity: "O(n)"

examples:
  - input: "arr = [3, 3, 3, 3, 5, 5, 5, 2, 2, 7]"
    output: "2"
    explanation: "Choosing {3, 7} will make the new array [5, 5, 5, 2, 2] which has size 5 (i.e. half of size 10). Size of set is 2. Choosing {3, 5} is also valid, which gives size 3 (less than half). The minimum size of the set is 2."
  - input: "arr = [7, 7, 7, 7, 7, 7]"
    output: "1"
    explanation: "The only possible set you can choose is {7}. This will result in the new array being empty."

constraints:
  - "2 <= arr.length <= 10^5"
  - "arr.length` is even."
  - "1 <= arr[i] <= 10^5"

realWorld:
  - title: "Database Cache Eviction by Frequency Class"
    description: "Purging the minimum distinct object types to free at least 50% of an in-memory cache capacity."
  - title: "Log Storage Disk Quota Compression"
    description: "Dropping the minimum distinct telemetry event IDs to reduce log volume below regulatory storage quotas."
  - title: "Inventory SKU Consolidation"
    description: "Retiring the fewest product categories to clear half the active warehouse shelving footprint."
weight: 64
---
<!-- All rights reserved to CSRGO DSA -->

You are given an integer array `arr`. You can choose a set of integers and remove all the occurrences of these integers in the array.

Return the **minimum size of the set** so that at least half of the integers of the array are removed.
