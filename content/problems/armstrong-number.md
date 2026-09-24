---
title: "Armstrong Number"
date: 2026-04-11T15:50:27+05:30
difficulty: "Easy"
topics: ["Mathematics", "Number Theory"]
companies: ["TCS", "Infosys", "Wipro"]
learningPath: "Basic"

starterCode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/basic/ArmstrongNumber/dsa"
engineeringMode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/basic/ArmstrongNumber/engineering"

hints:
  - "First, count the total number of digits in the given integer."
  - "Iterate through the digits, calculate each digit raised to the power of the total digit count, and sum them up."

youtubeId: ""

solutionUrl: "/solutions/armstrong-number-solution/"

timeComplexity: "O(log10(n))"
spaceComplexity: "O(1)"

examples:
  - input: "n = 153"
    output: "true"
    explanation: "153 has 3 digits. 1³ + 5³ + 3³ = 1 + 125 + 27 = 153."
  - input: "n = 123"
    output: "false"
    explanation: "123 has 3 digits. 1³ + 2³ + 3³ = 1 + 8 + 27 = 36, which is not equal to 123."

constraints:
  - "0 <= n <= 10^9"
  - "The input is a positive integer or zero."
  - "Expected time complexity is proportional to the number of digits."

realWorld:
  - title: "Verification Systems"
    description: "Using digit-based properties as a simple checksum for validating identification numbers in legacy systems."
  - title: "Educational Games"
    description: "Creating number-based puzzles for teaching elementary number theory and arithmetic power operations."
  - title: "Hardware Testing"
    description: "Using predictable non-linear arithmetic sequences to test the accuracy of Floating Point Units (FPUs) in processors."
---

<!-- All rights reserved to CSRGO DSA -->

An Armstrong number is a number that is equal to the sum of its own digits each raised to the power of the number of digits. For example, `153` is an Armstrong number because $1^3 + 5^3 + 3^3 = 153$. 

Given a non-negative integer `n`, determine if it is an Armstrong number.
