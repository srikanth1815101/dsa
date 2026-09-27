---
title: "Intersection Point"
date: 2026-09-27T10:38:00+05:30
difficulty: "Medium"
topics: ["Linked List", "Two Pointers", "Hashing"]
companies: ["Amazon", "Microsoft", "Google"]
learningPath: "Advanced"

starterCode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/advanced/IntersectionPoint/dsa"
engineeringMode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/advanced/IntersectionPoint/engineering"

hints:
  - "Traverse both lists with two pointers; when a pointer reaches the end of one list, redirect it to the head of the other list."
  - "Because both pointers will traverse the combined length of both lists, they will collide at the intersection node or terminate at null if no intersection exists."

youtubeId: ""

solutionUrl: "/solutions/intersection-point-solution/"

timeComplexity: "O(n + m)"
spaceComplexity: "O(1)"

examples:
  - input: "l1 = [4, 1, 8, 4, 5], l2 = [5, 6, 1, 8, 4, 5], skip1 = 2, skip2 = 3"
    output: "8"
    explanation: "The two lists intersect at the node with value 8 (after 2 nodes in l1 and 3 nodes in l2)."
  - input: "l1 = [2, 6, 4], l2 = [1, 5], skip1 = 3, skip2 = 2"
    output: "-1"
    explanation: "The two lists do not intersect, so -1 is returned."

constraints:
  - "1 <= l1.length, l2.length <= 3 * 10^4"
  - "0 <= skip1 <= l1.length"
  - "0 <= skip2 <= l2.length"
  - "-10^5 <= Node.val <= 10^5"

realWorld:
  - title: "Git Branch Merge Base Identification"
    description: "Finding the common ancestor commit node where two feature branches diverged."
  - title: "Memory Allocation Alias Tracking"
    description: "Detecting shared memory segments referenced by independent runtime object pointers."
  - title: "Traffic Route Merging"
    description: "Identifying the first junction where two separate navigation corridors join into a shared highway."
---
<!-- All rights reserved to CSRGO DSA -->

Given the heads of two singly linked lists `l1` and `l2`, return the value of the node at which the two lists intersect. If the two linked lists have no intersection at all, return `-1`.

The inputs are represented by arrays `l1` and `l2`, along with `skip1` and `skip2` denoting the number of nodes to skip before the shared intersection segment begins.

Your solution must achieve $O(n + m)$ time complexity and $O(1)$ auxiliary space complexity.
