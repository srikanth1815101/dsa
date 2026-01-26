---
title: "Word Ladder - Solution"
problemUrl: "/problems/word-ladder/"
---

## Explanation

This is a **shortest path problem**, best solved with **BFS**. We treat each word as a node and connect words that differ by exactly one letter.

**Algorithm:**
1. Add all words to a set for O(1) lookup
2. Start BFS from beginWord
3. For each word, try replacing each character with 'a'-'z'
4. If the new word is in the set, add it to the queue and remove from set
5. Track the level (path length); return when we reach endWord

## Code

```java
class Solution {
    public int ladderLength(String beginWord, String endWord, List<String> wordList) {
        Set<String> wordSet = new HashSet<>(wordList);
        if (!wordSet.contains(endWord)) return 0;
        
        Queue<String> queue = new LinkedList<>();
        queue.offer(beginWord);
        int level = 1;
        
        while (!queue.isEmpty()) {
            int size = queue.size();
            for (int i = 0; i < size; i++) {
                String word = queue.poll();
                char[] chars = word.toCharArray();
                
                for (int j = 0; j < chars.length; j++) {
                    char original = chars[j];
                    for (char c = 'a'; c <= 'z'; c++) {
                        chars[j] = c;
                        String newWord = new String(chars);
                        
                        if (newWord.equals(endWord)) return level + 1;
                        
                        if (wordSet.contains(newWord)) {
                            wordSet.remove(newWord);
                            queue.offer(newWord);
                        }
                    }
                    chars[j] = original;
                }
            }
            level++;
        }
        
        return 0;
    }
}
```
