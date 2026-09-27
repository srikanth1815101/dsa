---
title: "Alien Dictionary - Solution"
problemUrl: "/problems/alien-dictionary/"
---
<!-- All rights reserved to CSRGO DSA -->

## Explanation

The problem asks us to determine the order of characters in an unknown alphabet given a sorted list of words.

This problem translates directly into finding a **Topological Sort** on a Directed Acyclic Graph (DAG):
1. **Graph Nodes:** Each distinct character appearing across all words represents a node in the graph.
2. **Graph Edges:** Compare adjacent words `words[i]` and `words[i + 1]`. Find the first index `j` where `words[i].charAt(j) != words[i + 1].charAt(j)`. The character `words[i].charAt(j)` must appear before `words[i + 1].charAt(j)`, creating a directed edge `u -> v`.
3. **Invalid Prefix Check:** If `words[i]` is strictly longer than `words[i + 1]` and starts with `words[i + 1]` (e.g. `"abc"` comes before `"ab"`), the dictionary order is invalid, so immediately return `""`.
4. **Cycle Detection & Order:** Use Kahn's algorithm with a min-priority queue (to deterministically pick the smallest letter when ties exist). If the number of characters in the final topological ordering matches the total number of unique characters, return the order. Otherwise, a cycle exists, so return `""`.

### Step-by-Step Algorithm:
1. Identify all unique characters and initialize an adjacency map and an in-degree map for each unique character.
2. Iterate through consecutive pairs of words:
   - If `w1.length() > w2.length()` and `w1.startsWith(w2)`, return `""`.
   - Iterate characters until the first mismatch.
   - If an edge from `c1` to `c2` doesn't already exist, add `c2` to `adj.get(c1)` and increment `inDegree.put(c2, inDegree.get(c2) + 1)`.
3. Push all characters with an in-degree of `0` into a `PriorityQueue<Character>`.
4. While the queue is not empty:
   - Poll `curr` and append to `StringBuilder`.
   - For each neighbor `nbr` of `curr`, decrement its in-degree by 1.
   - If `inDegree` reaches `0`, add `nbr` to the queue.
5. If the length of the string builder equals the number of unique characters, return the string. Otherwise, return `""`.

## Complexity Analysis

- **Time Complexity:** `O(C)` where `C` is the total number of characters in all words combined. Building edges takes `O(C)` and topological sorting on at most 26 lowercase English letters takes `O(1)`.
- **Space Complexity:** `O(1)` or `O(U + min(U^2, N))` where `U <= 26` is the number of unique characters.

## Code

```java
import java.util.ArrayList;
import java.util.HashMap;
import java.util.HashSet;
import java.util.List;
import java.util.Map;
import java.util.PriorityQueue;
import java.util.Set;

class AlienDictionary {
    public static String solve(String[] words) {
        Map<Character, Set<Character>> graph = new HashMap<>();
        Map<Character, Integer> inDegree = new HashMap<>();

        int i = 0;
        while (i < words.length) {
            String word = words[i];
            int j = 0;
            while (j < word.length()) {
                char ch = word.charAt(j);
                if (!graph.containsKey(ch)) {
                    graph.put(ch, new HashSet<>());
                    inDegree.put(ch, 0);
                }
                j = j + 1;
            }
            i = i + 1;
        }

        i = 0;
        while (i < words.length - 1) {
            String w1 = words[i];
            String w2 = words[i + 1];

            if (w1.length() > w2.length() && w1.startsWith(w2)) {
                return "";
            }

            int minLen = Math.min(w1.length(), w2.length());
            int j = 0;
            while (j < minLen) {
                char c1 = w1.charAt(j);
                char c2 = w2.charAt(j);
                if (c1 != c2) {
                    if (!graph.get(c1).contains(c2)) {
                        graph.get(c1).add(c2);
                        inDegree.put(c2, inDegree.get(c2) + 1);
                    }
                    break;
                }
                j = j + 1;
            }
            i = i + 1;
        }

        PriorityQueue<Character> pq = new PriorityQueue<>();
        for (Map.Entry<Character, Integer> entry : inDegree.entrySet()) {
            if (entry.getValue() == 0) {
                pq.add(entry.getKey());
            }
        }

        StringBuilder sb = new StringBuilder();
        while (!pq.isEmpty()) {
            char curr = pq.poll();
            sb.append(curr);

            for (char neighbor : graph.get(curr)) {
                inDegree.put(neighbor, inDegree.get(neighbor) - 1);
                if (inDegree.get(neighbor) == 0) {
                    pq.add(neighbor);
                }
            }
        }

        if (sb.length() == inDegree.size()) {
            return sb.toString();
        }
        return "";
    }
}
```
