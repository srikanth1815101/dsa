---
title: "Longest Palindromic Substring"
date: 2026-09-26T19:54:00+05:30
difficulty: "Medium"
topics: ["Strings", "Dynamic Programming", "Two Pointers"]
companies: ["Amazon", "Microsoft", "Google"]
learningPath: "Basic"

starterCode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/basic/LongestPalindromicSubstring/dsa"
engineeringMode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/basic/LongestPalindromicSubstring/engineering"

hints:
  - "Every palindrome mirrors around its center. A string of length n has 2n - 1 possible centers (n single-character odd centers and n - 1 between-character even centers)."
  - "Expand outward from each center while characters on both sides match. Maintain the longest observed start index and length."

youtubeId: ""

solutionUrl: "/solutions/longest-palindromic-substring-solution/"

timeComplexity: "O(n^2)"
spaceComplexity: "O(1)"

examples:
  - input: "s = \"babad\""
    output: "\"bab\""
    explanation: "\"aba\" is also a valid answer."
  - input: "s = \"cbbd\""
    output: "\"bb\""
    explanation: "\"bb\" is the longest palindromic substring."

constraints:
  - "1 <= s.length() <= 1000"
  - "s consists of digits and English letters"

realWorld:
  - title: "DNA Inverted Repeat Regulation"
    description: "Detecting the longest contiguous palindromic regulatory sequences in DNA strands that form hairpin junctions for transcription factor binding."
  - title: "Acoustic Symmetric Burst Recognition"
    description: "Isolating maximal time-symmetric reflection waveforms in ultrasonic sonar echolocation."
  - title: "Textual Symmetry Analysis"
    description: "Detecting maximal palindromic patterns in natural language processing and computational literature studies."
---
<!-- All rights reserved to CSRGO DSA -->

Given a string `s`, return the **longest palindromic substring** in `s`.

A string is called **palindromic** if it reads the same backward as forward.
