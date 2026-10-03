---
title: "Single Number II"
date: 2026-10-01T02:08:00+05:30
difficulty: "Medium"
topics: ["Arrays", "Bit Manipulation"]
companies: ["Amazon", "Google", "Facebook"]
learningPath: "Mastery"

starterCode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/mastery/SingleNumberII/dsa"
engineeringMode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/mastery/SingleNumberII/engineering"

hints:
  - "Sum the bits at each of the 32 bit positions across all numbers."
  - "If the sum of bits at position i is not divisible by 3, the single number has a 1 at bit position i; use modulo arithmetic."

youtubeId: ""

solutionUrl: "/solutions/single-number-ii-solution/"

timeComplexity: "O(n)"
spaceComplexity: "O(1)"

examples:
  - input: "nums = [2,2,3,2]"
    output: "** `3`"
    explanation: "Result is ** `3`."
  - input: "nums = [0,1,0,1,0,1,99]"
    output: "** `99`"
    explanation: "Result is ** `99`."

constraints:
  - "1 <= nums.length <= 3 * 10^4"
  - "-2^31 <= nums[i] <= 2^31 - 1"
  - "Each element in `nums` appears exactly three times except for one element which appears once."

realWorld:
  - title: "Triple-Modular Redundancy Fault Detection"
    description: "Identifying faulty sensor outputs in aerospace fly-by-wire voting systems where sensors should read in triplets."
  - title: "Distributed Quorum Voting Discrepancy"
    description: "Locating an outlier node vote in a Byzantine fault-tolerant cluster requiring three matching confirmations."
  - title: "DNA Triplet Codon Sequencing Auditing"
    description: "Finding an un-paired nucleotide sequence in genetic code consisting of standard triplet codons."
weight: 69
---
<!-- All rights reserved to CSRGO DSA -->

Given an integer array `nums` where every element appears **three times** except for one, which appears **exactly once**. Find the single element and return it.

You must implement a solution with a linear runtime complexity $\mathcal{O}(n)$ and use only constant extra space $\mathcal{O}(1)$.
