---
title: "Count ABC Subsequences"
date: 2026-09-27T20:30:00+05:30
difficulty: "Medium"
topics: ["Dynamic Programming", "Strings"]
companies: ["Amazon", "Google", "Adobe"]
learningPath: "Advanced"

starterCode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/advanced/CountABCSubsequences/dsa"
engineeringMode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/advanced/CountABCSubsequences/engineering"

hints:
  - "Maintain three state variables: count of subsequences matching a+, matching a+b+, and matching a+b+c+."
  - "When seeing 'a', new a-strings = 2*a + 1. When seeing 'b', new ab-strings = 2*ab + a. When seeing 'c', new abc-strings = 2*abc + ab."

youtubeId: ""

solutionUrl: "/solutions/count-abc-subsequences-solution/"

timeComplexity: "O(n)"
spaceComplexity: "O(1)"

examples:
  - input: "s = \"abcabc\""
    output: "7"
    explanation: "There are 7 distinct subsequences of the form a+b+c+."
  - input: "s = \"abcc\""
    output: "3"
    explanation: "The valid subsequences are \"abc\" (using first c), \"abc\" (using second c), and \"abcc\" (using both)."

constraints:
  - "1 <= s.length <= 10^5"
  - "s consists only of lowercase English letters"
  - "Result fits within standard 32-bit signed integer limits"

realWorld:
  - title: "Regular Expression Sequence Pattern Counting"
    description: "Determining match cardinality for ordered token expressions a+b+c+ across streaming text log parsers."
  - title: "Bioinformatics Motif Matching"
    description: "Counting phased nucleotide marker subsequences exhibiting progressive staged state mutations."
  - title: "Compiler Grammatical Phrase Analysis"
    description: "Quantifying valid syntax subtree interpretations under ambiguous phase-grammar rules."
---
<!-- All rights reserved to CSRGO DSA -->

Given a string `s`, find and return the number of subsequences of `s` that match the pattern $a^+ b^+ c^+$ (one or more occurrences of `'a'`, followed by one or more occurrences of `'b'`, followed by one or more occurrences of `'c'`).

Return the total count of valid subsequences.
