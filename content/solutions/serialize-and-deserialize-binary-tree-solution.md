---
title: "Serialize and Deserialize Binary Tree - Solution"
problemUrl: "/problems/serialize-and-deserialize-binary-tree/"
---
<!-- All rights reserved to CSRGO DSA -->

## Explanation

Serializing and deserializing a binary tree requires an unambiguous representation of the tree structure:
1. **Serialization**:
   - A pre-order depth-first traversal visits each node, appending its value followed by a delimiter (comma `,`).
   - If a reference is null, append the special marker `"null,"`.
   - Recording null child positions ensures that the pre-order sequence uniquely identifies the binary tree shape without needing an auxiliary inorder traversal.
2. **Deserialization**:
   - Split the serialized string by comma into a sequence of tokens and store them into a FIFO queue.
   - Poll the next token from the front of the queue:
     - If the token equals `"null"` or the queue is exhausted, return `null`.
     - Otherwise, parse the integer value to instantiate a new `Node`.
     - Recursively construct the left child by polling from the queue.
     - Recursively construct the right child by polling from the queue.
     - Return the constructed `Node`.
3. Performing both operations in sequence provides a complete round-trip verification of the tree codec in $O(n)$ time.

### Step-by-Step Algorithm:
1. If the input string `data` is empty or equals `"null"`, return `"null"`.
2. Define a `Node` class with integer `val` and pointers `left`, `right`.
3. Split `data` by `","` into an array of strings, and populate a `LinkedList<String>` queue with all tokens.
4. Define recursive function `deserialize(Queue<String> queue)`:
   - If `queue.isEmpty()`, return `null`.
   - Poll `String token = queue.poll()`.
   - If `token.equals("null")`, return `null`.
   - Create `Node node = new Node(Integer.parseInt(token))`.
   - Set `node.left = deserialize(queue)`.
   - Set `node.right = deserialize(queue)`.
   - Return `node`.
5. Call `Node root = deserialize(queue)`.
6. Define recursive function `serialize(Node node, List<String> list)`:
   - If `node == null`, add `"null"` to `list` and return.
   - Add `String.valueOf(node.val)` to `list`.
   - Recurse `serialize(node.left, list)`.
   - Recurse `serialize(node.right, list)`.
7. Call `serialize(root, outputList)`.
8. Join all items in `outputList` with `","` and return the resulting string.

## Code

```java
public static String solve(String data) {
    if (data == null || data.length() == 0 || data.equals("null")) {
        return "null";
    }

    class Node {
        int val;
        Node left;
        Node right;
        Node(int val) {
            this.val = val;
        }
    }

    class Codec {
        Node deserialize(Queue<String> queue) {
            if (queue.isEmpty()) {
                return null;
            }
            String token = queue.poll();
            if (token.equals("null")) {
                return null;
            }
            Node node = new Node(Integer.parseInt(token));
            node.left = deserialize(queue);
            node.right = deserialize(queue);
            return node;
        }

        void serialize(Node node, List<String> list) {
            if (node == null) {
                list.add("null");
                return;
            }
            list.add(String.valueOf(node.val));
            serialize(node.left, list);
            serialize(node.right, list);
        }
    }

    String[] tokens = data.split(",");
    Queue<String> queue = new LinkedList<>(Arrays.asList(tokens));

    Codec codec = new Codec();
    Node root = codec.deserialize(queue);

    if (root == null) {
        return "null";
    }

    List<String> resultList = new ArrayList<>();
    codec.serialize(root, resultList);

    return String.join(",", resultList);
}
```
