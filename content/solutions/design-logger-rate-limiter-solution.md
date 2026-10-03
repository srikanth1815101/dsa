---
title: "Design Logger Rate Limiter - Solution"
problemUrl: "/problems/design-logger-rate-limiter/"
---
<!-- All rights reserved to CSRGO DSA -->

## Explanation

We maintain a hash map `lastSeen` mapping each unique string message to the timestamp at which it was last permitted to print.

For each incoming message `messages[i]` with timestamp `timestamps[i]`:
1. If the message is not in `lastSeen`, or if `timestamps[i] - lastSeen.get(messages[i]) >= 10`:
   - It is allowed: record `lastSeen.put(messages[i], timestamps[i])` and set `result[i] = true`.
2. Otherwise (`timestamps[i] - lastSeen.get(messages[i]) < 10`):
   - It is suppressed: set `result[i] = false` (crucially, do NOT update the timestamp in the map).

Each lookup and insertion takes average `O(1)` time, yielding `O(n)` overall runtime.

### Step-by-Step Algorithm:
1. Initialize an array `ans` of boolean flags of length `messages.length`.
2. Initialize a `Map<String, Integer> lastSeen = new HashMap<>()`.
3. Iterate `i` from `0` to `messages.length - 1`.
4. Let `msg = messages[i]` and `t = timestamps[i]`.
5. If `!lastSeen.containsKey(msg) || t - lastSeen.get(msg) >= 10`:
6. Set `ans[i] = true` and `lastSeen.put(msg, t)`.
7. Otherwise, set `ans[i] = false`.
8. Return `ans`.

## Code

```java
public static boolean[] solve(int[] timestamps, String[] messages) {
    int n = messages.length;
    boolean[] result = new boolean[n];
    Map<String, Integer> lastSeen = new HashMap<>();

    for (int i = 0; i < n; i = i + 1) {
        String msg = messages[i];
        int t = timestamps[i];

        if (!lastSeen.containsKey(msg) || t - lastSeen.get(msg) >= 10) {
            lastSeen.put(msg, t);
            result[i] = true;
        } else {
            result[i] = false;
        }
    }

    return result;
}
```
