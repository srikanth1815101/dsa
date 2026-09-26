---
title: "Print Palindromic Substrings"
date: 2026-09-26T19:45:00+05:30
difficulty: "Medium"
topics: ["Strings", "Dynamic Programming", "Two Pointers"]
companies: ["Amazon", "Microsoft", "Google"]
learningPath: "Basic"

starterCode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/basic/PrintPalindromicSubstrings/dsa"
engineeringMode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/basic/PrintPalindromicSubstrings/engineering"

hints:
  - "Iterate through all possible starting indices i from 0 to n - 1 and ending indices j from i + 1 to n to generate every contiguous substring."
  - "Check whether each generated substring s.substring(i, j) reads the same forwards and backwards. If it is palindromic, append it to the result list."

youtubeId: ""

solutionUrl: "/solutions/print-palindromic-substrings-solution/"

timeComplexity: "O(n^3)"
spaceComplexity: "O(1)"

examples:
  - input: "s = \"aba\""
    output: "[\"a\", \"aba\", \"b\", \"a\"]"
    explanation: "At index 0: 'a', 'aba'. At index 1: 'b'. At index 2: 'a'."
  - input: "s = \"aaa\""
    output: "[\"a\", \"aa\", \"aaa\", \"a\", \"aa\", \"a\"]"
    explanation: "All contiguous substrings of 'aaa' are palindromic."

constraints:
  - "1 <= s.length() <= 1000"
  - "s consists of lowercase English letters"

realWorld:
  - title: "Genomic Hairpin Loop Motif Discovery"
    description: "Locating inverted symmetric palindrome sequences in RNA/DNA transcripts that fold into secondary stem-loop structures."
  - title: "Textual Symmetrical Cryptanalysis"
    description: "Scanning historical cryptographic text blocks for mirror-symmetric token sequences in cryptanalysis workflows."
  - title: "Network Transmission Mirror Parity Checking"
    description: "Identifying mirrored bit patterns in continuous telemetry streams to identify framing markers in asynchronous protocols."
---
<!-- All rights reserved to CSRGO DSA -->

Given a string `s`, find and return all **palindromic substrings** of `s`.

A string is called **palindromic** if it reads the same backward as forward.

The substrings should be returned in lexicographical generation order: outer loop iterating start index $i$ from $0$ to $n - 1$, and inner loop iterating end index $j$ from $i + 1$ to $n$.
