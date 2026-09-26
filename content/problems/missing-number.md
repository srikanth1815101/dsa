---
title: "Missing Number"
date: 2026-09-26T18:57:00+05:30
difficulty: "Easy"
topics: ["Arrays", "Hashing", "Bit Manipulation"]
companies: ["Amazon", "Microsoft", "Google"]
learningPath: "Basic"

starterCode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/basic/MissingNumber/dsa"
engineeringMode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/basic/MissingNumber/engineering"

hints:
  - "Compute the expected sum of numbers from 0 to n using Gauss' formula: n * (n + 1) / 2, then subtract each element."
  - "Alternatively, use XOR bit manipulation: XOR all indices 0 to n together with all array values. Since x ^ x = 0, duplicates cancel out leaving the missing number without overflow risk."

youtubeId: ""

solutionUrl: "/solutions/missing-number-solution/"

timeComplexity: "O(n)"
spaceComplexity: "O(1)"

examples:
  - input: "nums = [3, 0, 1]"
    output: "2"
    explanation: "n = 3 since there are 3 numbers, so all numbers are in the range [0, 3]. 2 is the missing number in the range since it does not appear in nums."
  - input: "nums = [9, 6, 4, 2, 3, 5, 7, 0, 1]"
    output: "8"
    explanation: "n = 9 since there are 9 numbers, so all numbers are in the range [0, 9]. 8 is the missing number in the range."

constraints:
  - "n == nums.length"
  - "1 <= n <= 10^5"
  - "0 <= nums[i] <= n"
  - "All the numbers of nums are unique."

realWorld:
  - title: "Audio Frame Dropout Detection"
    description: "Detecting the missing packet in a stream of numbered UDP audio samples ordered from 0 to n."
  - title: "Inventory Sequence Audit"
    description: "Identifying which numbered merchandise tag is unaccounted for during warehouse stock intake."
  - title: "Database Sequence Gap Identification"
    description: "Pinpointing the single omitted sequence identifier in an unbroken consecutive range of batch records."
---
<!-- All rights reserved to CSRGO DSA -->

Given an array `nums` containing `n` distinct numbers in the range `[0, n]`, return the only number in the range that is missing from the array.
