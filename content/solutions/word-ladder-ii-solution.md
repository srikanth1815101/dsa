---
title: "Word Ladder II - Solution"
date: 2026-10-03T11:20:00+05:30
problemUrl: "/problems/word-ladder-ii/"
weight: 42
---
<!-- All rights reserved to CSRGO DSA -->

## Explanation

We must reconstruct all possible shortest sequences that transform `beginWord` into `endWord`, changing only one letter at a time, with all intermediate words present in `wordList`.



A naive BFS storing complete paths can explode exponentially in memory. Instead, we can divide the problem into two distinct phases:
1. **Phase 1 (BFS for Distances and Graph Building):**
   - Traverse layer by layer from `beginWord` using BFS.
   - Record the shortest distance (level) from `beginWord` to each visited word in a `Map<String, Integer> distanceMap`.
   - Also build a directed DAG of valid transitions where an edge $u \to v$ exists if $v$ differs by one character and `distanceMap.get(v) == distanceMap.get(u) + 1`.
   - As soon as the level containing `endWord` finishes, stop BFS.
2. **Phase 2 (DFS Backtracking for Paths):**
   - If `endWord` was reached during BFS, trace all paths from `beginWord` to `endWord` along the edges of the DAG using DFS backtracking.
   - Because the DAG only retains edges along shortest paths, every DFS path that reaches `endWord` is guaranteed to be of minimal length.

### Step-by-Step Algorithm:
1. Build a `HashSet<String> dict` of words from `wordList`. If `endWord` is not in `dict`, return an empty list.
2. Maintain `Map<String, Integer> dist` mapping words to their BFS depth, and `Map<String, List<String>> adj` mapping words to valid next words on shortest paths.
3. Perform BFS starting from `beginWord` with `dist.put(beginWord, 0)`.
   - When expanding word `curr` at distance `d`, generate all 1-character replacements.
   - For every neighbor `next`:
     - If `next` has not been visited, record `dist.put(next, d + 1)`, enqueue `next`, and add `next` to `adj.get(curr)`.
     - Else if `dist.get(next) == d + 1`, also add `next` to `adj.get(curr)` (as an alternate shortest path).
4. If `dist` does not contain `endWord`, return an empty list.
5. Perform DFS backtracking starting from `beginWord` to `endWord` collecting all valid paths.
6. Return the accumulated list of paths.

## Code

```java
public static List<List<String>> solve(String beginWord, String endWord, String[] wordList) {
    List<List<String>> results = new ArrayList<>();
    if (wordList == null || wordList.length == 0) {
        return results;
    }

    Set<String> dict = new HashSet<>();
    Collections.addAll(dict, wordList);

    if (!dict.contains(endWord)) {
        return results;
    }

    Map<String, Integer> dist = new HashMap<>();
    Map<String, List<String>> adj = new HashMap<>();

    Queue<String> queue = new ArrayDeque<>();
    queue.offer(beginWord);
    dist.put(beginWord, 0);

    boolean found = false;

    while (!queue.isEmpty() && !found) {
        int size = queue.size();
        for (int s = 0; s < size; s = s + 1) {
            String curr = queue.poll();
            int currentDist = dist.get(curr);
            adj.putIfAbsent(curr, new ArrayList<>());

            char[] chars = curr.toCharArray();
            for (int i = 0; i < chars.length; i = i + 1) {
                char orig = chars[i];
                for (char c = 'a'; c <= 'z'; c = (char) (c + 1)) {
                    if (c == orig) {
                        continue;
                    }
                    chars[i] = c;
                    String next = new String(chars);

                    if (dict.contains(next)) {
                        if (!dist.containsKey(next)) {
                            dist.put(next, currentDist + 1);
                            queue.offer(next);
                            adj.get(curr).add(next);
                            if (next.equals(endWord)) {
                                found = true;
                            }
                        } else if (dist.get(next) == currentDist + 1) {
                            adj.get(curr).add(next);
                        }
                    }
                }
                chars[i] = orig;
            }
        }
    }

    if (!dist.containsKey(endWord)) {
        return results;
    }

    List<String> path = new ArrayList<>();
    path.add(beginWord);
    dfs(beginWord, endWord, adj, dist, path, results);

    return results;
}

private static void dfs(String curr, String endWord, Map<String, List<String>> adj, Map<String, Integer> dist, List<String> path, List<List<String>> results) {
    if (curr.equals(endWord)) {
        results.add(new ArrayList<>(path));
        return;
    }

    List<String> neighbors = adj.get(curr);
    if (neighbors == null) {
        return;
    }

    for (int i = 0; i < neighbors.size(); i = i + 1) {
        String next = neighbors.get(i);
        if (dist.get(next) == dist.get(curr) + 1) {
            path.add(next);
            dfs(next, endWord, adj, dist, path, results);
            path.remove(path.size() - 1);
        }
    }
}
```
