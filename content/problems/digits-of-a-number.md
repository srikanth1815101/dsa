---
title: "Digits of a Number"
date: 2026-04-11T15:05:58+05:30
difficulty: "Easy"
topics: ["Mathematics", "Number Theory"]
companies: ["TCS", "Wipro", "Cognizant"]
path: "Basic"

starterCode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/basic/DigitsOfANumber/dsa"
engineeringMode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/basic/DigitsOfANumber/engineering"

hints:
  - "To extract digits from the end, use the modulo operator (%)."
  - "To process digits from left to right, you first need to count the total digits or use a stack/recursion."

youtubeId: ""

solutionUrl: "/solutions/digits-of-a-number-solution/"

timeComplexity: "O(log10(n))"
spaceComplexity: "O(log10(n))"

examples:
  - input: "n = 754"
    output: "[7, 5, 4]"
    explanation: "The digits of 754 from left to right are 7, 5, and 4."
  - input: "n = 1002"
    output: "[1, 0, 0, 2]"
    explanation: "The digits of 1002 from left to right are 1, 0, 0, and 2."

constraints:
  - "0 <= n <= 10^9"
  - "Output should be the list of digits in the order they appear."
  - "Expected time complexity is proportional to the number of digits."

realWorld:
  - title: "Encryption"
    description: "Breaking down large numeric keys into individual components for complex cryptographic transformations."
  - title: "Barcode Readers"
    description: "Processing each digit of a scanned barcode to validate checksums or look up product details."
  - title: "Digital Displays"
    description: "Splitting a number into its constituents to light up specific segments on a 7-segment display."
---

<!-- All rights reserved to CSRGO DSA -->

Given a non-negative integer `n`, your task is to return a list of its individual digits in the order they appear (from left to right). For example, if the input is `1234`, the output should be `[1, 2, 3, 4]`.
