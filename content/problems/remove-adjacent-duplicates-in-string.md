---
title: "Remove Adjacent Duplicates in String"
date: 2026-10-01T01:24:00+05:30
difficulty: "Easy"
topics: ["Strings", "Stack"]
companies: ["Amazon", "Google", "Facebook"]
learningPath: "Mastery"

starterCode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/mastery/RemoveAdjacentDuplicatesInString/dsa"
engineeringMode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/mastery/RemoveAdjacentDuplicatesInString/engineering"

hints:
  - "Use a stack or StringBuilder to inspect the most recently added character."
  - "If the incoming character matches the top of the stack, pop it; otherwise push it."

youtubeId: ""

solutionUrl: "/solutions/remove-adjacent-duplicates-in-string-solution/"

timeComplexity: "O(n)"
spaceComplexity: "O(n)"

examples:
  - input: "s = \"abbaca\""
    output: "** `\"ca\"` **"
    explanation: "** For example, in `\"abbaca\"` we could remove `\"bb\"` since the letters are adjacent and equal, and this is the only possible move. The result of this move is `\"aaca\"`, of which only `\"aa\"` is possible, so the final string is `\"ca\"`."
  - input: "s = \"azxxzy\""
    output: "** `\"ay\"` **"
    explanation: "** First remove `\"xx\"` resulting in `\"azzy\"`. Then remove `\"zz\"` resulting in `\"ay\"`."

constraints:
  - "1 <= s.length <= 10^5"
  - "s consists of only lowercase English letters."
  - "Duplicates are removed in adjacent matching pairs until no further removals are possible."
realWorld:
  - title: "Text Editor Backspace Simulation"
    description: "Resolving cancel and rollback key codes in real-time text input processing pipelines."
  - title: "Syntax Token Cancellation"
    description: "Collapsing matching operator tokens in recursive compiler expression parsers."
  - title: "Genomic Sequence Filtering"
    description: "Cleaning tandem duplicate base pairs in DNA gene alignment workflows."
weight: 25
---
<!-- All rights reserved to CSRGO DSA -->

You are given a string `s` consisting of lowercase English letters. A duplicate removal consists of choosing two adjacent and equal letters and removing them.

We repeatedly make duplicate removals on `s` until we no longer can.

Return the final string after all such duplicate removals have been made. It can be proven that the final answer is unique.
