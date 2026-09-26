---
title: "Remove Primes from ArrayList"
date: 2026-09-26T19:49:00+05:30
difficulty: "Easy"
topics: ["Arrays", "Mathematics", "Number Theory"]
companies: ["Amazon", "TCS", "Infosys"]
learningPath: "Basic"

starterCode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/basic/RemovePrimesFromArrayList/dsa"
engineeringMode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/basic/RemovePrimesFromArrayList/engineering"

hints:
  - "When deleting elements from an ArrayList in-place, iterating from left to right causes element shifting and index skipping bugs."
  - "Iterate in reverse from list.size() - 1 down to 0. Test each element with an O(sqrt(n)) primality test and remove primes with list.remove(i)."

youtubeId: ""

solutionUrl: "/solutions/remove-primes-from-arraylist-solution/"

timeComplexity: "O(n * sqrt(maxVal))"
spaceComplexity: "O(1)"

examples:
  - input: "list = [3, 12, 13, 15]"
    output: "[12, 15]"
    explanation: "3 and 13 are prime numbers and are removed, leaving [12, 15]."
  - input: "list = [7, 18, 3, 11, 2, 5, 23]"
    output: "[18]"
    explanation: "Only 18 is composite; all other values are prime numbers."

constraints:
  - "1 <= list.size() <= 10^5"
  - "1 <= list.get(i) <= 10^7"

realWorld:
  - title: "Cryptographic Prime Pool Curation"
    description: "Filtering prime seeds and composite candidates during cryptographic RSA keypair generation."
  - title: "Safe In-Place Collection Mutation"
    description: "Safely removing elements from dynamic memory lists without index shifting bugs in transaction processing queues."
  - title: "Acoustic Prime Harmonic Elimination"
    description: "Filtering prime vibrational harmonic frequencies in digital audio equalizer DSP pipelines."
---
<!-- All rights reserved to CSRGO DSA -->

Given an `ArrayList<Integer>` of positive integers, remove all **prime numbers** from it in-place and return the modified list.

A prime number is a natural number strictly greater than `1` that has no positive divisors other than `1` and itself.
