---
title: "Display Array"
date: 2026-09-26T20:45:00+05:30
difficulty: "Easy"
topics: ["Arrays", "Recursion"]
companies: ["TCS", "Infosys", "Wipro"]
learningPath: "Basic"

starterCode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/basic/DisplayArray/dsa"
engineeringMode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/basic/DisplayArray/engineering"

hints:
  - "Maintain a current index parameter initialized to 0."
  - "The base case is reached when current index equals arr.length."
  - "In the recursive step, process the element at the current index and call recursively with index + 1."

youtubeId: ""

solutionUrl: "/solutions/display-array-solution/"

timeComplexity: "O(n)"
spaceComplexity: "O(n)"

examples:
  - input: "arr = [10, 20, 30, 40, 50]"
    output: "[10, 20, 30, 40, 50]"
    explanation: "Elements are visited and collected recursively in sequential order."
  - input: "arr = [7]"
    output: "[7]"
    explanation: "Single element array visited at index 0."

constraints:
  - "0 <= arr.length <= 10^4"
  - "-10^9 <= arr[i] <= 10^9"

realWorld:
  - title: "Recursive Linked Node Serialization"
    description: "Traversing linear data sequences to build output JSON or byte stream buffers."
  - title: "Recursive Memory Buffer Printing"
    description: "Inspecting consecutive cache line words in low-level embedded debugging environments."
  - title: "Sequential Pipeline Processing"
    description: "Applying sequential filter stages across an array of event descriptors."
---
<!-- All rights reserved to CSRGO DSA -->

Given an array of integers `arr`, recursively traverse and collect all elements in sequential index order from index `0` to `arr.length - 1`.

Return a list of integers containing the recursively collected elements.
