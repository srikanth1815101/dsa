---
title: "Any Base Subtraction"
date: 2026-09-25T21:54:00+05:30
difficulty: "Easy"
topics: ["Mathematics", "Arrays"]
companies: ["Goldman Sachs", "Microsoft", "Amazon"]
learningPath: "Basic"

starterCode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/basic/AnyBaseSubtraction/dsa"
engineeringMode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/basic/AnyBaseSubtraction/engineering"

hints:
  - "Simulate column-by-column subtraction from right to left while managing a borrow state."
  - "If the current digit with borrow is smaller than the subtracting digit, add the base b to the current digit and set borrow = 1 for the next column."

youtubeId: ""

solutionUrl: "/solutions/any-base-subtraction-solution/"

timeComplexity: "O(log10 n1)"
spaceComplexity: "O(1)"

examples:
  - input: "n1 = 1212, n2 = 236, b = 8"
    output: "754"
    explanation: "In base 8: 2 - 6 requires borrow -> (2 + 8) - 6 = 4. Next: (1 - 1) - 3 requires borrow -> (0 + 8) - 3 = 5. Next: (2 - 1) - 2 requires borrow -> (1 + 8) - 2 = 7. Finally: 1 - 1 = 0. Result is 754."
  - input: "n1 = 10110, n2 = 1100, b = 2"
    output: "1010"
    explanation: "In binary: 22 - 12 = 10, which corresponds to 10110 - 1100 = 1010 in base 2."

constraints:
  - "0 <= n2 <= n1 <= 10^18"
  - "2 <= b <= 10"
  - "All digits in n1 and n2 are strictly less than b, and n1 >= n2."

realWorld:
  - title: "Hardware ALU Subtractor Circuits"
    description: "Designing full-subtractor logic and borrow propagation chains across register words in microprocessors."
  - title: "Fixed-Point Financial Ledgers"
    description: "Computing debit adjustments directly in custom-base BCD representations without floating-point precision loss."
  - title: "Cryptographic Elliptic Curve Point Subtraction"
    description: "Executing limb-wise subtraction over large finite-field coordinate representations in cryptographic accelerators."
---
<!-- All rights reserved to CSRGO DSA -->

Given two numbers `n1` and `n2` represented in base `b` ($2 \le b \le 10$) where `n1 >= n2`, subtract `n2` from `n1` and return the resulting difference in the same base `b`.
