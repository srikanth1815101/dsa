---
title: "Sum of Two Integers (No + / -)"
date: 2026-10-01T02:15:00+05:30
difficulty: "Medium"
topics: ["Mathematics", "Bit Manipulation"]
companies: ["Amazon", "Google", "Facebook"]
learningPath: "Mastery"

starterCode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/mastery/SumOfTwoIntegers/dsa"
engineeringMode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/mastery/SumOfTwoIntegers/engineering"

hints:
  - "Use XOR (a ^ b) to compute the sum without carries."
  - "Use AND shifted left ((a & b) << 1) to compute the carry; repeat until the carry becomes zero."

youtubeId: ""

solutionUrl: "/solutions/sum-of-two-integers-solution/"

timeComplexity: "O(1)"
spaceComplexity: "O(1)"

examples:
  - input: "a = 1`, `b = 2"
    output: "** `3`"
    explanation: "Result is ** `3`."
  - input: "a = 2`, `b = 3"
    output: "** `5`"
    explanation: "Result is ** `5`."

constraints:
  - "-1000 <= a, b <= 1000"
  - "You must not use the operators + and -."
  - "The sum is guaranteed to fit in a 32-bit signed integer."
realWorld:
  - title: "CPU Half-Adder Circuit Simulation"
    description: "Emulating low-level silicon logic gate addition in hardware description languages (Verilog/VHDL)."
  - title: "Quantum Computing Adder Gates"
    description: "Constructing arithmetic adder circuits using reversible quantum logic gates without classical operators."
  - title: "Bit-Level Compiler Code Generation"
    description: "Synthesizing addition on specialized bit-serial processors lacking standard integer arithmetic units."
weight: 76
---
<!-- All rights reserved to CSRGO DSA -->

Given two integers `a` and `b`, return the **sum of the two integers** without using the operators `+` and `-`.
