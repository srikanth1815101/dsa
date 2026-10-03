---
title: "Power of Two"
date: 2026-10-01T02:10:00+05:30
difficulty: "Easy"
topics: ["Mathematics", "Bit Manipulation"]
companies: ["Amazon", "Google", "Microsoft"]
learningPath: "Mastery"

starterCode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/mastery/PowerOfTwo/dsa"
engineeringMode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/mastery/PowerOfTwo/engineering"

hints:
  - "A power of two in binary representation has exactly one set bit."
  - "Use bit manipulation: a positive integer n is a power of two if (n & (n - 1)) == 0."

youtubeId: ""

solutionUrl: "/solutions/power-of-two-solution/"

timeComplexity: "O(1)"
spaceComplexity: "O(1)"

examples:
  - input: "n = 1"
    output: "** `true` **"
    explanation: "** `2^0 = 1`."
  - input: "n = 16"
    output: "** `true` **"
    explanation: "** `2^4 = 16`."

constraints:
  - "-2^31 <= n <= 2^31 - 1"
  - "An integer n is a power of two if there exists an integer x such that n == 2^x."
  - "Returns true if n is a power of two, false otherwise."
realWorld:
  - title: "Hash Table Bucket Capacity Sizing"
    description: "Ensuring internal bucket array capacities are powers of two so modulus operations use fast bitwise bitmasks (hash & (capacity - 1))."
  - title: "Operating System Page Allocation"
    description: "Validating virtual memory page frame alignments in OS kernel memory management subsystems."
  - title: "GPU Thread Block Sizing"
    description: "Aligning CUDA compute thread grid dimensions to hardware warp boundaries."
weight: 71
---
<!-- All rights reserved to CSRGO DSA -->

Given an integer `n`, return `true` if it is a power of two. Otherwise, return `false`.

An integer `n` is a power of two if there exists an integer `x` such that `n == 2^x`.
