---
title: "Counting Bits"
date: 2026-10-01T02:09:00+05:30
difficulty: "Easy"
topics: ["Dynamic Programming", "Bit Manipulation"]
companies: ["Amazon", "Google", "Facebook"]
learningPath: "Mastery"

starterCode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/mastery/CountingBits/dsa"
engineeringMode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/mastery/CountingBits/engineering"

hints:
  - "Use dynamic programming: the number of set bits in i is equal to bits in (i >> 1) plus (i & 1)."
  - "Alternatively, use Brian Kernighan's observation: ans[i] = ans[i & (i - 1)] + 1 for each i from 1 to n."

youtubeId: ""

solutionUrl: "/solutions/counting-bits-solution/"

timeComplexity: "O(n)"
spaceComplexity: "O(1)"

examples:
  - input: "n = 2"
    output: "** `[0,1,1]` **"
    explanation: "** 0 --> 0 (0 bits) 1 --> 1 (1 bit) 2 --> 10 (1 bit)"
  - input: "n = 5"
    output: "** `[0,1,1,2,1,2]` **"
    explanation: "** 0 --> 0 (0 bits) 1 --> 1 (1 bit) 2 --> 10 (1 bit) 3 --> 11 (2 bits) 4 --> 100 (1 bit) 5 --> 101 (2 bits)"

constraints:
  - "0 <= n <= 10^5"
  - "Returns an array of length n + 1 where each element represents the popcount of the index."
  - "Each count satisfies 0 <= ans[i] <= 32."
realWorld:
  - title: "Cryptographic Bit-Density Table Generation"
    description: "Precomputing popcount lookup tables for high-throughput cryptographic hashing and cipher encryption."
  - title: "Hamming Distance Matrix Computation"
    description: "Generating popcount arrays for error-correcting code decoders and parity check calculations."
  - title: "Database Bitmap Index Aggregation"
    description: "Calculating row population density across compressed bitmapped columns in analytical databases."
weight: 70
---
<!-- All rights reserved to CSRGO DSA -->

Given an integer `n`, return an array `ans` of length `n + 1` such that for each `i` (`0 <= i <= n`), `ans[i]` is the **number of 1's** in the binary representation of `i`.
