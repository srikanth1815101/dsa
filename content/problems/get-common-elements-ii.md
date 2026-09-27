---
title: "Get Common Elements II"
date: 2026-09-27T11:22:00+05:30
difficulty: "Medium"
topics: ["Arrays", "Hashing", "Heap"]
companies: ["Amazon", "Microsoft", "Google"]
learningPath: "Advanced"

starterCode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/advanced/GetCommonElementsII/dsa"
engineeringMode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/advanced/GetCommonElementsII/engineering"

hints:
  - "Build a frequency map storing the occurrence count of each element in the first array."
  - "Iterate through the second array; if an element has a frequency greater than zero in the map, append it to the result and decrement its frequency."

youtubeId: ""

solutionUrl: "/solutions/get-common-elements-ii-solution/"

timeComplexity: "O(n + m)"
spaceComplexity: "O(n)"

examples:
  - input: "a1 = [1, 1, 2, 2, 2, 3, 5], a2 = [1, 1, 1, 2, 2, 4, 5]"
    output: "[1, 1, 2, 2, 5]"
    explanation: "1 appears min(2, 3)=2 times, 2 appears min(3, 2)=2 times, 5 appears min(1, 1)=1 time. Order preserves appearance in a2."
  - input: "a1 = [2, 4, 6, 8], a2 = [1, 3, 5, 7]"
    output: "[]"
    explanation: "There are no common elements between the two arrays."

constraints:
  - "1 <= a1.length, a2.length <= 10^5"
  - "-10^9 <= a1[i], a2[i] <= 10^9"

realWorld:
  - title: "Order Fulfillment Multi-Item Inventory Matching"
    description: "Allocating multiple reserved quantities of stocked parts against customer shipment manifests."
  - title: "Database Bag-Semantics Intersection (INTERSECT ALL)"
    description: "Evaluating SQL relational multisets where duplicate tuples are preserved according to minimum frequency."
  - title: "Financial Ledger Transaction Reconciliation"
    description: "Pairing balanced debit and credit entries with identical batch voucher amounts across banking ledgers."
---
<!-- All rights reserved to CSRGO DSA -->

Given two integer arrays `a1` and `a2`, find the intersection of both arrays preserving duplicate frequencies.

For each common element, the number of occurrences in the output should equal the minimum of its count in `a1` and its count in `a2`. The elements in the output must appear in the order they are encountered in `a2`.
