---
title: "Next Permutation"
date: 2026-10-01T01:07:00+05:30
difficulty: "Medium"
topics: ["Arrays", "Two Pointers", "Greedy"]
companies: ["Adobe", "Amazon", "Google"]
learningPath: "Mastery"

starterCode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/mastery/NextPermutation/dsa"
engineeringMode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/mastery/NextPermutation/engineering"

hints:
  - "Find the first index from the right where nums[i] < nums[i + 1], marking where the suffix decreases."
  - "Find the smallest element in the suffix strictly greater than nums[i], swap them, and reverse the remaining suffix."

youtubeId: ""

solutionUrl: "/solutions/next-permutation-solution/"

timeComplexity: "O(n)"
spaceComplexity: "O(1)"

examples:
  - input: "nums = [1, 2, 3]"
    output: "[1, 3, 2]"
    explanation: "The next lexicographical permutation of [1, 2, 3] is [1, 3, 2]."
  - input: "nums = [3, 2, 1]"
    output: "[1, 2, 3]"
    explanation: "Since [3, 2, 1] is in descending order, no larger permutation exists. It wraps to the lowest possible order [1, 2, 3]."

constraints:
  - "1 <= nums.length <= 100"
  - "0 <= nums[i] <= 100"
  - "The replacement must be in place and use constant extra memory"

realWorld:
  - title: "Combinatorial Query Optimization"
    description: "Iterating through join permutations in query plan engines to benchmark sequence costs incrementally."
  - title: "Cryptographic Key Exhaustion"
    description: "Generating successive lexicographical character candidate permutations during deterministic password verification."
  - title: "Robotics Motion Sequence Planning"
    description: "Evaluating waypoint visit sequences for an automated assembly arm moving through successive pick locations."
weight: 8
---
<!-- All rights reserved to CSRGO DSA -->

A **permutation** of an array of integers is an arrangement of its members into a sequence or linear order.

For example, for `arr = [1, 2, 3]`, the following are all the permutations of `arr`: `[1, 2, 3]`, `[1, 3, 2]`, `[2, 1, 3]`, `[2, 3, 1]`, `[3, 1, 2]`, `[3, 2, 1]`.

The **next permutation** of an array of integers is the next lexicographically greater permutation of its integer. More formally, if all the permutations of the array are sorted in one container according to their lexicographical order, then the **next permutation** of that array is the permutation that follows it in the sorted container.

If such an arrangement is not possible, the array must be rearranged as the lowest possible order (i.e., sorted in ascending order).

Given an array of integers `nums`, find the next permutation of `nums`.
