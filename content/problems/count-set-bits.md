---
title: "Count Set Bits"
date: 2026-04-11T16:04:53+05:30
difficulty: "Easy"
topics: ["Bit Manipulation", "Mathematics"]
companies: ["Amazon", "Microsoft", "Google"]
learningPath: "Basic"

starterCode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/basic/CountSetBits/dsa"
engineeringMode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/basic/CountSetBits/engineering"

hints:
  - "You can use the bitwise AND operator to check the status of the last bit repeatedly."
  - "Kernighan's algorithm (n & (n-1)) is a very efficient way to count set bits as it jumps directly between 1s."

youtubeId: ""

solutionUrl: "/solutions/count-set-bits-solution/"

timeComplexity: "O(number of set bits)"
spaceComplexity: "O(1)"

examples:
  - input: "n = 13"
    output: "3"
    explanation: "13 in binary is 1101. There are 3 set bits (1s)."
  - input: "n = 7"
    output: "3"
    explanation: "7 in binary is 111. There are 3 set bits."

constraints:
  - "0 <= n <= 10^9"
  - "Expected time complexity: O(log n) or O(set bits count)."
  - "The input integer is non-negative."

realWorld:
  - title: "Cryptography"
    description: "Determining the Hamming weight of encryption keys to assess their entropy and resistance to certain types of side-channel attacks."
  - title: "Error Correction"
    description: "Calculating parity bits in RAID systems or ECC memory to detect and fix data corruption during storage or transit."
  - title: "Database Indexing"
    description: "Using bitsets to manage membership and filters where counting set bits helps in quickly calculating the size of an intersection."
---
<!-- All rights reserved to CSRGO DSA -->

Given a non-negative integer `n`, your task is to count the number of '1's (set bits) in its binary representation.
