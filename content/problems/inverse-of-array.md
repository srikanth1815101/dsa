---
title: "Inverse of Array"
date: 2026-09-25T22:24:00+05:30
difficulty: "Easy"
topics: ["Arrays", "Mathematics"]
companies: ["Amazon", "Microsoft", "TCS"]
learningPath: "Basic"

starterCode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/basic/InverseOfArray/dsa"
engineeringMode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/basic/InverseOfArray/engineering"

hints:
  - "The inverse array maps values to their original indices: if arr[i] = v, then inv[v] = i."
  - "Create a new array of the same length n, iterate through index i from 0 to n - 1, and set inv[arr[i]] = i."

youtubeId: ""

solutionUrl: "/solutions/inverse-of-array-solution/"

timeComplexity: "O(n)"
spaceComplexity: "O(n)"

examples:
  - input: "arr = [3, 4, 1, 2, 0]"
    output: "[4, 2, 3, 0, 1]"
    explanation: "arr[0]=3 -> inv[3]=0, arr[1]=4 -> inv[4]=1, arr[2]=1 -> inv[1]=2, arr[3]=2 -> inv[2]=3, arr[4]=0 -> inv[0]=4. Thus inv = [4, 2, 3, 0, 1]."
  - input: "arr = [0, 1, 2, 3]"
    output: "[0, 1, 2, 3]"
    explanation: "Each element is already at the index matching its value, so the inverse is identical."

constraints:
  - "0 <= arr.length <= 10^5"
  - "Array elements form a valid 0-indexed permutation containing all integers from 0 to arr.length - 1 exactly once."
  - "The output array must have the same length as the input array."

realWorld:
  - title: "Inverted Index Database Architecture"
    description: "Mapping document token IDs back to document posting list locations in search engines like Lucene and Elasticsearch."
  - title: "Permutation Cipher Decryption"
    description: "Inverting transposition cipher keys to reverse shuffled byte positions back to plaintext during decryption."
  - title: "Reverse Lookup Tables in Compilers"
    description: "Inverting register allocation mappings from variable-to-register to register-to-variable during code generation."
---
<!-- All rights reserved to CSRGO DSA -->

Given an array of integers `arr` of size `n` containing a valid permutation of numbers from `0` to `n - 1`, compute and return the **inverse** of the array. The inverse of an array is defined such that if value `v` is present at index `i` in `arr`, then in the inverted array `inv`, value `i` is stored at index `v` (`inv[v] = i`).
