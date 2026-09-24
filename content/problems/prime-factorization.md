---
title: "Prime Factorization"
date: 2026-04-11T15:38:53+05:30
difficulty: "Easy"
topics: ["Mathematics", "Number Theory"]
companies: ["Amazon", "Microsoft", "TCS"]
learningPath: "Basic"

starterCode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/basic/PrimeFactorization/dsa"
engineeringMode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/basic/PrimeFactorization/engineering"

hints:
  - "Start dividing the number by the smallest prime (2) and keep dividing as long as it's divisible."
  - "The process is complete when the number becomes 1. Any remaining value greater than 1 after checking all divisors up to sqrt(n) is also a prime factor."

youtubeId: ""

solutionUrl: "/solutions/prime-factorization-solution/"

timeComplexity: "O(sqrt(n))"
spaceComplexity: "O(log(n))"

examples:
  - input: "n = 36"
    output: "[2, 2, 3, 3]"
    explanation: "36 = 2 * 2 * 3 * 3. These are the prime factors in ascending order."
  - input: "n = 46"
    output: "[2, 23]"
    explanation: "46 = 2 * 23. Both 2 and 23 are prime factors."

constraints:
  - "2 <= n <= 10^9"
  - "Factors should be returned in non-decreasing order."
  - "The input will always be a valid integer greater than 1."

realWorld:
  - title: "Encryption"
    description: "The security of RSA encryption depends on the extreme difficulty of prime factorization for very large numbers."
  - title: "Distributed Systems"
    description: "Assigning sub-tasks to nodes by calculating divisors to ensure balanced load distribution across a cluster."
  - title: "Signal Analysis"
    description: "Decomposing complex cyclic patterns into fundamental periodic components using mathematical factorization techniques."
---

<!-- All rights reserved to CSRGO DSA -->

Given a positive integer `n`, your task is to find all of its prime factors. A prime factor is a prime number that divides the given integer exactly, leaving no remainder. The factors should be returned in non-decreasing order.
