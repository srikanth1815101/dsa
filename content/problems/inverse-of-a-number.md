---
title: "Inverse of a Number"
date: 2026-04-11T15:14:51+05:30
difficulty: "Easy"
topics: ["Mathematics", "Number Theory"]
companies: ["Goldman Sachs", "TCS", "Infosys"]
learningPath: "Basic"

starterCode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/basic/InverseOfANumber/dsa"
engineeringMode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/basic/InverseOfANumber/engineering"

hints:
  - "The digit at a position becomes the position of that digit in the inverse."
  - "Keep track of the current position using a counter while extracting digits from the right."

youtubeId: ""

solutionUrl: "/solutions/inverse-of-a-number-solution/"

timeComplexity: "O(log10(n))"
spaceComplexity: "O(1)"

examples:
  - input: "n = 28346751"
    output: "73425681"
    explanation: "Digit 1 is at pos 1, so 1 at pos 1 in inverse. Digit 5 at pos 2, so 2 at pos 5 in inverse... following this logic, the original number reflects into 73425681."
  - input: "n = 426135"
    output: "416253"
    explanation: "Mapping the digit at each position to its new role correctly transforms 426135 to 416253."

constraints:
  - "1 <= n <= 10^9"
  - "Input digits will always be a permutation of 1 to the number of digits."
  - "Assume positions start from 1 from the right."

realWorld:
  - title: "Database Indexing"
    description: "Inverting mappings between primary keys and specific data attributes to optimize lookup speeds."
  - title: "Symmetric Encryption"
    description: "Creating reversible bit-level permutations where the encoding step is a mirror of the decoding step."
  - title: "Image Steganography"
    description: "Rearranging pixel components based on a mathematical inverse to hide data within carrier files."
---

<!-- All rights reserved to CSRGO DSA -->

The inverse of a number is defined by interchanging its digits and positions. If a digit `d` is at position `p` in the original number, then in the inverse number, the digit `p` will be at position `d`. Positions start from 1 (rightmost digit).

Given a number `n`, return its inverse. It is guaranteed that for a number with `k` digits, the digits will be a permutation of `1` to `k`.
