---
title: "Decimal to Binary"
date: 2026-04-11T16:00:52+05:30
difficulty: "Easy"
topics: ["Mathematics", "Bit Manipulation"]
companies: ["Amazon", "Microsoft", "TCS"]
learningPath: "Basic"

starterCode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/basic/DecimalToBinary/dsa"
engineeringMode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/basic/DecimalToBinary/engineering"

hints:
  - "Repeatedly divide the decimal number by 2 and track the remainders."
  - "The remainders collected in reverse order form the binary representation."

youtubeId: ""

solutionUrl: "/solutions/decimal-to-binary-solution/"

timeComplexity: "O(log2(n))"
spaceComplexity: "O(1)"

examples:
  - input: "n = 13"
    output: "1101"
    explanation: "13 / 2 = 6 (rem 1), 6 / 2 = 3 (rem 0), 3 / 2 = 1 (rem 1), 1 / 2 = 0 (rem 1). Reading remainders backward: 1101."
  - input: "n = 7"
    output: "111"
    explanation: "7 / 2 = 3 (rem 1), 3 / 2 = 1 (rem 1), 1 / 2 = 0 (rem 1). Result is 111."

constraints:
  - "0 <= n <= 10^9"
  - "Handle n = 0 as a special case."
  - "Since binary values can be long, return the result as a long or string."

realWorld:
  - title: "Memory Storage"
    description: "Computers store all data, including decimals, in binary format (high/low voltage states) in transistor-based memory."
  - title: "Network Protocols"
    description: "IP addresses and data packets are processed as binary streams during routing and transmission across the internet."
  - title: "Bitmasking"
    description: "Using binary representations to efficiently manage multiple boolean flags within a single integer variable."
---
<!-- All rights reserved to CSRGO DSA -->

Given a non-negative decimal integer `n`, your task is to convert it into its binary (base 2) representation.
