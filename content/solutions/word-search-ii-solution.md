---
title: "Word Search II - Solution"
problemUrl: "/problems/word-search-ii/"
---
<!-- All rights reserved to CSRGO DSA -->

## Explanation

1. Insert all search words into a prefix tree (Trie). Store the complete word string in the terminal node for O(1) collection.
2. From each cell `(r, c)` on the board, initiate a DFS.
3. In DFS, check if the current character matches a child of the current Trie node. If not, backtrack immediately.
4. Mark the visited cell with `#` to avoid reusing it in the same word path, recursively explore 4 neighbors, and restore the original character on return.
5. De-duplicate results and optionally prune matched words from the Trie to minimize redundant visits.

### Step-by-Step Algorithm:
1. Construct a Trie containing all strings from `words`.
2. Initialize a results list.
3. Iterate through every row `r` and column `c` of the matrix.
4. Execute DFS from `(r, c)` traversing matching Trie nodes.
5. When a Trie node contains a word, add it to results and set the word field to null to avoid duplicates.
6. Sort and return the collected words list.

## Code

```java
static class TrieNode {
    TrieNode[] children = new TrieNode[26];
    String word = null;
}

public static List<String> solve(char[][] board, String[] words) {
    TrieNode root = new TrieNode();
    for (int i = 0; i < words.length; i = i + 1) {
        TrieNode curr = root;
        String w = words[i];
        for (int j = 0; j < w.length(); j = j + 1) {
            int c = w.charAt(j) - 'a';
            if (curr.children[c] == null) {
                curr.children[c] = new TrieNode();
            }
            curr = curr.children[c];
        }
        curr.word = w;
    }

    List<String> result = new ArrayList<>();
    int m = board.length;
    int n = board[0].length;

    for (int r = 0; r < m; r = r + 1) {
        for (int c = 0; c < n; c = c + 1) {
            dfs(board, r, c, root, result);
        }
    }

    Collections.sort(result);
    return result;
}

private static void dfs(char[][] board, int r, int c, TrieNode node, List<String> result) {
    if (r < 0 || r >= board.length || c < 0 || c >= board[0].length || board[r][c] == '#') {
        return;
    }

    char ch = board[r][c];
    int idx = ch - 'a';
    if (node.children[idx] == null) {
        return;
    }

    node = node.children[idx];
    if (node.word != null) {
        result.add(node.word);
        node.word = null;
    }

    board[r][c] = '#';
    dfs(board, r - 1, c, node, result);
    dfs(board, r + 1, c, node, result);
    dfs(board, r, c - 1, node, result);
    dfs(board, r, c + 1, node, result);
    board[r][c] = ch;
}
```
