---
title: "Group Anagrams - Solution"
problemUrl: "/problems/group-anagrams/"
---
<!-- All rights reserved to CSRGO DSA -->

## Explanation

Because anagrams share identical character compositions, sorting any two anagrammatic strings produces the identical canonical string signature (e.g., `"eat"`, `"tea"`, and `"ate"` all sort to `"aet"`).

### Canonical Key Grouping
1. Initialize a hash map `map` mapping a `String` key to a `List<String>`.
2. For each string `s` in `strs`:
   - Convert `s` to a character array `ca = s.toCharArray()`.
   - Sort `ca` alphabetically using `Arrays.sort(ca)`.
   - Reconstruct the sorted canonical key `key = new String(ca)`.
   - If `key` is not already present in `map`, insert a new empty list.
   - Append original string `s` to `map.get(key)`.
3. Return `new ArrayList<>(map.values())`.

### Complexity Analysis
- **Time Complexity**: $O(N \times K \log K)$, where $N$ is the number of strings and $K$ is the maximum length of a string. Sorting each string takes $O(K \log K)$ time.
- **Space Complexity**: $O(N \times K)$, storing all strings and canonical keys in the hash map.

---

## Code

```java
import java.util.ArrayList;
import java.util.Arrays;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public static List<List<String>> solve(String[] strs) {
    if (strs == null || strs.length == 0) {
        return new ArrayList<>();
    }

    Map<String, List<String>> map = new HashMap<>();

    for (int i = 0; i < strs.length; i++) {
        String s = strs[i];
        char[] ca = s.toCharArray();
        Arrays.sort(ca);
        String key = new String(ca);

        if (!map.containsKey(key)) {
            map.put(key, new ArrayList<>());
        }

        map.get(key).add(s);
    }

    return new ArrayList<>(map.values());
}
```
