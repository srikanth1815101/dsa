---
title: "Add at Index - Solution"
problemUrl: "/problems/add-at-index/"
---
<!-- All rights reserved to CSRGO DSA -->

## Explanation

Inserting a node at index `idx` in a singly linked list requires locating the node immediately preceding index `idx`:
1. If `idx == 0`, allocate `newNode`, set `newNode.next = head`, and update `head = newNode`.
2. Otherwise, traverse the linked list to find the node at index `idx - 1` (let this be `prevNode`).
3. Set `newNode.next = prevNode.next`.
4. Update `prevNode.next = newNode`.
5. Traverse the list from `head` to populate and return an array of size `arr.length + 1`.

### Step-by-Step Algorithm:
1. Define a `Node` class with fields `data` and `next`.
2. Construct the singly linked list from `arr`.
3. If `idx == 0`:
   - Create `newNode` with `val`.
   - Set `newNode.next = head`.
   - Update `head = newNode`.
4. Else:
   - Traverse to index `idx - 1` from `head` using a pointer `curr`.
   - Create `newNode` with `val`.
   - Point `newNode.next = curr.next`.
   - Point `curr.next = newNode`.
5. Traverse from `head` and copy node values into an array of size `arr.length + 1`.
6. Return the array.

## Code

```java
public static int[] solve(int[] arr, int idx, int val) {
    class Node {
        int data;
        Node next;
        Node(int d) {
            this.data = d;
        }
    }

    Node head = null;
    Node tail = null;
    for (int i = 0; i < arr.length; i = i + 1) {
        Node node = new Node(arr[i]);
        if (head == null) {
            head = node;
            tail = node;
        } else {
            tail.next = node;
            tail = node;
        }
    }

    Node newNode = new Node(val);
    if (idx == 0) {
        newNode.next = head;
        head = newNode;
    } else {
        Node curr = head;
        for (int i = 0; i < idx - 1; i = i + 1) {
            curr = curr.next;
        }
        newNode.next = curr.next;
        curr.next = newNode;
    }

    int[] result = new int[arr.length + 1];
    Node curr = head;
    int k = 0;
    while (curr != null) {
        result[k] = curr.data;
        k = k + 1;
        curr = curr.next;
    }

    return result;
}
```
