---
title: "Longest Word in Dictionary - Solution"
problemUrl: "/problems/longest-word-in-dictionary/"
---
<!-- All rights reserved to CSRGO DSA -->

## Explanation

1. Sort the words array: shorter words come first; for equal lengths, lexicographically larger words come first so smaller words overwrite later (or standard sort with appropriate condition).
2. Insert words into a hash set. A word `w` is valid if `w.length() == 1` or its prefix `w.substring(0, w.length() - 1)` is already in the set of buildable words.
3. Whenever a valid buildable word is found, add it to the buildable set and compare its length with the current best result.
4. Update the longest word when the current word is longer, or lexicographically smaller when lengths are equal.

### Step-by-Step Algorithm:
1. Sort `words` lexicographically.
2. Initialize a `HashSet<String> built` to track buildable prefixes, and `String longest = ""`.
3. Iterate through each `word` in sorted order: check if `word.length() == 1` or `built.contains(word.substring(0, word.length() - 1))`.
4. If valid, add `word` to `built`. If `word.length() > longest.length()`, update `longest = word`.
5. Return `longest`.

## Code

```java
public static String solve(String[] words) {
    Arrays.sort(words);
    Set<String> built = new HashSet<>();
    String longest = "";

    for (int i = 0; i < words.length; i = i + 1) {
        String w = words[i];
        if (w.length() == 1 || built.contains(w.substring(0, w.length() - 1))) {
            built.add(w);
            if (w.length() > longest.length()) {
                longest = w;
            }
        }
    }

    return longest;
}
```
