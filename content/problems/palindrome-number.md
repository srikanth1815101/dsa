---
title: "Palindrome Number"
date: 2026-04-11T15:52:45+05:30
difficulty: "Easy"
topics: ["Mathematics", "Two Pointers"]
companies: ["Amazon", "Microsoft", "Adobe"]
learningPath: "Basic"

starterCode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/basic/PalindromeNumber/dsa"
engineeringMode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/basic/PalindromeNumber/engineering"

hints:
  - "Try reversing the integer mathematically and compare it with the original number."
  - "Negative numbers cannot be palindromes because of the trailing minus sign when reversed."

youtubeId: ""

solutionUrl: "/solutions/palindrome-number-solution/"

timeComplexity: "O(log10(n))"
spaceComplexity: "O(1)"

examples:
  - input: "n = 121"
    output: "true"
    explanation: "121 reads as 121 from left to right and from right to left."
  - input: "n = -121"
    output: "false"
    explanation: "From left to right, it is -121. From right to left, it becomes 121-. Therefore it is not a palindrome."

constraints:
  - "-2^31 <= n <= 2^31 - 1"
  - "The input is a 32-bit signed integer."
  - "The reversal should handle potential overflows by comparing with original state early."

realWorld:
  - title: "Data Integrity"
    description: "Checking for symmetrical patterns in numeric IDs as a part of integrity validation before storage."
  - title: "Log Processing"
    description: "Filtering time-stamped sequences where the start and end tokens must match exactly for packet re-assembly."
  - title: "Genomics"
    description: "Searching for palindromic DNA sequences which are critical in identifying restricted sites for enzyme binding."
---
<!-- All rights reserved to CSRGO DSA -->

Given an integer `n`, return `true` if `n` is a palindrome, and `false` otherwise. An integer is a palindrome when it reads the same forward and backward.
