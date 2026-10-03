---
title: "Implement Trie"
date: 2026-10-01T02:31:00+05:30
difficulty: "Medium"
topics: ["Trie", "Strings", "Design"]
companies: ["Amazon", "Google", "Facebook"]
learningPath: "Mastery"

starterCode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/mastery/ImplementTrie/dsa"
engineeringMode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/mastery/ImplementTrie/engineering"

hints:
  - "Represent each node in the Trie with an array or map of 26 children references and a boolean isEndOfWord flag."
  - "For search, all characters must match and isEndOfWord must be true; for startsWith, only prefix characters must match."

youtubeId: ""

solutionUrl: "/solutions/implement-trie-solution/"

timeComplexity: "O(L) per operation"
spaceComplexity: "O(N * L)"

examples:
  - input: "operations = [\"insert\", \"search\", \"search\", \"startsWith\", \"insert\", \"search\"], words = [\"apple\", \"apple\", \"app\", \"app\", \"app\", \"app\"]"
    output: "[true, false, true, true]"
    explanation: "Search apple returns true. Search app returns false before insertion and true after insertion."
  - input: "operations = [\"insert\", \"startsWith\"], words = [\"hello\", \"hell\"]"
    output: "[true]"
    explanation: "The prefix 'hell' exists in the word 'hello'."

constraints:
  - "1 <= operations.length <= 10^4"
  - "1 <= words[i].length <= 2000"
  - "words[i] consists of only lowercase English letters."
  - "operations contains only 'insert', 'search', and 'startsWith'."

realWorld:
  - title: "Search Engine Query Autocompletion"
    description: "Indexing billions of popular web search queries for instant prefix match suggestions in search boxes."
  - title: "Mobile Keyboard Predictive Typing"
    description: "Storing dictionary vocabulary in compact tree structures on smartphones for next-character probability lookup."
  - title: "Network IP Router Subnet Routing"
    description: "Matching longest prefixes in routing lookup tables for fast packet forwarding."
weight: 92
---
<!-- All rights reserved to CSRGO DSA -->

A **trie** (pronounced as "try") or **prefix tree** is a tree data structure used to efficiently store and retrieve keys in a dataset of strings.

Implement the `solve` function that processes a sequence of `operations` (`"insert"`, `"search"`, `"startsWith"`) with corresponding `words`, and returns a boolean array containing the results of all query operations (`search` and `startsWith`).
