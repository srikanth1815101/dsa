---
title: "Reverse a Number"
date: 2026-04-11T15:09:23+05:30
difficulty: "Easy"
topics: ["Mathematics", "Number Theory"]
companies: ["Amazon", "Microsoft", "TCS"]
learningPath: "Basic"

starterCode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/basic/ReverseANumber/dsa"
engineeringMode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/basic/ReverseANumber/engineering"

hints:
  - "To extract digits from the end, use the remainder operator (%) with 10."
  - "Construct the reversed number by multiplying your current result by 10 and adding the new digit."

youtubeId: ""

solutionUrl: "/solutions/reverse-a-number-solution/"

timeComplexity: "O(log10(n))"
spaceComplexity: "O(1)"

examples:
  - input: "n = 1234"
    output: "4321"
    explanation: "Reversing the digits of 1234 gives 4321."
  - input: "n = 500"
    output: "5"
    explanation: "Reversing 500 results in 005, which is mathematically represented as 5."

constraints:
  - "0 <= n <= 10^9"
  - "The reversed number should not overflow a standard 32-bit integer for the given input range."
  - "Trailing zeros in the input will become leading zeros (which are naturally removed in integer representation)."

realWorld:
  - title: "Data Integrity"
    description: "Used in simple palindromic checks to verify data consistency in noise-heavy communication channels."
  - title: "Financial Auditing"
    description: "Detecting transposition errors where two adjacent digits are swapped or written in reverse order during data entry."
  - title: "Graphics Processing"
    description: "Applying spatial transformations to coordinates or pixel indices that require bit or digit-level manipulation."
---
<!-- All rights reserved to CSRGO DSA -->

Given a non-negative integer `n`, your task is to reverse its digits and return the resulting number. For example, if the input is `1234`, the output should be `4321`. If the input is `500`, the output should be `5`.
