---
title: "Path with Maximum Probability - Solution"
date: 2026-10-03T11:20:00+05:30
problemUrl: "/problems/path-with-maximum-probability/"
weight: 47
---
<!-- All rights reserved to CSRGO DSA -->

## Explanation

Finding the path with the maximum product of edge probabilities is equivalent to finding the shortest path on a graph with negative log-transformed edge weights. We can directly adapt Dijkstra's algorithm to greedily explore paths in descending order of probability using a max-heap.

Key points:
1. Since all edge probabilities are in $[0, 1]$, multiplying probabilities can never increase the value ($a \cdot b \le a$ for $b \le 1$). This monotonic property guarantees that Dijkstra's greedy strategy works correctly without negative-weight anomalies.
2. We maintain an array `maxProb` where `maxProb[i]` stores the highest probability found so far to reach node `i`.
3. We initialize `maxProb[startNode] = 1.0` and all other nodes to `0.0`.
4. We push `(startNode, 1.0)` into a max-heap keyed by probability.
5. In each step, we extract the node with the highest probability. If this node is `endNode`, its current probability is guaranteed to be optimal.
6. For each outgoing edge, if transitioning through this edge yields a higher probability than currently recorded, we update `maxProb` and push the neighbor into the heap.

### Step-by-Step Algorithm:
1. Build an adjacency list `graph` where each node maps to a list of pairs `(neighbor, edgeProbability)`. Since edges are undirected, add both directions.
2. Initialize an array `maxProb` of size `n` with all entries set to `0.0`.
3. Set `maxProb[startNode] = 1.0`.
4. Create a max-heap `PriorityQueue` storing pairs `(node, prob)` sorted in descending order of `prob`.
5. Insert `(startNode, 1.0)` into the priority queue.
6. While the priority queue is not empty:
   - Poll the pair `(currNode, currProb)` with the highest probability.
   - If `currNode` equals `endNode`, return `currProb`.
   - If `currProb` is less than `maxProb[currNode]`, skip this entry as a better path to `currNode` has already been processed.
   - For each neighbor `(nextNeighbor, weight)` of `currNode`:
     - Calculate `candidateProb = currProb * weight`.
     - If `candidateProb > maxProb[nextNeighbor]`:
       - Update `maxProb[nextNeighbor] = candidateProb`.
       - Add `(nextNeighbor, candidateProb)` to the priority queue.
7. If the queue is exhausted and `endNode` was never reached, return `0.0`.

## Code

```java
static class Edge {
    int to;
    double prob;

    Edge(int to, double prob) {
        this.to = to;
        this.prob = prob;
    }
}

static class State implements Comparable<State> {
    int node;
    double prob;

    State(int node, double prob) {
        this.node = node;
        this.prob = prob;
    }

    @Override
    public int compareTo(State other) {
        return Double.compare(other.prob, this.prob);
    }
}

public static double solve(int n, int[][] edges, double[] succProb, int startNode, int endNode) {
    List<List<Edge>> graph = new ArrayList<>();
    for (int i = 0; i < n; i = i + 1) {
        graph.add(new ArrayList<>());
    }

    for (int i = 0; i < edges.length; i = i + 1) {
        int u = edges[i][0];
        int v = edges[i][1];
        double p = succProb[i];
        graph.get(u).add(new Edge(v, p));
        graph.get(v).add(new Edge(u, p));
    }

    double[] maxProb = new double[n];
    maxProb[startNode] = 1.0;

    PriorityQueue<State> pq = new PriorityQueue<>();
    pq.offer(new State(startNode, 1.0));

    while (!pq.isEmpty()) {
        State current = pq.poll();
        int u = current.node;
        double p = current.prob;

        if (u == endNode) {
            return p;
        }

        if (p < maxProb[u]) {
            continue;
        }

        List<Edge> neighbors = graph.get(u);
        for (int i = 0; i < neighbors.size(); i = i + 1) {
            Edge edge = neighbors.get(i);
            int next = edge.to;
            double nextProb = p * edge.prob;

            if (nextProb > maxProb[next]) {
                maxProb[next] = nextProb;
                pq.offer(new State(next, nextProb));
            }
        }
    }

    return 0.0;
}
```
