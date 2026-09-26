---
title: "Toggle Case"
date: 2026-09-26T19:47:00+05:30
difficulty: "Easy"
topics: ["Strings", "Mathematics"]
companies: ["TCS", "Infosys", "Amazon"]
learningPath: "Basic"

starterCode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/basic/ToggleCase/dsa"
engineeringMode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/basic/ToggleCase/engineering"

hints:
  - "Iterate through each character of the string and inspect its ASCII value or use Character.isUpperCase and Character.isLowerCase."
  - "Convert uppercase letters ('A' through 'Z') to lowercase by adding 32 (or (char)(ch - 'A' + 'a')), and convert lowercase letters to uppercase by subtracting 32."

youtubeId: ""

solutionUrl: "/solutions/toggle-case-solution/"

timeComplexity: "O(n)"
spaceComplexity: "O(n)"

examples:
  - input: "s = \"pepCODing\""
    output: "\"PEPcodING\""
    explanation: "Lowercase 'pep' becomes 'PEP', uppercase 'COD' becomes 'cod', and mixed 'ing' becomes 'ING'."
  - input: "s = \"Hello World!\""
    output: "\"hELLO wORLD!\""
    explanation: "'H' and 'W' become lowercase, while 'ello' and 'orld' become uppercase. Punctuation and spaces remain unchanged."

constraints:
  - "1 <= s.length() <= 10^5"
  - "s consists of English letters, digits, symbols, and whitespace"

realWorld:
  - title: "Inadvertent Caps Lock Correction"
    description: "Inverting casing on typed text when an application detects a user accidentally typed with Caps Lock enabled."
  - title: "Parser Case-Sensitivity Fuzzing"
    description: "Generating inverted casing token variants to test syntax analyzers and web form validation rules for case-insensitivity."
  - title: "OCR Document Text Normalization"
    description: "Flipping case classifications on scanned historical document transcriptions when optical character models misidentify font weights."
---
<!-- All rights reserved to CSRGO DSA -->

Given a string `s`, toggle the case of every character:
- Convert all uppercase characters (`'A'` through `'Z'`) into their lowercase equivalents (`'a'` through `'z'`).
- Convert all lowercase characters (`'a'` through `'z'`) into their uppercase equivalents (`'A'` through `'Z'`).
- Characters that are not English letters (digits, spaces, symbols) should remain unchanged.

Return the toggled string.
