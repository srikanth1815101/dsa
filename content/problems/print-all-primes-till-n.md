---
title: "Print All Primes Till N"
date: 2026-03-25T16:39:41+05:30
difficulty: "Easy"
topics: ["Mathematics", "Number Theory", "Sieve of Eratosthenes"]
companies: ["TCS", "Infosys", "Cognizant"]
path: "Basic"

starterCode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/basic/PrintAllPrimesTillN/dsa"
engineeringMode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/basic/PrintAllPrimesTillN/engineering"

hints:
  - "Try evaluating every number from 2 up to N to see if it has any divisors."
  - "You only need to check for divisors up to the square root of a number to determine if it is prime."

youtubeId: ""

solutionUrl: "/solutions/print-all-primes-till-n-solution/"

timeComplexity: "O(N * sqrt(N))"
spaceComplexity: "O(1) auxiliary"

examples: # Exactly 2 examples
  - input: "10"
    output: "[2, 3, 5, 7]"
    explanation: "There are four prime numbers up to 10: 2, 3, 5, and 7."
  - input: "20"
    output: "[2, 3, 5, 7, 11, 13, 17, 19]"
    explanation: "These are the prime numbers between 2 and 20."

constraints: # Exactly 3 or 4
  - "1 <= n <= 10^5"
  - "N is an integer"
  - "Outputs should be returned sequentially."

realWorld: # Exactly 3 real world
  - title: "Cryptography"
    description: "Prime numbers form the basis of many modern public-key encryption algorithms, such as RSA, relying on the difficulty of factoring large numbers."
  - title: "Hash Functions"
    description: "Using prime numbers in hash table sizing and logic reduces the rate of collisions effectively."
  - title: "Random Number Generation"
    description: "Certain pseudo-random number generators utilize properties of primes to ensure uniform distribution of random values."
---
<!-- All rights reserved to CSRGO DSA -->

Given an integer `N`, write a program to return a list of all prime numbers from 2 up to `N`. A prime number is a natural number greater than 1 that is only divisible by 1 and itself.
