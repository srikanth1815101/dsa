---
title: "Difference of Two Arrays"
date: 2026-09-25T22:13:00+05:30
difficulty: "Easy"
topics: ["Arrays", "Mathematics"]
companies: ["Amazon", "Microsoft", "TCS"]
learningPath: "Basic"

starterCode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/basic/DifferenceOfTwoArrays/dsa"
engineeringMode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/basic/DifferenceOfTwoArrays/engineering"

hints:
  - "Traverse both arrays from right to left (least significant to most significant digit) while maintaining a borrow variable."
  - "If the current digit with borrow is smaller than the subtracting digit, add 10 to it and set borrow = 1 for the next column; strip any leading zeros from the final result."

youtubeId: ""

solutionUrl: "/solutions/difference-of-two-arrays-solution/"

timeComplexity: "O(a1.length)"
spaceComplexity: "O(a1.length)"

examples:
  - input: "a1 = [2, 9, 2, 3, 2, 2], a2 = [9, 3, 4, 6, 8]"
    output: "[1, 9, 8, 8, 5, 4]"
    explanation: "292322 - 93468 = 198854, represented as digits [1, 9, 8, 8, 5, 4]."
  - input: "a1 = [1, 0, 0, 0], a2 = [9, 9, 9]"
    output: "[1]"
    explanation: "1000 - 999 = 1. The leading zeros are stripped, resulting in [1]."

constraints:
  - "1 <= a1.length, a2.length <= 10^5"
  - "0 <= a1[i], a2[i] <= 9"
  - "Array a1 represents a number greater than or equal to the number represented by a2 (a1 >= a2)."

realWorld:
  - title: "Arbitrary-Precision BigInteger Subtraction"
    description: "Executing precise subtraction between large multi-limb integers in cryptography without floating-point precision loss."
  - title: "Ledger Balance Debit Operations"
    description: "Performing debit subtractions on arbitrary-length decimal account balances in transactional financial banking systems."
  - title: "High-Resolution Nanosecond Timestamp Deltas"
    description: "Computing differences between massive timestamp digit arrays in distributed tracing systems across data center clusters."
---
<!-- All rights reserved to CSRGO DSA -->

Given two arrays of decimal digits `a1` and `a2` representing two non-negative integers where `a1 >= a2`, calculate the difference `a1 - a2` and return the resulting number as an array of digits without leading zeros (except for the number `0` which is represented as `[0]`).

### Input Format
- An integer array `a1` representing the digits of the minuend (larger number).
- An integer array `a2` representing the digits of the subtrahend (smaller number).

### Output Format
- An integer array representing the digits of the difference `a1 - a2`.
