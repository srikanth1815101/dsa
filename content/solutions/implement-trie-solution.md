---
title: "Implement Trie - Solution"
problemUrl: "/problems/implement-trie/"
---
<!-- All rights reserved to CSRGO DSA -->

## Explanation

A Trie node contains an array of 26 child references (one for each lowercase letter 'a'-'z') and a boolean flag `isEndOfWord`.

1. **Insert**: Traverse character by character from the root. If a child node for the current character does not exist, instantiate it. Mark the last node's `isEndOfWord` as `true`.
2. **Search**: Traverse character by character. If any character link is null, return `false`. Return `true` only if the final node has `isEndOfWord == true`.
3. **StartsWith**: Traverse character by character. If all characters exist, return `true` regardless of whether `isEndOfWord` is set.

### Step-by-Step Algorithm:
1. Define a helper `Node` class containing an array of 26 child references and a boolean `isEnd`.
2. Initialize the root `Node`.
3. Count the number of queries (`search` and `startsWith`) to allocate the boolean results array.
4. Iterate through operations: execute insertions by creating missing child links, and execute search/startsWith queries storing results.
5. Return the boolean results array.

## Code

```java
static class Node {
    Node[] children = new Node[26];
    boolean isEnd = false;
}

public static boolean[] solve(String[] operations, String[] words) {
    Node root = new Node();
    int queryCount = 0;
    for (int i = 0; i < operations.length; i = i + 1) {
        if (operations[i].equals("search") || operations[i].equals("startsWith")) {
            queryCount = queryCount + 1;
        }
    }

    boolean[] result = new boolean[queryCount];
    int resIdx = 0;

    for (int i = 0; i < operations.length; i = i + 1) {
        String op = operations[i];
        String word = words[i];

        if (op.equals("insert")) {
            Node curr = root;
            for (int j = 0; j < word.length(); j = j + 1) {
                int c = word.charAt(j) - 'a';
                if (curr.children[c] == null) {
                    curr.children[c] = new Node();
                }
                curr = curr.children[c];
            }
            curr.isEnd = true;
        } else if (op.equals("search")) {
            Node curr = root;
            boolean found = true;
            for (int j = 0; j < word.length(); j = j + 1) {
                int c = word.charAt(j) - 'a';
                if (curr.children[c] == null) {
                    found = false;
                    break;
                }
                curr = curr.children[c];
            }
            result[resIdx] = found && curr.isEnd;
            resIdx = resIdx + 1;
        } else if (op.equals("startsWith")) {
            Node curr = root;
            boolean found = true;
            for (int j = 0; j < word.length(); j = j + 1) {
                int c = word.charAt(j) - 'a';
                if (curr.children[c] == null) {
                    found = false;
                    break;
                }
                curr = curr.children[c];
            }
            result[resIdx] = found;
            resIdx = resIdx + 1;
        }
    }

    return result;
}
```
