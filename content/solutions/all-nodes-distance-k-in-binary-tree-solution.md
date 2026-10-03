---
title: "All Nodes Distance K in Binary Tree - Solution"
date: 2026-10-03T11:20:00+05:30
problemUrl: "/problems/all-nodes-distance-k-in-binary-tree/"
weight: 31
---
<!-- All rights reserved to CSRGO DSA -->

## Explanation

Given a binary tree, a target node value, and an integer $K$, find all node values located at an edge distance of exactly $K$ from the target node, returning them sorted in ascending order.



A binary tree provides direct pointers to child nodes, but lacks pointers back to parent nodes. Nodes at distance $K$ can reside:
1. In the target's left or right subtrees (descendants).
2. Above the target node (ancestors and their other branches).

To traverse freely in both upward and downward directions:
1. Convert the binary tree into an undirected graph by mapping each node to its parent pointer using a preliminary traversal.
2. Once the target node is located, initiate a Breadth-First Search (BFS) starting from the target.
3. At each BFS step, expand in 3 directions: `left`, `right`, and `parent`.
4. Keep track of visited nodes using a `visited` set to avoid revisiting nodes.
5. After expanding $K$ levels, all nodes remaining in the BFS queue are at distance $K$.

### Step-by-Step Algorithm:
1. Build the tree from the input pre-order array. If the array is empty or root is null (`-1`), return an empty array.
2. Traverse the tree using BFS/DFS to build a parent mapping `Map<Node, Node> parentMap` and find the target `Node`.
3. If the target node is not found, return an empty array.
4. If `k == 0`, return an array containing only the target's value.
5. Initialize a queue for BFS and enqueue the target node. Maintain a `Set<Node> visited` and add the target node.
6. Initialize `currDist = 0`.
7. While the queue is not empty and `currDist < k`:
   - Let `size = queue.size()`.
   - For each node in the current level:
     - Check its left child: if not null and not visited, mark visited and enqueue.
     - Check its right child: if not null and not visited, mark visited and enqueue.
     - Check its parent (from `parentMap`): if not null and not visited, mark visited and enqueue.
   - Increment `currDist = currDist + 1`.
8. Collect all node values remaining in the queue into a list, sort them in ascending order, convert to an integer array, and return.

## Code

```java
static class Node {
    int val;
    Node left;
    Node right;

    Node(int val) {
        this.val = val;
    }
}

public static int[] solve(int[] arr, int targetVal, int k) {
    if (arr == null || arr.length == 0 || arr[0] == -1) {
        return new int[0];
    }

    Node root = buildTree(arr);
    Map<Node, Node> parentMap = new HashMap<>();
    Node[] targetNode = new Node[1];

    findParentsAndTarget(root, null, parentMap, targetVal, targetNode);
    if (targetNode[0] == null) {
        return new int[0];
    }

    Queue<Node> queue = new ArrayDeque<>();
    Set<Node> visited = new HashSet<>();

    queue.offer(targetNode[0]);
    visited.add(targetNode[0]);

    int dist = 0;
    while (!queue.isEmpty() && dist < k) {
        int size = queue.size();
        for (int i = 0; i < size; i = i + 1) {
            Node curr = queue.poll();

            if (curr.left != null && !visited.contains(curr.left)) {
                visited.add(curr.left);
                queue.offer(curr.left);
            }

            if (curr.right != null && !visited.contains(curr.right)) {
                visited.add(curr.right);
                queue.offer(curr.right);
            }

            Node parent = parentMap.get(curr);
            if (parent != null && !visited.contains(parent)) {
                visited.add(parent);
                queue.offer(parent);
            }
        }
        dist = dist + 1;
    }

    List<Integer> list = new ArrayList<>();
    while (!queue.isEmpty()) {
        list.add(queue.poll().val);
    }
    Collections.sort(list);

    int[] result = new int[list.size()];
    for (int i = 0; i < list.size(); i = i + 1) {
        result[i] = list.get(i);
    }
    return result;
}

private static void findParentsAndTarget(Node curr, Node parent, Map<Node, Node> parentMap, int targetVal, Node[] targetNode) {
    if (curr == null) {
        return;
    }
    if (curr.val == targetVal) {
        targetNode[0] = curr;
    }
    parentMap.put(curr, parent);
    findParentsAndTarget(curr.left, curr, parentMap, targetVal, targetNode);
    findParentsAndTarget(curr.right, curr, parentMap, targetVal, targetNode);
}

private static Node buildTree(int[] arr) {
        Node node;
        int state;
        Pair(Node node, int state) {
            this.node = node;
            this.state = state;
        }
    }

    Stack<Pair> st = new Stack<>();
    Node root = new Node(arr[0]);
    st.push(new Pair(root, 1));
    int idx = 1;

    while (!st.isEmpty() && idx < arr.length) {
        Pair top = st.peek();
        if (top.state == 1) {
            top.state = 2;
            if (arr[idx] != -1) {
                Node left = new Node(arr[idx]);
                top.node.left = left;
                st.push(new Pair(left, 1));
            }
            idx = idx + 1;
        } else if (top.state == 2) {
            top.state = 3;
            if (arr[idx] != -1) {
                Node right = new Node(arr[idx]);
                top.node.right = right;
                st.push(new Pair(right, 1));
            }
            idx = idx + 1;
        } else {
            st.pop();
        }
    }
    return root;
}
```
