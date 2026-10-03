---
title: "Longest Repeating Character Replacement"
date: 2026-10-01T01:13:00+05:30
difficulty: "Medium"
topics: ["Strings", "Sliding Window", "Hashing"]
companies: ["Amazon", "Google", "Facebook"]
learningPath: "Mastery"

starterCode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/mastery/LongestRepeatingCharacterReplacement/dsa"
engineeringMode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/mastery/LongestRepeatingCharacterReplacement/engineering"

hints:
  - "Maintain a sliding window [left, right] along with the frequency of the most frequent character in that window."
  - "If the number of characters to replace, (windowLength - maxFreq), exceeds k, shrink the window from the left."

youtubeId: ""

solutionUrl: "/solutions/longest-repeating-character-replacement-solution/"

timeComplexity: "O(n)"
spaceComplexity: "O(1)"

examples:
  - input: "s = \"ABAB\", k = 2"
    output: "4"
    explanation: "Replace the two 'A's with two 'B's or vice versa to obtain \"BBBB\" or \"AAAA\"."
  - input: "s = \"AABABBA\", k = 1"
    output: "4"
    explanation: "Replace the middle 'A' with 'B' to form \"AABBBBA\". The substring \"BBBB\" has length 4."

constraints:
  - "1 <= s.length <= 10^5"
  - "s consists of only uppercase English letters"
  - "0 <= k <= s.length"

realWorld:
  - title: "Signal Error-Correction Framing"
    description: "Determining the maximum continuous packet payload decodable under a forward error-correction parity budget of k."
  - title: "Genome Homopolymer Run Detection"
    description: "Locating longest contiguous uniform nucleotide segments allowing up to k sequencing read errors."
  - title: "OCR Optical Character Repair"
    description: "Finding maximal continuous glyph blocks resolvable to a uniform baseline allowing k recognized misprints."
weight: 14
---
<!-- All rights reserved to CSRGO DSA -->

You are given a string `s` and an integer `k`. You can choose any character of the string and change it to any other uppercase English character. You can perform this operation at most `k` times.

Return the length of the longest substring containing the same letter you can get after performing the above operations.
