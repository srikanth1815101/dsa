---
title: "Keypad Combinations"
date: 2026-09-26T20:51:00+05:30
difficulty: "Medium"
topics: ["Strings", "Backtracking", "Recursion"]
companies: ["Amazon", "Google", "Facebook"]
learningPath: "Basic"

starterCode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/basic/KeypadCombinations/dsa"
engineeringMode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/basic/KeypadCombinations/engineering"

hints:
  - "Map each digit 0-9 to its corresponding keypad code string."
  - "Separate first digit character ch from remainder string rem, recursively solve rem, then combine each character of codes[ch] with each subsequence."

youtubeId: ""

solutionUrl: "/solutions/keypad-combinations-solution/"

timeComplexity: "O(4^n)"
spaceComplexity: "O(4^n)"

examples:
  - input: "str = \"78\""
    output: "[\"tv\", \"tw\", \"tx\", \"uv\", \"uw\", \"ux\"]"
    explanation: "7 maps to 'tu' and 8 maps to 'vwx'."
  - input: "str = \"\""
    output: "[\"\"]"
    explanation: "Empty input yields a single empty string combination."

constraints:
  - "0 <= str.length() <= 8"
  - "str consists of digits '0' through '9'."

realWorld:
  - title: "T9 Predictive Text Input"
    description: "Decoding multi-tap keypad number sequences into word dictionary candidates."
  - title: "Vanity Phone Number Resolvers"
    description: "Generating mnemonic words and phrases corresponding to business phone digits."
  - title: "DTMF Telephony Menu Navigation"
    description: "Mapping keypad tone input combinations to interactive voice response routes."
---
<!-- All rights reserved to CSRGO DSA -->

Given a string `str` of digits from `0` to `9`, find and return all possible keypad letter combinations.

The mapping of digits to characters is:
- `0`: `".;"`
- `1`: `"abc"`
- `2`: `"def"`
- `3`: `"ghi"`
- `4`: `"jkl"`
- `5`: `"mno"`
- `6`: `"pqrs"`
- `7`: `"tu"`
- `8`: `"vwx"`
- `9`: `"yz"`
