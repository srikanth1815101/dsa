---
title: "Print Encodings"
date: 2026-09-26T20:56:00+05:30
difficulty: "Medium"
topics: ["Strings", "Recursion", "Dynamic Programming"]
companies: ["Google", "Amazon", "Microsoft"]
learningPath: "Basic"

starterCode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/basic/PrintEncodings/dsa"
engineeringMode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/basic/PrintEncodings/engineering"

hints:
  - "Digits '1' through '26' map to characters 'a' through 'z'. Digit '0' cannot be decoded on its own."
  - "At each step, consider either a single digit or a valid two-digit number <= 26."

youtubeId: ""

solutionUrl: "/solutions/print-encodings-solution/"

timeComplexity: "O(2^n)"
spaceComplexity: "O(n)"

examples:
  - input: "str = \"123\""
    output: "[\"abc\", \"aw\", \"lc\"]"
    explanation: "1-2-3 is 'abc', 1-23 is 'aw', and 12-3 is 'lc'."
  - input: "str = \"103\""
    output: "[\"jc\"]"
    explanation: "'10' maps to 'j' and '3' maps to 'c'. Single '0' cannot be decoded."

constraints:
  - "0 <= str.length() <= 10"
  - "str consists of digits '0' through '9'."

realWorld:
  - title: "Telecom PDU Decoding"
    description: "Parsing packed numeric BCD (binary-coded decimal) protocol fields into ASCII character sets."
  - title: "Secret Cipher Message Reconstruction"
    description: "Deciphering continuous unsegmented numeric code telegrams into plain English sentences."
  - title: "Voice-to-Text Phonetic Disambiguation"
    description: "Resolving ambiguous digit-cluster phoneme boundaries into candidate transcription tokens."
---
<!-- All rights reserved to CSRGO DSA -->

Given a string of digits `str`, decode it into all possible English letter strings according to the mapping:
- `'1'` $\rightarrow$ `'a'`, `'2'` $\rightarrow$ `'b'`, ..., `'26'` $\rightarrow$ `'z'`
- Any digit sequence starting with `'0'` has no corresponding character and is invalid.

Return a list of strings containing all valid decoded letter sequences.
