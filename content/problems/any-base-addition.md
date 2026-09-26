---
title: "Any Base Addition"
date: 2026-09-25T21:51:00+05:30
difficulty: "Easy"
topics: ["Mathematics", "Arrays"]
companies: ["Goldman Sachs", "Microsoft", "Amazon"]
learningPath: "Basic"

starterCode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/basic/AnyBaseAddition/dsa"
engineeringMode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/basic/AnyBaseAddition/engineering"

hints:
  - "Simulate column-by-column addition from right to left while maintaining a carry variable."
  - "In each step, sum the corresponding digits and carry, then set the new carry as sum / b and remainder digit as sum % b."

youtubeId: ""

solutionUrl: "/solutions/any-base-addition-solution/"

timeComplexity: "O(max(log10 n1, log10 n2))"
spaceComplexity: "O(1)"

examples:
  - input: "n1 = 236, n2 = 754, b = 8"
    output: "1212"
    explanation: "In base 8: 6 + 4 = 10 = 1*8 + 2 (rem 2, carry 1). Next: 3 + 5 + 1 = 9 = 1*8 + 1 (rem 1, carry 1). Next: 2 + 7 + 1 = 10 = 1*8 + 2 (rem 2, carry 1). Final carry 1 yields 1212."
  - input: "n1 = 1010, n2 = 1100, b = 2"
    output: "10110"
    explanation: "In binary: 0+0=0, 1+0=1, 0+1=1, 1+1=10 (rem 0, carry 1), resulting in 10110."

constraints:
  - "0 <= n1, n2 <= 10^18"
  - "2 <= b <= 10"
  - "All digits in n1 and n2 are strictly less than b, and the sum fits within a 64-bit integer."

realWorld:
  - title: "Hardware ALU Adder Circuits"
    description: "Modeling ripple-carry and carry-lookahead adder circuits operating on binary and octal computer words in digital hardware."
  - title: "Arbitrary-Precision BCD Arithmetic"
    description: "Performing exact binary-coded decimal (BCD) addition in financial trading engines without IEEE 754 floating-point rounding errors."
  - title: "Cryptographic Big-Integer Arithmetic"
    description: "Adding high-radix limbs across large integer structures during elliptic curve point additions."
---
<!-- All rights reserved to CSRGO DSA -->

Given two numbers `n1` and `n2` represented in base `b` ($2 \le b \le 10$), add the two numbers and return their sum represented in the same base `b`.
