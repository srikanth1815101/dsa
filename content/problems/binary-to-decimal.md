---
title: "Binary to Decimal"
date: 2026-04-11T16:03:39+05:30
difficulty: "Easy"
topics: ["Mathematics", "Bit Manipulation"]
companies: ["Amazon", "Microsoft", "Infosys"]
path: "Basic"

starterCode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/basic/BinaryToDecimal/dsa"
engineeringMode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/basic/BinaryToDecimal/engineering"

hints:
  - "Iterate through the binary digits from right to left, multiplying each digit by increasing powers of 2."
  - "The sum of these products gives the decimal value."

youtubeId: ""

solutionUrl: "/solutions/binary-to-decimal-solution/"

timeComplexity: "O(digits)"
spaceComplexity: "O(1)"

examples:
  - input: "n = 1101"
    output: "13"
    explanation: "(1 * 2^3) + (1 * 2^2) + (0 * 2^1) + (1 * 2^0) = 8 + 4 + 0 + 1 = 13."
  - input: "n = 1010"
    output: "10"
    explanation: "(1 * 2^3) + (0 * 2^2) + (1 * 2^1) + (0 * 2^0) = 8 + 0 + 2 + 0 = 10."

constraints:
  - "0 <= n <= 1111111111 (Binary representation of up to 10^9 decimal)"
  - "Input n is treated as a numeric representation of binary (only digits 0 and 1)."
  - "Expected time complexity is proportional to the number of binary digits."

realWorld:
  - title: "Compiler Design"
    description: "Converting binary machine code instructions into decimal or high-level program logic values for execution."
  - title: "Network Addressing"
    description: "Converting 8-bit binary segments of an IPv4 address (octets) back into decimal for human-readable display."
  - title: "Data Encoding"
    description: "Decoding binary-encoded data formats like ASCII or Base64 into their original numerical or character representations."
---

<!-- All rights reserved to CSRGO DSA -->

Given a binary number `n` (represented as a numeric integer containing only 0s and 1s), your task is to convert it into its decimal (base 10) representation.
