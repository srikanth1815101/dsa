---
title: "Word Ladder - Solution"
date: 2026-10-03T11:20:00+05:30
problemUrl: "/problems/word-ladder/"
weight: 41
---
<!-- All rights reserved to CSRGO DSA -->

## Explanation

We want to find the shortest path from `beginWord` to `endWord` in an unweighted graph where an edge exists between two words if and only if they differ by exactly one character and both belong to the dictionary `wordList`.



Because edge weights are uniform (each transformation step counts as 1 transition), Breadth-First Search (BFS) is guaranteed to find the shortest path to `endWord`:
1. Store all dictionary words in a hash set `wordSet` for $O(1)$ lookups. If `endWord` is not in `wordSet`, no valid sequence exists; return `0`.
2. Start BFS with `beginWord` at level `1`.
3. To find all adjacent words efficiently, instead of comparing against every other word in `wordSet` ($O(N \cdot L)$), generate all possible 1-character variations by substituting each position with `'a'` through `'z'` ($O(26 \cdot L)$).
4. If a candidate word is present in `wordSet`:
   - If it matches `endWord`, return `level + 1`.
   - Otherwise, remove it from `wordSet` (serving as visited tracking) and enqueue it for the next level.
5. If the queue is exhausted without reaching `endWord`, return `0`.

### Step-by-Step Algorithm:
1. Insert all words of `wordList` into a `HashSet<String> dict`.
2. If `!dict.contains(endWord)`, return 0.
3. Initialize a queue `Queue<String> queue` and enqueue `beginWord`.
4. Initialize `level = 1`.
5. While `!queue.isEmpty()`:
   - Let `size = queue.size()`.
   - For `s` from `0` to `size - 1`:
     - Dequeue word `curr`.
     - Convert `curr` to char array `chars`.
     - For each position `i` from `0` to `chars.length - 1`:
       - Store original character `orig = chars[i]`.
       - For `c = 'a'` to `'z'`:
         - If `c == orig`, continue.
         - Replace `chars[i] = c`.
         - Form string `nextWord = new String(chars)`.
         - If `nextWord.equals(endWord)`:
           - Return `level + 1`.
         - If `dict.contains(nextWord)`:
           - `dict.remove(nextWord)`.
           - Enqueue `nextWord`.
       - Restore `chars[i] = orig`.
   - Increment `level = level + 1`.
6. Return 0.

## Code

```java
public static int solve(String beginWord, String endWord, String[] wordList) {
    if (wordList == null || wordList.length == 0) {
        return 0;
    }

    Set<String> dict = new HashSet<>();
    Collections.addAll(dict, wordList);

    if (!dict.contains(endWord)) {
        return 0;
    }

    Queue<String> queue = new ArrayDeque<>();
    queue.offer(beginWord);
    dict.remove(beginWord);

    int level = 1;

    while (!queue.isEmpty()) {
        int size = queue.size();
        for (int s = 0; s < size; s = s + 1) {
            String curr = queue.poll();
            char[] chars = curr.toCharArray();

            for (int i = 0; i < chars.length; i = i + 1) {
                char orig = chars[i];
                for (char c = 'a'; c <= 'z'; c = (char) (c + 1)) {
                    if (c == orig) {
                        continue;
                    }
                    chars[i] = c;
                    String nextWord = new String(chars);

                    if (nextWord.equals(endWord)) {
                        return level + 1;
                    }

                    if (dict.contains(nextWord)) {
                        dict.remove(nextWord);
                        queue.offer(nextWord);
                    }
                }
                chars[i] = orig;
            }
        }
        level = level + 1;
    }

    return 0;
}
```
