---
title: "Highest Frequency Character"
date: 2026-09-27T11:20:00+05:30
difficulty: "Easy"
topics: ["Strings", "Hashing", "Heap"]
companies: ["Amazon", "Microsoft", "Adobe"]
learningPath: "Advanced"

starterCode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/advanced/HighestFrequencyCharacter/dsa"
engineeringMode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/advanced/HighestFrequencyCharacter/engineering"

hints:
  - "Count the frequency of each character using a hash map or direct array indexing."
  - "Iterate through the string to update counts and maintain the character with the maximum occurrence count."

youtubeId: ""

solutionUrl: "/solutions/highest-frequency-character-solution/"

timeComplexity: "O(n)"
spaceComplexity: "O(1)"

examples:
  - input: "str = \"zmszeqxqq\""
    output: "'q'"
    explanation: "Character 'q' appears 3 times, which is more frequent than any other character."
  - input: "str = \"abccba\""
    output: "'a'"
    explanation: "Characters 'a', 'b', and 'c' all appear 2 times; 'a' is the first to achieve this maximum frequency."

constraints:
  - "1 <= str.length() <= 10^5"
  - "str consists of printable ASCII characters."

realWorld:
  - title: "Log Stream Anomaly Characterization"
    description: "Detecting the dominant error code character flag in streaming server telemetry lines."
  - title: "Huffman Encoding Frequency Analysis"
    description: "Computing symbol occurrence frequency histograms to construct optimal prefix compression codes."
  - title: "DNA Sequence Motif Dominance"
    description: "Identifying the predominant nucleotide base across aligned genomic sequence readouts."
---
<!-- All rights reserved to CSRGO DSA -->

Given a string `str`, find and return the character that appears with the maximum frequency in the string.

If multiple characters have the same highest frequency, return the character that appears earliest in the string among them.
