---
title: "LRU Cache - Solution"
problemUrl: "/problems/lru-cache/"
---
<!-- All rights reserved to CSRGO DSA -->

## Explanation

To achieve $O(1)$ average time complexity for both `get` and `put`, we combine a Hash Map with a Doubly Linked List with dummy head and tail nodes:
1. **Hash Map (`map`)**: Maps each integer `key` to its corresponding node in the doubly linked list, enabling $O(1)$ lookups.
2. **Doubly Linked List**: Maintains recency order. The node right after `head` is the Most Recently Used (MRU), and the node right before `tail` is the Least Recently Used (LRU).

When `get(key)` is invoked:
- If `key` is not in `map`, return `-1`.
- If `key` exists, detach the node from its current position, insert it immediately after `head` (marking it MRU), and return its value.

When `put(key, value)` is invoked:
- If `key` already exists, update its value and move its node to `head`.
- If `key` does not exist:
  - If the cache has reached maximum `capacity`, remove the node right before `tail` (LRU) from both the linked list and the `map`.
  - Create a new node with `(key, value)`, insert it after `head`, and add it to `map`.

### Step-by-Step Algorithm:
1. Define a `Node` class with `key`, `value`, `prev`, and `next`.
2. Initialize dummy `head` and `tail` connected to each other, along with a `HashMap<Integer, Node>`.
3. Implement helper functions:
   - `addNode(Node node)`: inserts `node` immediately after `head`.
   - `removeNode(Node node)`: detaches `node` by updating pointers of `node.prev` and `node.next`.
   - `moveToHead(Node node)`: calls `removeNode(node)` then `addNode(node)`.
   - `popTail()`: removes and returns the node preceding `tail`.
4. For each operation:
   - If `"get key"`: query `map`, move to head if found, add value or `-1` to results.
   - If `"put key val"`: update existing or insert new node, evicting from tail if exceeding `capacity`. Add `null` to results.
5. Return the list of results.

## Code

```java
public static List<Integer> solve(int capacity, String[] operations) {
    class Node {
        int key;
        int value;
        Node prev;
        Node next;
        Node(int k, int v) {
            this.key = k;
            this.value = v;
        }
    }

    Map<Integer, Node> map = new HashMap<>();
    Node head = new Node(0, 0);
    Node tail = new Node(0, 0);
    head.next = tail;
    tail.prev = head;

    List<Integer> results = new ArrayList<>();

    for (int i = 0; i < operations.length; i = i + 1) {
        String op = operations[i];
        if (op.startsWith("put")) {
            String[] parts = op.split("\\s+");
            int key = Integer.parseInt(parts[1]);
            int val = Integer.parseInt(parts[2]);
            if (map.containsKey(key)) {
                Node node = map.get(key);
                node.value = val;
                node.prev.next = node.next;
                node.next.prev = node.prev;
                node.next = head.next;
                node.prev = head;
                head.next.prev = node;
                head.next = node;
            } else {
                if (map.size() >= capacity) {
                    Node lru = tail.prev;
                    lru.prev.next = tail;
                    tail.prev = lru.prev;
                    map.remove(lru.key);
                }
                Node newNode = new Node(key, val);
                map.put(key, newNode);
                newNode.next = head.next;
                newNode.prev = head;
                head.next.prev = newNode;
                head.next = newNode;
            }
            results.add(null);
        } else if (op.startsWith("get")) {
            String[] parts = op.split("\\s+");
            int key = Integer.parseInt(parts[1]);
            if (!map.containsKey(key)) {
                results.add(-1);
            } else {
                Node node = map.get(key);
                node.prev.next = node.next;
                node.next.prev = node.prev;
                node.next = head.next;
                node.prev = head;
                head.next.prev = node;
                head.next = node;
                results.add(node.value);
            }
        }
    }
    return results;
}
```
