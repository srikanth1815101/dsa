---
title: "GCD and LCM"
date: 2026-04-11T15:26:41+05:30
difficulty: "Easy"
topics: ["Mathematics", "Number Theory", "Recursion"]
companies: ["Amazon", "Google", "Adobe"]
learningPath: "Basic"

starterCode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/basic/GCDAndLCM/dsa"
engineeringMode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/basic/GCDAndLCM/engineering"

hints:
  - "The Greatest Common Divisor (GCD) can be efficiently found using the Euclidean Algorithm (long division method)."
  - "The Least Common Multiple (LCM) is related to GCD by the formula: (n1 * n2) = GCD * LCM."

youtubeId: ""

solutionUrl: "/solutions/gcd-and-lcm-solution/"

timeComplexity: "O(log(min(n1, n2)))"
spaceComplexity: "O(1)"

examples:
  - input: "n1 = 24, n2 = 36"
    output: "GCD: 12, LCM: 72"
    explanation: "The largest number that divides both 24 and 36 is 12. Their LCM is (24*36)/12 = 72."
  - input: "n1 = 15, n2 = 20"
    output: "GCD: 5, LCM: 60"
    explanation: "GCD of 15 and 20 is 5. LCM is (15*20)/5 = 60."

constraints:
  - "1 <= n1, n2 <= 10^9"
  - "Output should be returned as a pair or list containing both GCD and LCM."
  - "The product of n1 and n2 might exceed the range of a 32-bit integer; use long for intermediate LCM calculations."

realWorld:
  - title: "Resource Synchronization"
    description: "Determining the common interval for two independent periodic tasks to synchronize their execution in real-time systems."
  - title: "Cryptographic Keys"
    description: "Used in RSA algorithms to ensure certain primality and divisibility constraints are met when generating public and private keys."
  - title: "UI Responsive Grids"
    description: "Calculating the optimal dimensions for grid layouts so they can tile perfectly across multiple screen resolutions."
---

<!-- All rights reserved to CSRGO DSA -->

Given two positive integers `n1` and `n2`, your task is to find their Greatest Common Divisor (GCD) and Least Common Multiple (LCM). 

GCD is the largest positive integer that divides both numbers without leaving a remainder. LCM is the smallest positive integer that is divisible by both numbers.
