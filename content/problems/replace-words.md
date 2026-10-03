---
title: "Replace Words"
date: 2026-10-01T02:35:00+05:30
difficulty: "Medium"
topics: ["Trie", "Strings", "Hashing"]
companies: ["Amazon", "Google", "Facebook"]
learningPath: "Mastery"

starterCode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/mastery/ReplaceWords/dsa"
engineeringMode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/mastery/ReplaceWords/engineering"

hints:
  - "Store all dictionary roots in a Trie data structure, marking the terminal node of each root."
  - "For each word in the sentence, traverse the Trie character by character; replace the word with the shortest prefix that matches a dictionary root."

youtubeId: ""

solutionUrl: "/solutions/replace-words-solution/"

timeComplexity: "O(D * L + S)"
spaceComplexity: "O(D * L)"

examples:
  - input: "dictionary = [\"cat\", \"bat\", \"rat\"], sentence = \"the cattle was rattled by the battery\""
    output: "\"the cat was rat by the bat\""
    explanation: "The word \"cattle\" is replaced with root \"cat\", \"rattled\" with \"rat\", and \"battery\" with \"bat\"."
  - input: "dictionary = [\"a\", \"b\", \"c\"], sentence = \"aadsfasf absbs bbab cadsfafs\""
    output: "\"a a b c\""
    explanation: "Each word has a single-character root present in the dictionary, so each is replaced by its matching shortest root."

constraints:
  - "1 <= dictionary.length <= 1000"
  - "1 <= dictionary[i].length <= 100"
  - "1 <= sentence.length <= 10^5"
  - "dictionary[i] and sentence consist only of lowercase English letters and spaces."

realWorld:
  - title: "Search Query Stemming"
    description: "Normalizing user search queries by mapping inflected words and derivatives to canonical root terms."
  - title: "Automated Content Moderation"
    description: "Detecting and masking variations of prohibited words by replacing derivatives with root terms in text feeds."
  - title: "Domain Name Squatting Detection"
    description: "Extracting trademark roots from obfuscated domain URLs to flag unauthorized brand impersonation."
weight: 96
---
<!-- All rights reserved to CSRGO DSA -->

In English, we have what we call a **root**, which can be followed by some other word to form another longer word &mdash; let's call this word a **derivative**. For example, when the root `"help"` is followed by the word `"ful"`, we can form the derivative `"helpful"`.

Given a dictionary consisting of many roots and a sentence consisting of words separated by spaces, replace all the derivatives in the sentence with the root forming it. If a derivative can be replaced by more than one root, replace it with the root that has the **shortest length**.

Return *the sentence after the replacement*.
