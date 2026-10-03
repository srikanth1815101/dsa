---
title: "Search Suggestions System"
date: 2026-10-01T02:32:00+05:30
difficulty: "Medium"
topics: ["Trie", "Strings", "Binary Search"]
companies: ["Amazon", "Google", "Microsoft"]
learningPath: "Mastery"

starterCode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/mastery/SearchSuggestionsSystem/dsa"
engineeringMode: "https://github.com/CSRGO/dsa-java/tree/main/src/main/java/com/csrgo/problems/mastery/SearchSuggestionsSystem/engineering"

hints:
  - "Sort products lexicographically first so any contiguous prefix match appears in sorted order."
  - "Use two pointers or binary search (lower_bound) to find matching product ranges as each prefix character is typed."

youtubeId: ""

solutionUrl: "/solutions/search-suggestions-system-solution/"

timeComplexity: "O(N log N + M)"
spaceComplexity: "O(N)"

examples:
  - input: "products = [\"mobile\", \"mouse\", \"moneypot\", \"monitor\", \"mousepad\"], searchWord = \"mouse\""
    output: "[[\"mobile\", \"moneypot\", \"monitor\"], [\"mobile\", \"moneypot\", \"monitor\"], [\"mouse\", \"mousepad\"], [\"mouse\", \"mousepad\"], [\"mouse\", \"mousepad\"]]"
    explanation: "After typing 'm', 'mo', 'mou', 'mous', 'mouse', up to 3 lexicographically smallest matching words are returned."
  - input: "products = [\"havana\"], searchWord = \"havana\""
    output: "[[\"havana\"], [\"havana\"], [\"havana\"], [\"havana\"], [\"havana\"], [\"havana\"]]"
    explanation: "The single product matches all progressive prefix levels."

constraints:
  - "1 <= products.length <= 1000"
  - "1 <= products[i].length <= 200"
  - "1 <= searchWord.length <= 1000"
  - "All strings consist of lowercase English letters."

realWorld:
  - title: "E-Commerce Product Search Autosuggest"
    description: "Generating instant top-3 product recommendations as shoppers type characters in an online retail catalog."
  - title: "Browser URL Address Bar Completion"
    description: "Filtering browsing history to suggest top matching website domains in real-time."
  - title: "CLI Tool Command Autocompletion"
    description: "Predicting command line subcommands and flag arguments as developers type."
weight: 93
---
<!-- All rights reserved to CSRGO DSA -->

You are given an array of strings `products` and a string `searchWord`.

Design a system that suggests at most three product names from `products` after each character of `searchWord` is typed. Suggested products should have common prefix with `searchWord`. If there are more than three products with a common prefix, return the three lexicographically minimums products.

Return a list of lists of the suggested products after each character of `searchWord` is typed.
