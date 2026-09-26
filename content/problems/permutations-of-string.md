---
title: "Permutations of String"
date: 2026-09-26T19:50:00+05:30
difficulty: "Medium"
topics: ["Strings", "Backtracking", "Recursion"]
companies: ["Microsoft", "Amazon", "Google"]
learningPath: "Basic"

starterCode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/basic/PermutationsOfString/dsa"
engineeringMode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/basic/PermutationsOfString/engineering"

hints:
  - "Sort the character array first to generate permutations in lexicographical order and easily identify duplicate characters."
  - "Use a backtracking recursive helper with a boolean array used[] to track selected characters. If chars[i] == chars[i - 1] and !used[i - 1], skip it to avoid duplicate permutations."

youtubeId: ""

solutionUrl: "/solutions/permutations-of-string-solution/"

timeComplexity: "O(n * n!)"
spaceComplexity: "O(n)"

examples:
  - input: "s = \"abc\""
    output: "[\"abc\", \"acb\", \"bac\", \"bca\", \"cab\", \"cba\"]"
    explanation: "All 3! = 6 unique permutations of 'abc' in lexicographical order."
  - input: "s = \"aab\""
    output: "[\"aab\", \"aba\", \"baa\"]"
    explanation: "Permutations of string with duplicate characters."

constraints:
  - "1 <= s.length() <= 8"
  - "s consists of lowercase English letters"

realWorld:
  - title: "Brute-Force Keyword Cryptanalysis"
    description: "Generating exhaustive character permutations for keyword substitution ciphers and enigma rotor decryption."
  - title: "Robotic Assembly Order Optimization"
    description: "Evaluating combinatorial component placement orders in pick-and-place manufacturing robotics."
  - title: "DNA Oligonucleotide Fragment Reassembly"
    description: "Generating candidate fragment orderings during short-read bioinformatic sequence reassembly."
---
<!-- All rights reserved to CSRGO DSA -->

Given a string `s`, return a list of all **unique permutations** of the string in **lexicographical order**.

Each character in `s` must be used according to its original frequency in the string.
