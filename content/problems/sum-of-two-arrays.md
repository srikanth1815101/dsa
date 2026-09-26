---
title: "Sum of Two Arrays"
date: 2026-09-25T22:09:00+05:30
difficulty: "Easy"
topics: ["Arrays", "Mathematics"]
companies: ["Amazon", "Microsoft", "Adobe"]
learningPath: "Basic"

starterCode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/basic/SumOfTwoArrays/dsa"
engineeringMode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/basic/SumOfTwoArrays/engineering"

hints:
  - "Start column addition from the rightmost elements (least significant digits) of both arrays and move toward the left."
  - "Maintain a carry variable; if a carry remains after exhausting all digits, the output array will have size max(n1, n2) + 1 with the carry at index 0."

youtubeId: ""

solutionUrl: "/solutions/sum-of-two-arrays-solution/"

timeComplexity: "O(max(n1, n2))"
spaceComplexity: "O(max(n1, n2))"

examples:
  - input: "a1 = [9, 3, 4, 6, 8], a2 = [1, 9, 8, 8, 5, 4]"
    output: "[2, 9, 2, 3, 2, 2]"
    explanation: "Adding 93468 + 198854 equals 292322, represented as [2, 9, 2, 3, 2, 2]."
  - input: "a1 = [9, 9, 9], a2 = [1]"
    output: "[1, 0, 0, 0]"
    explanation: "Adding 999 + 1 yields 1000. The carry ripples to the front, producing an array of length 4."

constraints:
  - "1 <= a1.length, a2.length <= 10^5"
  - "0 <= a1[i], a2[i] <= 9"
  - "Both arrays represent non-negative decimal digits without extraneous leading zeros (except single zero [0])."

realWorld:
  - title: "Arbitrary-Precision BigInteger Addition"
    description: "Implementing exact multi-limb addition for cryptographic libraries (like java.math.BigInteger) when numbers exceed 64-bit integer registers."
  - title: "Financial Ledger Reconciliation"
    description: "Computing cumulative transaction sums across high-precision monetary accounts without decimal floating-point inaccuracy."
  - title: "Large Astronomical Dataset Calculations"
    description: "Summing extremely large integer coordinate vectors in astrophysic simulations across distributed clusters."
---
<!-- All rights reserved to CSRGO DSA -->

Given two arrays of integers `a1` and `a2`, where each element represents a single decimal digit ($0 \le digit \le 9$) of a number, calculate the sum of the two numbers and return the result as a new array of digits.
