---
title: "XOR of All Subarrays"
date: 2026-10-01T02:13:00+05:30
difficulty: "Medium"
topics: ["Arrays", "Bit Manipulation", "Mathematics"]
companies: ["Amazon", "Google", "Microsoft"]
learningPath: "Mastery"

starterCode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/mastery/XorOfAllSubarrays/dsa"
engineeringMode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/mastery/XorOfAllSubarrays/engineering"

hints:
  - "Count how many times each element arr[i] appears across all possible subarrays."
  - "Element arr[i] appears (i + 1) * (n - i) times. If this count is odd, include arr[i] in the XOR; if even, it cancels to 0."

youtubeId: ""

solutionUrl: "/solutions/xor-of-all-subarrays-solution/"

timeComplexity: "O(n)"
spaceComplexity: "O(1)"

examples:
  - input: "nums = [1, 2, 3]"
    output: "** `2` **"
    explanation: "** The subarrays and their XOR values are: - `[1]` -> 1 - `[2]` -> 2 - `[3]` -> 3 - `[1, 2]` -> 1 ^ 2 = 3 - `[2, 3]` -> 2 ^ 3 = 1 - `[1, 2, 3]` -> 1 ^ 2 ^ 3 = 0 Total XOR = `1 ^ 2 ^ 3 ^ 3 ^ 1 ^ 0 = 2`."
  - input: "nums = [1, 2]"
    output: "** `0` **"
    explanation: "** - `[1]` -> 1 - `[2]` -> 2 - `[1, 2]` -> 3 Total XOR = `1 ^ 2 ^ 3 = 0`."

constraints:
  - "1 <= nums.length <= 10^5"
  - "0 <= nums[i] <= 10^9"
  - "Computes the bitwise XOR sum across all contiguous subarrays of nums."
realWorld:
  - title: "High-Speed Memory Checksum Verification"
    description: "Calculating holistic parity checksums across all continuous memory sectors in embedded flash controllers."
  - title: "Network Packet CRC Cross-Verification"
    description: "Validating multi-frame transmission integrity across sliding transmission sub-windows in telecommunications."
  - title: "Fault-Tolerant Storage Striping"
    description: "Computing combinatorial parity symbols for cross-stripe data reconstruction in RAID arrays."
weight: 74
---
<!-- All rights reserved to CSRGO DSA -->

Given an integer array `nums`, return the bitwise **XOR sum of all possible contiguous subarrays**.

Specifically, for each pair of indices `(i, j)` where `0 <= i <= j < nums.length`, calculate the XOR of the subarray `nums[i...j]`, and then calculate the XOR of all these values combined.
