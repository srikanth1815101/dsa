---
title: "Is Number Prime"
date: 2026-03-23T19:30:14+05:30
difficulty: "Easy"
topics: ["Mathematics", "Number Theory"]
companies: ["TCS", "Infosys", "Wipro"]
learningPath: "Basic"

starterCode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/basic/IsNumberPrime/dsa"
engineeringMode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/basic/IsNumberPrime/engineering"

hints:
  - "Check if the number is divisible by any integer from 2 to the square root of n."
  - "Numbers less than or equal to 1 are not prime."

youtubeId: ""

solutionUrl: "/solutions/is-number-prime-solution/"

timeComplexity: "O(sqrt(n))"
spaceComplexity: "O(1)"

examples:
  - input: "n = 7"
    output: "true"
    explanation: "7 is only divisible by 1 and itself, so it is a prime number."
  - input: "n = 10"
    output: "false"
    explanation: "10 is divisible by 2 and 5, so it is not a prime number."

constraints:
  - "1 <= n <= 10^9"
  - "n is a positive integer"
  - "Time limit: 1 second"

realWorld:
  - title: "Data Cryptography"
    description: "RSA encryption relies on the properties of large prime numbers for securing communications."
  - title: "Hashing Algorithms"
    description: "Prime numbers are used as table sizes in hash tables to minimize collisions."
  - title: "Resource Scheduling"
    description: "Used in generating unique IDs and certain scheduling patterns to avoid synchronization issues."
---
<!-- All rights reserved to CSRGO DSA -->

A prime number is a natural number greater than 1 that has no positive divisors other than 1 and itself.

Given a positive integer `n`, determine if it is a prime number.
