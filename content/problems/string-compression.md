---
title: "String Compression"
date: 2026-09-26T19:46:00+05:30
difficulty: "Medium"
topics: ["Strings", "Two Pointers"]
companies: ["Amazon", "Microsoft", "Facebook"]
learningPath: "Basic"

starterCode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/basic/StringCompression/dsa"
engineeringMode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/basic/StringCompression/engineering"

hints:
  - "Scan the string using two pointers: maintain the starting index of the current repeating character group and expand until a different character is found."
  - "Compute the run length (count). Append the character to the result, and if count > 1, append the count as well."

youtubeId: ""

solutionUrl: "/solutions/string-compression-solution/"

timeComplexity: "O(n)"
spaceComplexity: "O(n)"

examples:
  - input: "s = \"aaabbccdee\""
    output: "\"a3b2c2de2\""
    explanation: "'a' repeats 3 times -> a3, 'b' repeats 2 times -> b2, 'c' repeats 2 times -> c2, 'd' appears once -> d, 'e' repeats 2 times -> e2."
  - input: "s = \"abc\""
    output: "\"abc\""
    explanation: "Every character appears once, so no frequency numbers are appended."

constraints:
  - "1 <= s.length() <= 10^5"
  - "s consists of English letters, digits, or symbols"

realWorld:
  - title: "Bitmap Run-Length Encoding (RLE)"
    description: "Compressing runs of identical monochrome pixel values across image rows in standard graphic formats like TIFF and BMP."
  - title: "Genomic Homopolymer Compression"
    description: "Compressing consecutive identical nucleotide bases (such as poly-A tails) to optimize bioinformatic sequence indexing."
  - title: "Satellite Low-Bandwidth Telemetry Compression"
    description: "Minimizing radio transmission byte volume by encoding repeated identical telemetry sensor state flags."
---
<!-- All rights reserved to CSRGO DSA -->

Given a string `s`, compress it using **Run-Length Encoding (RLE)** according to the following rules:
- For every consecutive group of identical characters:
  - Append the character.
  - If the character group has length strictly greater than `1`, append the count of occurrences.
  - If the group has length `1`, do not append any number.

Return the compressed string.
