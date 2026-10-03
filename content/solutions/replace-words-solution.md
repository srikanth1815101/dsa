---
title: "Replace Words - Solution"
problemUrl: "/problems/replace-words/"
---
<!-- All rights reserved to CSRGO DSA -->

## Explanation

To replace each word with its shortest matching root efficiently, we insert all dictionary roots into a Trie. Each node in the Trie represents a character and contains a flag indicating if a root terminates at that node.

For each word in the sentence, we search through the Trie character by character. The first time we encounter a node marked as the end of a root, we have found the shortest valid root, so we return that prefix. If we reach a null child before finding any root, no replacement exists and we keep the original word.

Finally, we join the processed tokens with single spaces to construct the output sentence.

### Step-by-Step Algorithm:
1. Construct a Trie and insert each root word from `dictionary` into the Trie.
2. Split the input `sentence` into individual words using single spaces as delimiters.
3. For each word, traverse the Trie from the root along its characters.
4. If a Trie node with `isEnd == true` is reached, immediately take the prefix accumulated so far as the replacement.
5. If a character does not exist in the Trie or end of word is reached without finding a root, retain the original word.
6. Join all processed words with a single space delimiter and return the resulting string.

## Code

```java
public static String solve(List<String> dictionary, String sentence) {
    TrieNode root = new TrieNode();
    for (int i = 0; i < dictionary.size(); i = i + 1) {
        String word = dictionary.get(i);
        TrieNode curr = root;
        for (int j = 0; j < word.length(); j = j + 1) {
            int idx = word.charAt(j) - 'a';
            if (curr.children[idx] == null) {
                curr.children[idx] = new TrieNode();
            }
            curr = curr.children[idx];
        }
        curr.isEnd = true;
    }

    String[] words = sentence.split(" ");
    StringBuilder result = new StringBuilder();

    for (int i = 0; i < words.length; i = i + 1) {
        if (i > 0) {
            result.append(" ");
        }
        result.append(findRoot(root, words[i]));
    }

    return result.toString();
}

private static String findRoot(TrieNode root, String word) {
    TrieNode curr = root;
    StringBuilder prefix = new StringBuilder();
    for (int i = 0; i < word.length(); i = i + 1) {
        char ch = word.charAt(i);
        int idx = ch - 'a';
        if (curr.children[idx] == null) {
            return word;
        }
        curr = curr.children[idx];
        prefix.append(ch);
        if (curr.isEnd) {
            return prefix.toString();
        }
    }
    return word;
}

static class TrieNode {
    TrieNode[] children = new TrieNode[26];
    boolean isEnd;
}
```
