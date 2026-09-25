---
title: "Any Base to Any Base"
date: 2026-09-25T21:49:00+05:30
difficulty: "Easy"
topics: ["Mathematics", "Recursion"]
companies: ["Google", "Microsoft", "Amazon"]
learningPath: "Basic"

starterCode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/basic/AnyBaseToAnyBase/dsa"
engineeringMode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/basic/AnyBaseToAnyBase/engineering"

hints:
  - "Use decimal (base 10) as an intermediary stepping stone to bridge the two arbitrary bases."
  - "First convert the number from base b1 to decimal, then convert that decimal value into base b2."

youtubeId: ""

solutionUrl: "/solutions/any-base-to-any-base-solution/"

timeComplexity: "O(log10 n + log_b2 dec)"
spaceComplexity: "O(1)"

examples:
  - input: "n = 111001, b1 = 2, b2 = 8"
    output: "71"
    explanation: "111001 in base 2 converts to decimal 57. Decimal 57 then converts to 71 in base 8 (57 = 7 * 8 + 1)."
  - input: "n = 1172, b1 = 8, b2 = 2"
    output: "1001111010"
    explanation: "1172 in base 8 converts to decimal 634. Decimal 634 converted to base 2 yields 1001111010."

constraints:
  - "0 <= n <= 10^18"
  - "2 <= b1, b2 <= 10"
  - "All digits in n are strictly less than b1, and the resulting representation fits within a 64-bit signed integer."

realWorld:
  - title: "Radix Transcoding in Cross-Platform APIs"
    description: "Transcoding binary network payloads directly into octal or nonary human-readable representations across disparate microservices."
  - title: "Display Driver Number Formatters"
    description: "Converting raw sensor bitstrings directly into alternative positional bases for specialized industrial seven-segment displays."
  - title: "Cryptographic Encoding Bridges"
    description: "Re-encoding high-density numeric keys between diverse base representations during hashing and encryption handshakes."
---
<!-- All rights reserved to CSRGO DSA -->

Given a number `n` represented in base `b1` ($2 \le b1 \le 10$), convert it directly into its representation in base `b2` ($2 \le b2 \le 10$).

### Input Format
- A 64-bit integer `n` whose decimal digits represent the digits in base `b1`.
- An integer `b1` representing the source base ($2 \le b1 \le 10$).
- An integer `b2` representing the destination base ($2 \le b2 \le 10$).

### Output Format
- A 64-bit integer (`long`) representing the digits of the number in base `b2`.
