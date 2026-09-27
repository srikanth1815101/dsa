---
title: "LFU Cache - Solution"
problemUrl: "/problems/lfu-cache/"
---
<!-- All rights reserved to CSRGO DSA -->

## Explanation

To achieve $O(1)$ time complexity for both `get` and `put`, we maintain:
1. `keyToNode`: a hash map from `key` to its corresponding `Node` containing `key`, `value`, `freq`, `prev`, and `next`.
2. `freqToList`: a hash map from frequency count `freq` to a doubly linked list of nodes with that frequency, ordered by recency.
3. `minFreq`: an integer variable tracking the current minimum frequency across all nodes in the cache.

When a node's frequency increases (upon `get` or updating `put`):
- Remove the node from its current frequency list in `freqToList`.
- If the current frequency list is empty and `minFreq` equals the node's old frequency, increment `minFreq = minFreq + 1`.
- Increment the node's frequency `node.freq = node.freq + 1`.
- Add the node to the head of the new frequency list in `freqToList`.

When inserting a new key into a full cache:
- Evict the least recently used node from `freqToList.get(minFreq)` (which is the node right before `tail`).
- Remove it from `keyToNode` and from the frequency list.
- Insert the new node with `freq = 1`, add it to `freqToList.get(1)`, and reset `minFreq = 1`.

### Step-by-Step Algorithm:
1. If `capacity <= 0`, any `put` operation is a no-op and `get` always returns `-1`.
2. Maintain `Map<Integer, Node> keyToNode`, `Map<Integer, DoublyLinkedList> freqToList`, and `int minFreq`.
3. For `"get key"`:
   - If not found, add `-1` to results.
   - If found, increment its frequency using the frequency promotion helper, and add its value to results.
4. For `"put key val"`:
   - If `key` exists, update its value, increment its frequency.
   - If `key` does not exist:
     - If size equals `capacity`, evict the tail of `freqToList.get(minFreq)`.
     - Create new node with `freq = 1`, insert into `keyToNode` and `freqToList.get(1)`, and set `minFreq = 1`.
     - Add `null` to results.
5. Return results list.

## Code

```java
public static List<Integer> solve(int capacity, String[] operations) {
    class Node {
        int key;
        int value;
        int freq;
        Node prev;
        Node next;
        Node(int k, int v) {
            this.key = k;
            this.value = v;
            this.freq = 1;
        }
    }

    class DLList {
        Node head;
        Node tail;
        int size;
        DLList() {
            head = new Node(0, 0);
            tail = new Node(0, 0);
            head.next = tail;
            tail.prev = head;
            size = 0;
        }
        void add(Node node) {
            node.next = head.next;
            node.prev = head;
            head.next.prev = node;
            head.next = node;
            size = size + 1;
        }
        void remove(Node node) {
            node.prev.next = node.next;
            node.next.prev = node.prev;
            size = size - 1;
        }
        Node removeLast() {
            if (size > 0) {
                Node node = tail.prev;
                remove(node);
                return node;
            }
            return null;
        }
    }

    Map<Integer, Node> keyToNode = new HashMap<>();
    Map<Integer, DLList> freqToList = new HashMap<>();
    int[] minFreq = new int[]{0};
    List<Integer> results = new ArrayList<>();

    for (int i = 0; i < operations.length; i = i + 1) {
        String op = operations[i];
        if (op.startsWith("put")) {
            if (capacity <= 0) {
                results.add(null);
                continue;
            }
            String[] parts = op.split("\\s+");
            int key = Integer.parseInt(parts[1]);
            int val = Integer.parseInt(parts[2]);
            if (keyToNode.containsKey(key)) {
                Node node = keyToNode.get(key);
                node.value = val;
                DLList curList = freqToList.get(node.freq);
                curList.remove(node);
                if (curList.size == 0 && minFreq[0] == node.freq) {
                    minFreq[0] = minFreq[0] + 1;
                }
                node.freq = node.freq + 1;
                freqToList.computeIfAbsent(node.freq, k -> new DLList()).add(node);
            } else {
                if (keyToNode.size() >= capacity) {
                    DLList minList = freqToList.get(minFreq[0]);
                    Node evicted = minList.removeLast();
                    if (evicted != null) {
                        keyToNode.remove(evicted.key);
                    }
                }
                Node newNode = new Node(key, val);
                keyToNode.put(key, newNode);
                minFreq[0] = 1;
                freqToList.computeIfAbsent(1, k -> new DLList()).add(newNode);
            }
            results.add(null);
        } else if (op.startsWith("get")) {
            if (capacity <= 0) {
                results.add(-1);
                continue;
            }
            String[] parts = op.split("\\s+");
            int key = Integer.parseInt(parts[1]);
            if (!keyToNode.containsKey(key)) {
                results.add(-1);
            } else {
                Node node = keyToNode.get(key);
                DLList curList = freqToList.get(node.freq);
                curList.remove(node);
                if (curList.size == 0 && minFreq[0] == node.freq) {
                    minFreq[0] = minFreq[0] + 1;
                }
                node.freq = node.freq + 1;
                freqToList.computeIfAbsent(node.freq, k -> new DLList()).add(node);
                results.add(node.value);
            }
        }
    }
    return results;
}
```
