---
title: "Get Common Elements I"
date: 2026-09-27T11:21:00+05:30
difficulty: "Easy"
topics: ["Arrays", "Hashing", "Heap"]
companies: ["Amazon", "Microsoft", "Google"]
learningPath: "Advanced"

starterCode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/advanced/GetCommonElementsI/dsa"
engineeringMode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/advanced/GetCommonElementsI/engineering"

hints:
  - "Store all elements of the first array in a hash set to enable constant-time lookups."
  - "Iterate through the second array; when an element is found in the set, record it and remove it from the set to avoid duplicates."

youtubeId: ""

solutionUrl: "/solutions/get-common-elements-i-solution/"

timeComplexity: "O(n + m)"
spaceComplexity: "O(n)"

examples:
  - input: "a1 = [1, 1, 2, 2, 2, 3, 5], a2 = [1, 1, 1, 2, 2, 4, 5]"
    output: "[1, 2, 5]"
    explanation: "Elements 1, 2, and 5 from a2 are present in a1. Each is included once in order of appearance."
  - input: "a1 = [2, 4, 6, 8], a2 = [1, 3, 5, 7]"
    output: "[]"
    explanation: "There are no common elements between the two arrays."

constraints:
  - "1 <= a1.length, a2.length <= 10^5"
  - "-10^9 <= a1[i], a2[i] <= 10^9"

realWorld:
  - title: "Customer Database Cross-Referencing"
    description: "Finding active users from a newly acquired service who are already registered in the core identity database."
  - title: "Product Inventory Reconciliation"
    description: "Determining distinct catalog items present simultaneously in central warehouse and regional distribution hubs."
  - title: "Access Control Token Matching"
    description: "Extracting valid authorized role claims between requested identity scopes and granted tenant permissions."
---
<!-- All rights reserved to CSRGO DSA -->

Given two integer arrays `a1` and `a2`, find all elements in `a2` that are also present in `a1`.

Each common element must appear in the output array exactly once, strictly in the order of its first occurrence in `a2`.
