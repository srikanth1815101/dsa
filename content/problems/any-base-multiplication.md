---
title: "Any Base Multiplication"
date: 2026-09-25T21:57:00+05:30
difficulty: "Easy"
topics: ["Mathematics", "Arrays"]
companies: ["Goldman Sachs", "Google", "Amazon"]
learningPath: "Basic"

starterCode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/basic/AnyBaseMultiplication/dsa"
engineeringMode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/basic/AnyBaseMultiplication/engineering"

hints:
  - "Break multiplication into two subproblems: multiply n1 by a single digit of n2, and add the shifted partial products using base-b addition."
  - "For each single-digit multiplication, track carry = prod / b and rem = prod % b."

youtubeId: ""

solutionUrl: "/solutions/any-base-multiplication-solution/"

timeComplexity: "O(log10 n1 * log10 n2)"
spaceComplexity: "O(1)"

examples:
  - input: "n1 = 2156, n2 = 74, b = 8"
    output: "204710"
    explanation: "In base 8: 2156 * 4 = 10670 and 2156 * 7 = 17402. Shifting and adding in base 8: 10670 + 174020 = 204710."
  - input: "n1 = 101, n2 = 11, b = 2"
    output: "1111"
    explanation: "In binary: 5 * 3 = 15, which corresponds to 101 * 11 = 1111."

constraints:
  - "0 <= n1, n2 <= 10^9"
  - "2 <= b <= 10"
  - "All digits in n1 and n2 are strictly less than b, and the product fits within a 64-bit integer."

realWorld:
  - title: "Hardware Multiplier Arrays (Booth & Wallace Trees)"
    description: "Designing parallel partial-product generation and carry-save accumulation stages for high-speed arithmetic logic units."
  - title: "Cryptographic Modular Arithmetic"
    description: "Multiplying multi-precision big-integer coordinates in Montgomery and Karatsuba algorithms for RSA and ECC cipher primitives."
  - title: "High-Frequency Trading Exact Math"
    description: "Multiplying currency conversion radices without floating-point IEEE-754 precision inaccuracies in ultra-low-latency financial matchers."
---
<!-- All rights reserved to CSRGO DSA -->

Given two numbers `n1` and `n2` represented in base `b` ($2 \le b \le 10$), multiply the two numbers and return their product represented in the same base `b`.

### Input Format
- A 64-bit integer `n1` representing the first number in base `b`.
- A 64-bit integer `n2` representing the second number in base `b`.
- An integer `b` representing the base ($2 \le b \le 10$).

### Output Format
- A 64-bit integer (`long`) representing the product of `n1` and `n2` in base `b`.
