---
title: "Count Digits"
date: 2026-04-11T14:57:29+05:30
difficulty: "Easy"
topics: ["Mathematics", "Number Theory"]
companies: ["TCS", "Amazon", "Infosys"]
learningPath: "Basic"

starterCode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/basic/CountDigits/dsa"
engineeringMode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/basic/CountDigits/engineering"

hints:
  - "Think about how you can isolate the last digit of a number using mathematical operators."
  - "Repeatedly dividing a number by 10 will eventually reduce it to zero while giving you the digit count."

youtubeId: ""

solutionUrl: "/solutions/count-digits-solution/"

timeComplexity: "O(log10(n))"
spaceComplexity: "O(1)"

examples:
  - input: "n = 12345"
    output: "5"
    explanation: "The number 12345 has five digits: 1, 2, 3, 4, and 5."
  - input: "n = 0"
    output: "1"
    explanation: "The number 0 is considered to have one digit."

constraints:
  - "0 <= n <= 10^9"
  - "The input will be a valid integer."
  - "Expected time complexity is logarithmic with respect to the value of n."

realWorld:
  - title: "Data Parsing"
    description: "Determining the length of numerical identifiers in database records to ensure they meet format specifications."
  - title: "Financial Systems"
    description: "Validating the number of digits in credit card numbers or bank account identifiers during entry."
  - title: "UI Layouts"
    description: "Calculating the space required to display a score or a counter in a mobile application interface."
---
<!-- All rights reserved to CSRGO DSA -->

Given a whole number `n`, your task is to determine the total number of digits it contains. For instance, if the input is `7542`, the output should be `4`. If the input is `0`, the output should be `1`.
