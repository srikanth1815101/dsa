---
title: "Nodes K Distance - Solution"
problemUrl: "/problems/nodes-k-distance/"
---
<!-- All rights reserved to CSRGO DSA -->

## Explanation

To find all nodes at distance `k` from a `target` node in a binary tree:
1. Locate the path of nodes from `target` up to `root` (`path = [target, parent, ..., root]`).
2. For each node `node = path.get(i)` at distance `i` from the target:
   - Any nodes that are `k - i` levels below `node` in its other branch (excluding the branch that leads towards the target) are at total distance `k`.
   - Use `blocker = (i > 0) ? path.get(i - 1) : null` to avoid searching down the branch already traversed.
3. Collect all matching node values into a list and return them as an array.

### Step-by-Step Algorithm:
1. Reconstruct the binary tree using the state-stack parser.
2. Find `path = nodeToRootPath(root, target)`.
3. If `path.isEmpty()`, return an empty array.
4. For `i` from `0` to `path.size() - 1`:
   - `kDown(path.get(i), k - i, (i > 0) ? path.get(i - 1) : null)`.
5. Helper `kDown(node, depth, blocker)`:
   - If `node == null || depth < 0 || node == blocker`, return.
   - If `depth == 0`, add `node.val` to result list and return.
   - Recurse on `node.left` and `node.right` with `depth - 1`.
6. Convert result list to `int[]` and return.

## Code

```java
public static int[] solve(int[] arr, int target, int k) {
    if (arr.length == 0 || arr[0] == -1 || k < 0) {
        return new int[0];
    }

    class Node {
        int val;
        Node left;
        Node right;
        Node(int val) {
            this.val = val;
        }
    }

    class Pair {
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
                Node leftNode = new Node(arr[idx]);
                top.node.left = leftNode;
                st.push(new Pair(leftNode, 1));
            }
            idx = idx + 1;
        } else if (top.state == 2) {
            top.state = 3;
            if (arr[idx] != -1) {
                Node rightNode = new Node(arr[idx]);
                top.node.right = rightNode;
                st.push(new Pair(rightNode, 1));
            }
            idx = idx + 1;
        } else {
            st.pop();
        }
    }

    class Solver {
        List<Node> getPath(Node node, int tgt) {
            if (node == null) {
                return new ArrayList<>();
            }
            if (node.val == tgt) {
                List<Node> list = new ArrayList<>();
                list.add(node);
                return list;
            }
            List<Node> leftPath = getPath(node.left, tgt);
            if (leftPath.size() > 0) {
                leftPath.add(node);
                return leftPath;
            }
            List<Node> rightPath = getPath(node.right, tgt);
            if (rightPath.size() > 0) {
                rightPath.add(node);
                return rightPath;
            }
            return new ArrayList<>();
        }

        void printKDown(Node node, int depth, Node blocker, List<Integer> res) {
            if (node == null || depth < 0 || node == blocker) {
                return;
            }
            if (depth == 0) {
                res.add(node.val);
                return;
            }
            printKDown(node.left, depth - 1, blocker, res);
            printKDown(node.right, depth - 1, blocker, res);
        }
    }

    Solver solver = new Solver();
    List<Node> path = solver.getPath(root, target);
    List<Integer> resultList = new ArrayList<>();

    for (int i = 0; i < path.size(); i = i + 1) {
        Node blocker = (i > 0) ? path.get(i - 1) : null;
        solver.printKDown(path.get(i), k - i, blocker, resultList);
    }

    int[] result = new int[resultList.size()];
    for (int i = 0; i < resultList.size(); i = i + 1) {
        result[i] = resultList.get(i);
    }

    return result;
}
```
