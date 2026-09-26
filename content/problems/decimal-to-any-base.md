---
title: "Decimal to Any Base"
date: 2026-09-25T21:44:00+05:30
difficulty: "Easy"
topics: ["Mathematics", "Recursion"]
companies: ["Amazon", "Microsoft", "Adobe"]
learningPath: "Basic"

starterCode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/basic/DecimalToAnyBase/dsa"
engineeringMode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/basic/DecimalToAnyBase/engineering"

hints:
  - "Repeatedly divide n by the target base b and record the remainder (n % b)."
  - "Construct the converted number by multiplying each remainder by increasing powers of 10."

youtubeId: ""

solutionUrl: "/solutions/decimal-to-any-base-solution/"

timeComplexity: "O(log_b n)"
spaceComplexity: "O(1)"

examples:
  - input: "n = 634, b = 8"
    output: "1172"
    explanation: "634 / 8 = 79 (rem 2), 79 / 8 = 9 (rem 7), 9 / 8 = 1 (rem 1), 1 / 8 = 0 (rem 1). Reading remainders in reverse order yields 1172."
  - input: "n = 57, b = 2"
    output: "111001"
    explanation: "Successive divisions of 57 by 2 produce remainders 1, 0, 0, 1, 1, 1 from right to left, resulting in 111001."

constraints:
  - "0 <= n <= 10^9"
  - "2 <= b <= 10"
  - "The resulting representation fits within standard 64-bit signed integer limits."

realWorld:
  - title: "Base-N Data Encoding"
    description: "Converting decimal numeric streams into compact custom radix representations for bandwidth-efficient transmission protocols."
  - title: "Hardware Register Configuration"
    description: "Mapping decimal values into specific base-2 or octal register masks for low-level peripheral drivers and embedded firmware."
  - title: "Database Sharding & Partition Key Hashing"
    description: "Transforming numerical record keys into varied numerical bases to uniformly distribute rows across storage clusters."
---
<!-- All rights reserved to CSRGO DSA -->

Given a non-negative decimal integer `n` and a target base `b` ($2 \le b \le 10$), convert the decimal number `n` into its equivalent numerical representation in base `b` and return the resulting number.
