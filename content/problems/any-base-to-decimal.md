---
title: "Any Base to Decimal"
date: 2026-09-25T21:47:00+05:30
difficulty: "Easy"
topics: ["Mathematics", "Recursion"]
companies: ["Amazon", "Microsoft", "Adobe"]
learningPath: "Basic"

starterCode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/basic/AnyBaseToDecimal/dsa"
engineeringMode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/basic/AnyBaseToDecimal/engineering"

hints:
  - "Extract each base-b digit from n using decimal modulus (n % 10)."
  - "Multiply each extracted digit by its corresponding positional weight (b^0, b^1, b^2, ...) and sum them up."

youtubeId: ""

solutionUrl: "/solutions/any-base-to-decimal-solution/"

timeComplexity: "O(log10 n)"
spaceComplexity: "O(1)"

examples:
  - input: "n = 1172, b = 8"
    output: "634"
    explanation: "(2 * 8^0) + (7 * 8^1) + (1 * 8^2) + (1 * 8^3) = 2 + 56 + 64 + 512 = 634."
  - input: "n = 111001, b = 2"
    output: "57"
    explanation: "(1 * 2^0) + (0 * 2^1) + (0 * 2^2) + (1 * 2^3) + (1 * 2^4) + (1 * 2^5) = 1 + 8 + 16 + 32 = 57."

constraints:
  - "0 <= n <= 10^18"
  - "2 <= b <= 10"
  - "Every digit in n is strictly less than b, and the decimal equivalent fits in a 32-bit signed integer."

realWorld:
  - title: "Radix Protocol Decoding"
    description: "Parsing octal and binary flag registers transmitted over industrial fieldbuses into standard decimal system metrics."
  - title: "POSIX File Permissions Parsing"
    description: "Interpreting 3-digit octal permission masks (such as 755 or 644) into numeric bitflag decimals inside operating system kernels."
  - title: "Sensor Telemetry Normalization"
    description: "Translating custom base encoded sensor values received from remote embedded microcontrollers into decimal telemetry dashboards."
---
<!-- All rights reserved to CSRGO DSA -->

Given a number `n` represented in base `b` ($2 \le b \le 10$), convert it into its decimal (base 10) integer equivalent.

### Input Format
- A 64-bit integer `n` whose decimal digits represent the digits in base `b`.
- An integer `b` ($2 \le b \le 10$) representing the source base.

### Output Format
- An integer representing the decimal (base 10) value of `n`.
