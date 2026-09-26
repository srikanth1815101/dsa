---
title: "Integer to Roman"
date: 2026-09-26T20:36:00+05:30
difficulty: "Medium"
topics: ["Strings", "Mathematics", "Greedy"]
companies: ["Amazon", "Microsoft", "Meta"]
learningPath: "Basic"

starterCode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/basic/IntegerToRoman/dsa"
engineeringMode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/basic/IntegerToRoman/engineering"

hints:
  - "Use a greedy approach: always subtract the largest possible Roman numeral value from the number."
  - "Include the subtractive forms (900: CM, 400: CD, 90: XC, 40: XL, 9: IX, 4: IV) alongside the primary symbols in decreasing order."

youtubeId: ""

solutionUrl: "/solutions/integer-to-roman-solution/"

timeComplexity: "O(1)"
spaceComplexity: "O(1)"

examples:
  - input: "num = 3"
    output: "\"III\""
    explanation: "3 is represented as 3 ones: III."
  - input: "num = 58"
    output: "\"LVIII\""
    explanation: "L = 50, V = 5, III = 3."
  - input: "num = 1994"
    output: "\"MCMXCIV\""
    explanation: "M = 1000, CM = 900, XC = 90 and IV = 4."

constraints:
  - "1 <= num <= 3999"

realWorld:
  - title: "Formal Event / Super Bowl Year Numbering"
    description: "Automated labeling of ceremonial, sporting, or academic edition milestones in Roman numeral format."
  - title: "Architectural Cornerstone Inscription Engines"
    description: "Translating contemporary calendar build dates into monumental Roman masonry inscriptions."
  - title: "Film and Copyright Registry Metadata"
    description: "Formatting movie release years according to legacy international copyright standards."
---
<!-- All rights reserved to CSRGO DSA -->

Seven different symbols represent Roman numerals with the following values:

| Symbol | Value |
|---|---|
| I | 1 |
| V | 5 |
| X | 10 |
| L | 50 |
| C | 100 |
| D | 500 |
| M | 1000 |

Roman numerals are formed by appending the conversions of decimal place values from highest to lowest. Converting 39 is 30 + 9, which is `XXX` + `IX` = `XXXIX`. Converting 246 is 200 + 40 + 6, which is `CC` + `XL` + `VI` = `CCXLVI`.

Given an integer `num`, convert it to a Roman numeral and return its string representation.
