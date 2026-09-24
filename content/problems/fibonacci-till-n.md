---
title: "Fibonacci Till N"
date: 2026-03-25T18:03:35+05:30
difficulty: "Easy"
topics: ["Mathematics", "Recursion", "Dynamic Programming"]
companies: ["Amazon", "Microsoft", "Adobe"]
learningPath: "Basic"

starterCode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/basic/FibonacciTillN/dsa"
engineeringMode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/basic/FibonacciTillN/engineering"

hints:
  - "Keep track of the last two numbers you generated to calculate the next one."
  - "Start with the base cases of 0 and 1 before starting your loop."

youtubeId: ""

solutionUrl: "/solutions/fibonacci-till-n-solution/"

timeComplexity: "O(n)"
spaceComplexity: "O(n)"

examples:
  - input: "5"
    output: "[0, 1, 1, 2, 3]"
    explanation: "The first 5 numbers of the Fibonacci sequence are generated starting from 0 and 1."
  - input: "8"
    output: "[0, 1, 1, 2, 3, 5, 8, 13]"
    explanation: "Summing the last two known numbers continuously yields the sequence up to length 8."

constraints:
  - "1 <= n <= 40"
  - "n is a positive integer"
  - "The sequence elements will fit safely within standard 32-bit signed integers"

realWorld:
  - title: "Financial Modeling"
    description: "Fibonacci retracement levels are widely used by traders and algorithmic trading systems to identify potential support and resistance zones."
  - title: "Optimization Algorithms"
    description: "The Fibonacci Search Technique leverages properties of the sequence to isolate the maximum or minimum of a unimodal function more efficiently."
  - title: "Design Aesthetics"
    description: "The golden ratio derived from Fibonacci numbers is utilized in web design layouts and image compression techniques."
---
<!-- All rights reserved to CSRGO DSA -->

Given an integer `n`, write a program to return a list of the first `n` numbers of the Fibonacci sequence.

The Fibonacci sequence is a mathematical series in which every number after the first two is the sum of the two preceding ones. By convention, the sequence typically starts with `0` and `1`.
