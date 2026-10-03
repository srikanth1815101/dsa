---
title: "Power of a Number"
date: 2026-04-11T15:54:19+05:30
difficulty: "Easy"
topics: ["Mathematics", "Recursion"]
companies: ["Amazon", "Google", "Microsoft"]
learningPath: "Basic"

starterCode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/basic/PowerOfANumber/dsa"
engineeringMode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/basic/PowerOfANumber/engineering"

hints:
  - "The power of a number can be defined as multiplying x by itself n times."
  - "Think about the recursive relation: x^n = x * x^(n-1). What is the base case when n is 0?"

youtubeId: ""

solutionUrl: "/solutions/power-of-a-number-solution/"

timeComplexity: "O(n)"
spaceComplexity: "O(n) for recursion stack"

examples:
  - input: "x = 2, n = 5"
    output: "32"
    explanation: "2 raised to the power of 5 is 2 * 2 * 2 * 2 * 2 = 32."
  - input: "x = 5, n = 0"
    output: "1"
    explanation: "Any number raised to the power of 0 is 1."

constraints:
  - "x is an integer, -100 <= x <= 100"
  - "0 <= n <= 30"
  - "The result will fit within a 64-bit signed integer."

realWorld:
  - title: "Financial Interest"
    description: "Calculating compound interest where the principal amount is multiplied by the growth rate raised to the number of periods."
  - title: "Probability"
    description: "Determining the total number of outcomes in a multi-stage event, such as flipping a coin n times (2^n outcomes)."
  - title: "Computer Graphics"
    description: "Adjusting color intensities or brightness using gamma correction, which involves raising pixel values to a certain power factor."
---
<!-- All rights reserved to CSRGO DSA -->

Given two integers `x` and `n`, your task is to calculate the value of `x` raised to the power `n` ($x^n$) using recursion.
