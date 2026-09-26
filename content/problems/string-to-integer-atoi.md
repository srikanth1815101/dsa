---
title: "String to Integer (atoi)"
date: 2026-09-26T20:37:00+05:30
difficulty: "Medium"
topics: ["Strings", "Mathematics"]
companies: ["Amazon", "Microsoft", "Facebook"]
learningPath: "Basic"

starterCode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/basic/StringToIntegerAtoi/dsa"
engineeringMode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/basic/StringToIntegerAtoi/engineering"

hints:
  - "Trim leading whitespaces first."
  - "Look for an optional sign character ('+' or '-')."
  - "Parse consecutive digits while watching for 32-bit signed integer overflow; clamp to Integer.MIN_VALUE or Integer.MAX_VALUE when exceeded."

youtubeId: ""

solutionUrl: "/solutions/string-to-integer-atoi-solution/"

timeComplexity: "O(n)"
spaceComplexity: "O(1)"

examples:
  - input: "s = \"42\""
    output: "42"
    explanation: "The parsed number is 42."
  - input: "s = \"   -42\""
    output: "-42"
    explanation: "Leading spaces are skipped and negative sign is applied."
  - input: "s = \"4193 with words\""
    output: "4193"
    explanation: "Parsing stops at the first non-digit character ' '."
  - input: "s = \"-91283472332\""
    output: "-2147483648"
    explanation: "Number is clamped to Integer.MIN_VALUE (-2^31)."

constraints:
  - "0 <= s.length() <= 200"
  - "s consists of English letters (lower-case and upper-case), digits (0-9), ' ', '+', '-', and '.'."

realWorld:
  - title: "Compiler and Interpreter Lexers"
    description: "Parsing numeric literals from source code token streams into machine registers."
  - title: "HTTP Query Parameter Parsing"
    description: "Converting URL query parameters (e.g. page numbers or resource IDs) from strings to safe integers."
  - title: "CSV and Flat-File Ingestion Engines"
    description: "Handling messy text fields with arbitrary spacing and signs during database bulk loads."
---
<!-- All rights reserved to CSRGO DSA -->

Implement the `myAtoi(string s)` function, which converts a string to a 32-bit signed integer.

The algorithm for `myAtoi(string s)` is as follows:

1. **Whitespace**: Ignore any leading whitespace (`" "`).
2. **Signedness**: Determine the sign by checking if the next character is `'-'` or `'+'`, assuming positivity if neither present.
3. **Conversion**: Read the integer by ignoring leading zeros until a non-digit character is encountered or the end of the string is reached. If no digits were read, then the integer is `0`.
4. **Rounding**: If the integer is out of the 32-bit signed integer range `[-2^31, 2^31 - 1]`, then clamp the integer so that it remains in the range. Specifically, integers less than `-2^31` should be clamped to `-2^31`, and integers greater than `2^31 - 1` should be clamped to `2^31 - 1`.

Return the integer as the final result.
