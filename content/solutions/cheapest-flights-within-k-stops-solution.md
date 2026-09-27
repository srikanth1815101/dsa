---
title: "Cheapest Flights Within K Stops - Solution"
problemUrl: "/problems/cheapest-flights-within-k-stops/"
---
<!-- All rights reserved to CSRGO DSA -->

## Explanation

The problem asks for the minimum cost path from `src` to `dst` with at most `k` stops. A path with at most `k` stops contains at most `k + 1` edges (flights).

This is a classic variation of the **Bellman-Ford algorithm**:
1. Standard Bellman-Ford computes shortest paths by relaxing all edges `V - 1` times, where the `i`-th iteration computes shortest paths using at most `i` edges.
2. Here, we run exactly `k + 1` iterations of relaxation.
3. Crucially, during each iteration, we must read from a **snapshot copy** of the previous distance array (`prevDist`). This prevents an update from chaining across multiple edges within the same single relaxation round.
4. After `k + 1` rounds, if `dist[dst]` remains unreachable, return `-1`. Otherwise, return `dist[dst]`.

### Step-by-Step Algorithm:
1. Initialize `dist` array of size `n` with `100000000` (`INF`), and set `dist[src] = 0`.
2. Loop `i` from `0` to `k`:
   - Create a copy `temp` of array `dist`.
   - For each flight `[u, v, price]`:
     - If `dist[u] != INF` and `dist[u] + price < temp[v]`:
       - Update `temp[v] = dist[u] + price`.
   - Set `dist = temp`.
3. If `dist[dst] == INF`, return `-1`. Otherwise, return `dist[dst]`.

## Complexity Analysis

- **Time Complexity:** `O(k * E)` where `k` is the maximum allowable stops and `E` is the number of flights.
- **Space Complexity:** `O(V)` to store the distance arrays of size `n`.

## Code

```java
import java.util.Arrays;

class CheapestFlightsWithinKStops {
    public static int solve(int n, int[][] flights, int src, int dst, int k) {
        int[] dist = new int[n];
        int INF = 100000000;
        int i = 0;
        while (i < n) {
            dist[i] = INF;
            i = i + 1;
        }
        dist[src] = 0;

        int step = 0;
        while (step <= k) {
            int[] temp = new int[n];
            i = 0;
            while (i < n) {
                temp[i] = dist[i];
                i = i + 1;
            }

            int j = 0;
            while (j < flights.length) {
                int u = flights[j][0];
                int v = flights[j][1];
                int price = flights[j][2];

                if (dist[u] != INF) {
                    if (dist[u] + price < temp[v]) {
                        temp[v] = dist[u] + price;
                    }
                }
                j = j + 1;
            }

            dist = temp;
            step = step + 1;
        }

        if (dist[dst] == INF) {
            return -1;
        }
        return dist[dst];
    }
}
```
