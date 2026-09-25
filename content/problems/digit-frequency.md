---
title: "Digit Frequency"
date: 2026-09-25T21:38:00+05:30
difficulty: "Easy"
topics: ["Mathematics", "Hashing"]
companies: ["Amazon", "Microsoft", "TCS"]
learningPath: "Basic"

starterCode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/basic/DigitFrequency/dsa"
engineeringMode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/basic/DigitFrequency/engineering"

hints:
  - "Extract each digit using the modulo operator (n % 10) and reduce n by integer division (n / 10)."
  - "Consider the special edge case where n = 0 and d = 0."

youtubeId: ""

solutionUrl: "/solutions/digit-frequency-solution/"

timeComplexity: "O(log10 n)"
spaceComplexity: "O(1)"

examples:
  - input: "n = 994543234, d = 4"
    output: "3"
    explanation: "The digit 4 appears three times in 994543234 (at positions 3, 5, and 9)."
  - input: "n = 100050, d = 0"
    output: "4"
    explanation: "The digit 0 appears four times in 100050."

constraints:
  - "0 <= n <= 10^18"
  - "0 <= d <= 9"
  - "d is a single decimal digit."

realWorld:
  - title: "Financial Card Checksum Validation"
    description: "Counting digit occurrences and parity groups when evaluating credit card BIN codes and Luhn algorithm checksum metrics."
  - title: "Telemetry Error Code Analysis"
    description: "Analyzing digit frequency in telemetry sensor status identifiers to categorize severity classes across streaming IoT devices."
  - title: "Telephone Prefix Clustering"
    description: "Determining repeated digit blocks in telecom routing tables and subscriber phone numbering plan allocation."
---
<!-- All rights reserved to CSRGO DSA -->

Given a non-negative integer `n` and a single decimal digit `d` (from `0` to `9`), count and return how many times the digit `d` occurs in `n`.

### Input Format
- A 64-bit integer `n`.
- A single decimal digit `d` ($0 \le d \le 9$).

### Output Format
- An integer representing the total count of times `d` appears in `n`.
