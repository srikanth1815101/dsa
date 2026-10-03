---
title: "Divide Two Integers"
date: 2026-10-01T02:14:00+05:30
difficulty: "Medium"
topics: ["Mathematics", "Bit Manipulation"]
companies: ["Amazon", "Google", "Facebook"]
learningPath: "Mastery"

starterCode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/mastery/DivideTwoIntegers/dsa"
engineeringMode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/mastery/DivideTwoIntegers/engineering"

hints:
  - "Use bit shifting to subtract powers of the divisor (divisor << i) from the dividend."
  - "Handle 32-bit integer overflow edge case: Integer.MIN_VALUE / -1 overflows to Integer.MAX_VALUE."

youtubeId: ""

solutionUrl: "/solutions/divide-two-integers-solution/"

timeComplexity: "O(log^2 n)"
spaceComplexity: "O(1)"

examples:
  - input: "dividend = 10`, `divisor = 3"
    output: "** `3` **"
    explanation: "** `10 / 3 = 3.33333..` which is truncated to `3`."
  - input: "dividend = 7`, `divisor = -3"
    output: "** `-2` **"
    explanation: "** `7 / -3 = -2.33333..` which is truncated to `-2`."

constraints:
  - "-2^31 <= dividend, divisor <= 2^31 - 1"
  - "divisor != 0"
  - "If the quotient overflows 32-bit signed integer range, return 2^31 - 1."
realWorld:
  - title: "ALU Hardware Integer Division Synthesis"
    description: "Synthesizing shift-and-subtract division circuits in FPGA logic without hardware multiplier units."
  - title: "Embedded Fixed-Point Math Kernels"
    description: "Executing high-speed integer division in ultra-low-power IoT chips lacking floating-point hardware."
  - title: "Cryptographic BigNum Modulo Division"
    description: "Performing large-word division in asymmetric RSA key generation without native multi-precision hardware operators."
weight: 75
---
<!-- All rights reserved to CSRGO DSA -->

Given two integers `dividend` and `divisor`, divide two integers without using multiplication, division, and mod operator.

The integer division should truncate toward zero, which means losing its fractional part. For example, `8.345` would be truncated to `8`, and `-2.7335` would be truncated to `-2`.

Return the **quotient** after dividing `dividend` by `divisor`.

**Note:** Assume we are dealing with an environment that could only store integers within the **32-bit signed integer range**: `[-2^31, 2^31 - 1]`. For this problem, if the quotient is **strictly greater than** `2^31 - 1`, then return `2^31 - 1`, and if the quotient is **strictly less than** `-2^31`, then return `-2^31`.
